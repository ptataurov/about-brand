export default (
  clickNode,
  popupNode,
  showClass,
  delay = 200,
  cb = () => {}
) => {
  clickNode.addEventListener('click', () => {
    if (popupNode.classList.contains(showClass)) {
      popupNode.classList.remove('fade-in')
      popupNode.classList.add('fade-out')

      setTimeout(() => {
        popupNode.classList.remove(showClass)
        cb()
      }, delay)
    } else {
      popupNode.classList.add(showClass)
      popupNode.classList.add('fade-in')
      popupNode.classList.remove('fade-out')
      cb()
    }
  })
}
