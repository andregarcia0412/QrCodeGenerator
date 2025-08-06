function generate_qr(QRcolor){
    const qr_code_link = document.getElementById("link_input").value.trim()
    const qrContainer = document.getElementById("qrContainer")
    
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
        colorDark: QRcolor,
        colorLight: "#FFFFFF",
    })
    const download_button = document.getElementById("download_button")
    download_button.classList.remove("disabled")
    const color_input = document.getElementById("color_input")
    color_input.classList.remove("disabled")
    color_input.removeAttribute("disabled")
    const select_p = document.getElementById("label_color_input")
    select_p.classList.remove("disabled")
    select_p.removeAttribute("disabled")
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

const color_input = document.getElementById("color_input")
color_input.addEventListener("change", () => generate_qr(color_input.value))
const slider_input = document.getElementById("chk")
const ball_image = document.getElementById("ball_img")
slider_input.addEventListener("click", () => {
    if (ball_image.src.includes("QrCodeGenerator/assets/sun-symbol-512.webp")){
        ball_image.src = '../QrCodeGenerator/assets/moon-20.png'
    } else if(ball_image.src.includes("QrCodeGenerator/assets/moon-20.png")){
        ball_image.src = '../QrCodeGenerator/assets/sun-symbol-512.webp'
    }
    console.log(slider_input.value)
})