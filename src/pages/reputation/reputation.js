import './reputation.scss'
import './_imports/import'

import { selectHandler } from '../../assets/js/selectHandler'
import selectCheckboxHandler from '../../assets/js/selectCheckboxHandler'
import ApexCharts from 'apexcharts'

window.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('reputation-pg')
  selectHandler(page.querySelector('[data-type=date-sort'), true)

  selectCheckboxHandler(page.querySelector('[data-type=increasing]'))

  selectCheckboxHandler(page.querySelector('[data-type=all]'))

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
      tooltip: {
        enabled: false
      },
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
