import decimalColorCode from "./decimalColorCode.js"
import colorRGB from "./colorRgb.js"
import colorHEX from "./colorHex.js"

const cngBtn = document.querySelector('#change-btn')
const colorDisplay = document.querySelector('.color-display')
const rgbCode = document.querySelector('.rgb-code')
const hexCode = document.querySelector('.hex-code')


cngBtn.addEventListener('click', () => {
    const color = decimalColorCode()
    colorDisplay.style.backgroundColor = colorRGB(color)
    rgbCode.innerHTML = colorRGB(color)
    hexCode.innerHTML=colorHEX(color)
})



