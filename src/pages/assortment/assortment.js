import './assortment.scss'
import './_imports/import'

import { selectHandler } from '../../assets/js/selectHandler'

window.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('assortment-pg')
  selectHandler(page.querySelector('[data-type=category'), true)
  selectHandler(page.querySelector('[data-type=assignment'), true)
})
