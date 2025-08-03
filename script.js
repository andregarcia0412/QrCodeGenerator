function generate_qr(){
    const qr_code_link = document.getElementById("link_input").value.trim()
    const qrContainer = document.getElementById("qrContainer")
    const errorP = document.getElementById("errorP")

    if(!qr_code_link){
        errorP.style.marginLeft = "auto"
        errorP.style.color = "red"
        errorP.textContent = "Insira um link"
        return;
    }
    errorP.textContent = ""

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
    download_button.style.display = "block"
}

function download_qr(){
    const canvas = document.querySelector("canvas")
    const link = document.createElement("a")
    link.download = "qr-code.png"
    link.href = canvas.toDataURL("image/png")
    link.click()
}