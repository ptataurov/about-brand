import './_imports/import'

import ApexCharts from 'apexcharts'

const options = {
  chart: {
    width: 380,
    type: 'donut'
  },
  dataLabels: {
    enabled: false
  },
  series: [44, 55, 13, 33],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }
  ],
  legend: {
    position: 'right',
    offsetY: 0,
    height: 230
  }
}

const chart = new ApexCharts(
  document.querySelector('.dashboard-pg .pie-chart'),
  options
)

// chart.render()

function appendData() {
  const arr = chart.w.globals.series.slice()
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)

  return arr
}

function removeData() {
  const arr = chart.w.globals.series.slice()
  arr.pop()

  return arr
}

function randomize() {
  return chart.w.globals.series.map(() => {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1
  })
}

function reset() {
  return options.series
}

// document.querySelector('#randomize').addEventListener('click', function() {
//   chart.updateSeries(randomize())
// })

// document.querySelector('#add').addEventListener('click', function() {
//   chart.updateSeries(appendData())
// })

// document.querySelector('#remove').addEventListener('click', function() {
//   chart.updateSeries(removeData())
// })

// document.querySelector('#reset').addEventListener('click', function() {
//   chart.updateSeries(reset())
// })
