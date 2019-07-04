import './_imports/import'

window.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.reviews__table')

  const btnToggle = table.querySelectorAll('.btn-toggle')

  btnToggle.forEach(btn => {
    const labelNode = btn.querySelector('.btn-toggle__label')

    btn.addEventListener('click', () => {
      btn.classList.toggle('btn-toggle--active')

      labelNode.textContent = btn.classList.contains('btn-toggle--active')
        ? 'Обработан'
        : 'Не обработан'
    })
  })

  const reviewNodes = table.querySelectorAll(
    '.reviews__table-body > tr:nth-child(2n + 1)'
  )

  reviewNodes.forEach(review => {
    const toggleBtn = review.querySelector('.reviews__table-toggle-btn')

    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('reviews__table-toggle-btn--open')
      toggleBtn.textContent = toggleBtn.classList.contains(
        'reviews__table-toggle-btn--open'
      )
        ? 'Закрыть отзыв'
        : 'Открыть отзыв'

      review.nextElementSibling.classList.toggle(
        'reviews__table-review-body--open'
      )
    })
  })
})
