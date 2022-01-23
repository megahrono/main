//let headingElement = document.getElementById('gost')
//console.log(headingElement.innerHTML)
//ket newHeadingText = promt('Пожалуста, ведите как к вам оброщаться: ')
//headingElement.innerHTML = newHeadingText

let game = prompt('Как к Вам обращаться?')

let player = document.getElementById('name')
player.innerHTML = `Добро пожаловать, ${game}`
