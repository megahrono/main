"use strict";

var buttons = document.querySelectorAll('button');
var btnWrap = document.querySelector('.btn-wrap');
var menu = document.querySelector('menu');
btnWrap.addEventListener('click', function () {
  buttons.forEach(function (s) {
    s.classList.contains('active') ? s.classList.remove('active') : s.classList.add('active');
  });
  menu.classList.contains('open') ? menu.classList.remove('open') : menu.classList.add('open');
});