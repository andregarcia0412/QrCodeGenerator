function generate_qr(){
    const qr_code_link = document.getElementById("link_input").value.trim()
    const qrContainer = document.getElementById("qrContainer")
    const errorP = document.getElementById("errorP")

    if(!qr_code_link){
        show_toast("Insira um link", 3000 )
        return;
    }

    qrContainer.innerHTML=""
    let qrCode
    qrCode = new QRCode(qrContainer, {
        text: qr_code_link,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#FFFFFF",
    })
    const download_button = document.getElementById("download_button")
    download_button.classList.remove("disabled")
}

function download_qr(){
    const canvas = document.querySelector("canvas")
    const link = document.createElement("a")
    link.download = "qr-code.png"
    link.href = canvas.toDataURL("image/png")
    link.click()
}

function show_toast(message, timer){
    const toast_container = document.querySelector(".toast_container")
    const toast = document.querySelector(".toast")
    const toast_message = document.querySelector(".toast_message")
    toast_message.textContent = message
    toast.classList.add("show")

    setTimeout(() => toast.classList.remove("show"), timer)

}

const qr_code_link = document.getElementById("link_input")
const generate_qr_btn = document.getElementById("generate_button")
qr_code_link.addEventListener("keypress", (event) =>{
    if(event.key == "Enter"){
        event.preventDefault()
        generate_qr_btn.click()
    }
})