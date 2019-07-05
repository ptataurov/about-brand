import './search-results.scss'
import './_imports/import'

import { selectHandler } from '../../assets/js/selectHandler'

window.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('search-results-pg')

  selectHandler(page.querySelector('[data-type=search-bot]'), true)
})
