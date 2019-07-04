import './_imports/import'

import $ from 'jquery'

import 'daterangepicker'
import moment from 'moment'
moment.locale('ru')

$(function() {
  const start = moment().subtract(29, 'days')
  const end = moment()

  function cb(start, end) {
    $('#reportrange span').html(
      start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY')
    )
  }

  $('#reportrange').daterangepicker(
    {
      locale: {
        customRangeLabel: 'Интервал',
        daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        monthNames: [
          'Январь',
          'Февраль',
          'Март',
          'Апрель',
          'Май',
          'Июнь',
          'Июль',
          'Август',
          'Сентябрь',
          'Октябрь',
          'Ноябрь',
          'Декабрь'
        ],
        applyLabel: 'Применить',
        cancelLabel: 'Отмена',
        firstDay: 1
      },
      startDate: this.start ? this.start : moment(),
      endDate: this.end ? this.start : moment(),
      opens: 'right',
      ranges: {
        'За неделю': [moment().subtract(6, 'days'), moment()],
        'За месяц': [moment().subtract(29, 'days'), moment()],
        'За год': [moment().subtract(1, 'years'), moment()]
      }
    },
    cb
  )

  // cb(start, end)
})
