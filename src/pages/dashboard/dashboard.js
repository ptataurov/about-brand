import './dashboard.scss'
import './_imports/import'

import fadeToggle from '../../assets/js/fadeToggle'

const selects = document.querySelectorAll('.select')
selects.forEach(select => {
  const selectHeader = select.querySelector('.select__header')
  const selectItems = select.querySelectorAll('.select__item')
  const body = select.querySelector('.select__body')
  const searchGroup = select.querySelector('.select__search-group')
  const input = searchGroup.querySelector('.select__search-input')

  fadeToggle(selectHeader, body, 'select__body--show', 200, () => {
    const otherBody = document.querySelectorAll('.select__body')
    otherBody.forEach(item => {
      if (item !== body) {
        item.classList.remove('fade-in')
        item.classList.add('fade-out')

        setTimeout(() => {
          item.classList.remove('select__body--show')
        }, 200)
      }
    })
  })

  input.addEventListener('click', () => {
    !input.value && searchGroup.classList.add('select__search-group--input')
  })

  input.addEventListener('blur', () => {
    !input.value && searchGroup.classList.remove('select__search-group--input')
  })

  selectItems.forEach(item => {
    item.addEventListener('click', () => {
      item.querySelector('.checkbox').classList.toggle('checkbox--select')
    })
  })
})

const checkboxSelects = document.querySelectorAll('.checkbox-select')

checkboxSelects.forEach(select => {
  const checkbox = select.querySelector('.checkbox')

  select.addEventListener('click', () => {
    checkbox.classList.toggle('checkbox--select')
  })
})
