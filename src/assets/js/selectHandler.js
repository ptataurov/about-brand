import fadeToggle from './fadeToggle'

const selectHandler = (select, isOneChoice, isTags) => {
  const selectHeader = select.querySelector('.select__header')
  const selectItems = select.querySelectorAll('.select__item')
  const body = select.querySelector('.select__body')
  const choiceNode = select.querySelector('.select__choice')

  if (select.classList.contains('select--control')) {
    const searchGroup = select.querySelector('.select__search-group')
    const input = searchGroup.querySelector('.select__search-input')

    input.addEventListener('click', () => {
      !input.value && searchGroup.classList.add('select__search-group--input')
    })

    input.addEventListener('blur', () => {
      !input.value &&
        searchGroup.classList.remove('select__search-group--input')
    })
  }

  fadeToggle(selectHeader, body, 'select__body--show', 200)

  // if (isTags) {
  //   const tagsFragment = document.createDocumentFragment()

  //   selectItems.forEach(item => {
  //     const tag = document.createElement('span')
  //     tag.classList.add('select__item-tag')
  //     const choice = item.dataset.value
  //     tag.textContent = choice
  //     item.tag = tag

  //     const isCheck = item.querySelector('.checkbox--select') ? true : false

  //     item.isCheck = isCheck

  //     isCheck && tagsFragment.append(item.tag)

  //     item.addEventListener('click', () => {
  //       if (item.isCheck) {
  //         item.isCheck = false

  //         choiceNode.removeChild(item.tag)
  //       } else {
  //         item.isCheck = true
  //         choiceNode.append(item.tag)
  //       }
  //     })
  //   })

  //   choiceNode.prepend(tagsFragment)
  // }

  selectItems.forEach(item => {
    item.addEventListener('click', () => {
      item.querySelector('.checkbox').classList.toggle('checkbox--select')
    })

    if (isOneChoice) {
      selectItems.forEach(listItem => {
        listItem.addEventListener('click', () => {
          const choice = listItem.dataset.value
          select.dataset.choice = choice
          choiceNode.textContent = choice
          selectItems.forEach(item => {
            item !== listItem &&
              item
                .querySelector('.checkbox')
                .classList.remove('checkbox--select')
          })
          listItem.querySelector('.checkbox').classList.add('checkbox--select')
        })
      })
    }
  })
}

const selectHandlerMultiple = select => {
  const selectHeader = select.querySelector('.select__header')
  const selectItems = select.querySelectorAll('.select__item')
  const body = select.querySelector('.select__body')

  select.selected = []

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

  selectItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('select__item--selected')
    })
  })
}

export { selectHandler, selectHandlerMultiple }

// , () => {
//   const otherBody = document.querySelectorAll('.select__body')
//   otherBody.forEach(item => {
//     if (item !== body) {
//       item.classList.remove('fade-in')
//       item.classList.add('fade-out')

//       setTimeout(() => {
//         item.classList.remove('select__body--show')
//       }, 200)
//     }
//   })
// }
