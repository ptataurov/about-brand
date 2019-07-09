import './rivals.scss'
import './_imports/import'

import { selectHandler } from '../../assets/js/selectHandler'
import selectCheckboxHandler from '../../assets/js/selectCheckboxHandler'

import ApexCharts from 'apexcharts'

window.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('rivals-pg')

  selectHandler(page.querySelector('[data-type=sort]'), true)

  selectCheckboxHandler(page.querySelector('[data-type=increasing]'))

  const options = {
    chart: {
      foreColor: '#9DA5B1',
      fontFamily: 'Rubik, "sans-serif"',
      height: 350,
      type: 'line',
      toolbar: {
        show: true,
        tools: {
          download: '<div class="apexcharts__download"><span></span></div>',
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false
        },
        autoSelected: 'zoom'
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    series: [
      {
        name: 'Session Duration',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: 'Page Views',
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }
    ],
    title: {
      text: 'Всего отзывов',
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

    markers: {
      size: 0,

      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: [
        '01 Jan',
        '02 Jan',
        '03 Jan',
        '04 Jan',
        '05 Jan',
        '06 Jan',
        '07 Jan',
        '08 Jan',
        '09 Jan',
        '10 Jan',
        '11 Jan',
        '12 Jan'
      ]
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function(val) {
              return val + ' (mins)'
            }
          }
        },
        {
          title: {
            formatter: function(val) {
              return val + ' per session'
            }
          }
        },
        {
          title: {
            formatter: function(val) {
              return val
            }
          }
        }
      ]
    },
    grid: {
      borderColor: '#f1f1f1'
    }
  }

  const chart = new ApexCharts(page.querySelector('.area-chart'), options)

  chart.render()
})
