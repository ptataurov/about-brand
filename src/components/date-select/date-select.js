import './_imports/import'

import $ from 'jquery'

import 'daterangepicker'
import moment from 'moment'
moment.locale('ru')

$(function() {
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
      opens: 'right'
    },
    cb
  )
})
