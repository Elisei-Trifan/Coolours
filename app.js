// import chroma from 'chroma-js'
// import chroma from 'https://unpkg.com/chroma-js@3.0.0/index.js'

const cols = document.querySelectorAll('.col')

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
    const color = generateColor()
    text.textContent = color

    // item.style.background = color
    item.style.background = chroma.random()
  })
}

setRandomColor()
