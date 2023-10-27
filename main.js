const cngBtn = document.querySelector('#cng-btn')
const displayColorCode = document.querySelector('.display-color-code')


cngBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = colorRGB()
    displayColorCode.innerHTML=colorRGB()
})



//generate RGB color
function colorRGB() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    
    return `rgb(${red},${green},${blue})`
 }