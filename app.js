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

generateColor()

function setRandomColor() {
  cols.forEach((item) => {})
}

setRandomColor()
