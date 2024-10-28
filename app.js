// import chroma from 'chroma-js'
// import chroma from 'https://unpkg.com/chroma-js@3.0.0/index.js'

const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', (event) => {
  event.preventDefault()

  event.code === 'Space' ? setRandomColor() : false
})

document.addEventListener('click', (event) => {
  const type = event.target.dataset.type
  if (type === 'lock') {
    const node =
      event.target.tagName.toLowerCase() === 'i'
        ? event.target
        : event.target.children[0]

    node.classList.toggle('fa-lock-open')
    node.classList.toggle('fa-lock')
  } else if (type === 'copy') {
    copyText(event.target.textContent)
  }
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

function copyText(text) {
  return navigator.clipboard.writeText(text)
}

function setRandomColor() {
  const colors = []

  cols.forEach((item) => {
    const locked = item.querySelector('i').classList.contains('fa-lock')
    const text = item.querySelector('.col_text')
    const button = item.querySelector('.col_button')
    // const color = generateColor()
    const color = chroma.random()

    if (locked) {
      colors.push(text.textContent)
      return
    }

    colors.push(color)

    text.textContent = color
    item.style.background = color

    setTextColor(text, color)
    setTextColor(button, color)
  })

  updateColorsHash(colors)
}

function setTextColor(text, color) {
  const luminance = chroma(color).luminance()
  text.style.color = luminance > 0.5 ? 'black' : 'white'
}

function updateColorsHash(colors = []) {
  document.location.hash = colors.map((item) => item.substring(1)).join('-')
}

setRandomColor()
