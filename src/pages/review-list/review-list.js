import './review-list.scss'
import './_imports/import'

import {
  selectHandler,
  selectHandlerMultiple
} from '../../assets/js/selectHandler'

window.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('review-list-pg')

  selectHandler(page.querySelector('[data-type=goods]'))

  selectHandler(page.querySelector('[data-type=platforms]'), false, true)

  selectHandler(page.querySelector('[data-type=in-search]'), true)

  selectHandler(page.querySelector('[data-type=status]'), true)

  selectHandlerMultiple(page.querySelector('[data-type=rating]'))
})
