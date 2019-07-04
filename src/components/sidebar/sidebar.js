import './_imports/import'

const layout = document.querySelector('.layout')
const sidebar = layout.querySelector('.sidebar')
const toggleBtn = sidebar.querySelector('.sidebar__hamburger')

toggleBtn.addEventListener('click', () => {
  layout.classList.toggle('layout--switched')

  setTimeout(() => {
    layout.style.marginLeft = `${sidebar.offsetWidth}px`
  }, 200)
})
