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

    selectItems.forEach(listItem => {
      listItem.addEventListener('click', () => {
        const choice = listItem.textContent.trim()
        select.dataset.choice = choice
        select.querySelector('.select__choice').textContent = choice
        selectItems.forEach(item => {
          item !== listItem &&
            item.querySelector('.checkbox').classList.remove('checkbox--select')
        })
        listItem.querySelector('.checkbox').classList.add('checkbox--select')
      })
    })
  })

  const checkboxSelects = document.querySelectorAll('.checkbox-select')

  checkboxSelects.forEach(select => {
    const checkbox = select.querySelector('.checkbox')

    select.addEventListener('click', () => {
      const dataSelected = select.dataset.selected
      select.dataset.selected = dataSelected === 'true' ? 'false' : 'true'
      checkbox.classList.toggle('checkbox--select')
    })
  })

  const options = {
    subtitle: {
      text: 'Количество отзывов',
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '13px',
        color: '#A3A7B1'
      }
    },
    chart: {
      foreColor: '#9DA5B1',
      fontFamily: 'Rubik, "sans-serif"',
      height: 350,
      type: 'area',

      toolbar: {
        show: true,
        tools: {
          download: '<div class="apexcharts__download"><span></span></div>',
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: []
        },
        autoSelected: 'zoom'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    series: [
      {
        name: 'Всего',
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: 'Негативные отзывы',
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
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: false,
      style: {
        fontSize: '11px',
        fontFamily: 'Rubik, "sans-serif"'
      },
      onDatasetHover: {
        highlightDataSeries: false
      },
      x: {
        show: true,
        format: 'dd MMM',
        formatter: undefined
      },
      y: {
        formatter: undefined,
        title: {
          formatter: seriesName => seriesName
        }
      },
      z: {
        formatter: undefined,
        title: 'Size: '
      },
      marker: {
        show: false
      },
      items: {
        display: 'flex'
      },
      fixed: {
        enabled: false,
        position: 'topRight',
        offsetX: 0,
        offsetY: 0
      }
    }
  }

  const chart = new ApexCharts(page.querySelector('.area-chart'), options)

  chart.render()
})
