import './style.css'

const button = document.getElementById('menu-button')
const menu = document.getElementById('menu')
const iconOpen = document.getElementById('icon-open')
const iconClose = document.getElementById('icon-close')

function setMenu(open) {
  menu.classList.toggle('hidden', !open)
  iconOpen.classList.toggle('hidden', open)
  iconClose.classList.toggle('hidden', !open)
  button.setAttribute('aria-expanded', open)
  button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
}

button.addEventListener('click', () => {
  setMenu(menu.classList.contains('hidden'))
})

// Tutup menu otomatis setelah salah satu link diklik
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false))
})