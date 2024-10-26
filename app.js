// import chroma from 'chroma-js'
// import chroma from 'https://unpkg.com/chroma-js@3.0.0/index.js'

const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', (event) => {
  event.code === 'Space' ? setRandomColor() : false
})

function generateColor() {
  // FF0000
  // 00FF00
  // 0000FF

  const hex = '0123456789ABCDEF'
  let color = ''
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)]
  }
  return '#' + color
}

function setRandomColor() {
  cols.forEach((item) => {
    const text = item.querySelector('.col_text')
    const button = item.querySelector('.col_button')
    // const color = generateColor()
    const color = chroma.random()
    text.textContent = color

    item.style.background = color

    setTextColor(text, color)
    setTextColor(button, color)
  })
}

function setTextColor(text, color) {
  const luminance = chroma(color).luminance()
  text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColor()
