const cngBtn = document.querySelector('#cng-btn')
const rgbCode = document.querySelector('.rgb-code')
const hexCode = document.querySelector('.hex-code')


cngBtn.addEventListener('click', () => {
    const color = decimalColorCode()
    document.body.style.backgroundColor = colorHEX(color)
    rgbCode.innerHTML = colorRGB(color)
    hexCode.innerHTML=colorHEX(color)
})


//generate decimal color code
function decimalColorCode() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    return {
        red,
        green,
        blue
    }
}


//generate RGB color
function colorRGB({red,green,blue}) {
    return `rgb(${red},${green},${blue})`
}
 

//generate HEX color
function colorHEX({red,green,blue}) {
    const r = red.toString(16)
    const g = green.toString(16)
    const b = blue.toString(16)

    return `#${r}${g}${b}`
}



