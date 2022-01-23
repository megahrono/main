const buttons = document.querySelectorAll('button')
const btnWrap = document.querySelector('.btn-wrap')
const menu = document.querySelector('menu')

btnWrap.addEventListener('click', () => {
  buttons.forEach((s) => {
    s.classList.contains('active')
      ? s.classList.remove('active')
      : s.classList.add('active')
  })
  menu.classList.contains('open')
    ? menu.classList.remove('open')
    : menu.classList.add('open')
})
