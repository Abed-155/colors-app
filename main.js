import decimalColorCode from "./decimalColorCode.js"
import colorRGB from "./colorRgb.js"
import colorHEX from "./colorHex.js"

const cngBtn = document.querySelector('#cng-btn')
const rgbCode = document.querySelector('.rgb-code')
const hexCode = document.querySelector('.hex-code')


cngBtn.addEventListener('click', () => {
    const color = decimalColorCode()
    document.body.style.backgroundColor = colorRGB(color)
    rgbCode.innerHTML = colorRGB(color)
    hexCode.innerHTML=colorHEX(color)
})



