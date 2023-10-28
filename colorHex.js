function colorHEX({red,green,blue}) {
    const r = red.toString(16)
    const g = green.toString(16)
    const b = blue.toString(16)

    return `#${r}${g}${b}`
}

export default colorHEX