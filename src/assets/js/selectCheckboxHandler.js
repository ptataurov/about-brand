const selectCheckboxHandler = select => {
  const checkbox = select.querySelector('.checkbox')

  select.addEventListener('click', () => {
    const dataSelected = select.dataset.selected
    select.dataset.selected = dataSelected === 'true' ? 'false' : 'true'

    checkbox.classList.toggle('checkbox--select')
  })
}

export default selectCheckboxHandler
