import './_imports/import'

import fadeToggle from '../../assets/js/fadeToggle'

const btnNoti = document.querySelector('.top-bar__btn-noti')
const notiPopup = document.querySelector('.noti-popup')

fadeToggle(btnNoti, notiPopup, 'noti-popup--show')

const btnUser = document.querySelector('.top-bar__user-more')
const useropup = document.querySelector('.user-popup')

fadeToggle(btnUser, useropup, 'user-popup--show')
