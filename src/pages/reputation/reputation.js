import './reputation.scss'
import './_imports/import'

import ApexCharts from 'apexcharts'

import fadeToggle from '../../assets/js/fadeToggle'

window.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('reputation-pg')
  const selects = page.querySelectorAll('.select')
  selects.forEach(select => {
    const selectHeader = select.querySelector('.select__header')
    const selectItems = select.querySelectorAll('.select__item')
    const body = select.querySelector('.select__body')
    const searchGroup = select.querySelector('.select__search-group')
    // const input = searchGroup.querySelector('.select__search-input')

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

    // input.addEventListener('click', () => {
    //   !input.value && searchGroup.classList.add('select__search-group--input')
    // })

    // input.addEventListener('blur', () => {
    //   !input.value &&
    //     searchGroup.classList.remove('select__search-group--input')
    // })

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

  const options = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ],

    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00',
        '2018-09-19T01:30:00',
        '2018-09-19T02:30:00',
        '2018-09-19T03:30:00',
        '2018-09-19T04:30:00',
        '2018-09-19T05:30:00',
        '2018-09-19T06:30:00'
      ]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    }
  }

  const chart = new ApexCharts(page.querySelector('.area-chart'), options)

  chart.render()
})
