'use strict'

const opened = document.getElementById('open')
const closed = document.getElementById('close')

function openMenu(){
    const header = document.getElementById('header')
    header.classList.add('menu')
}

function closeMenu(){
    const header = document.getElementById('header')
    header.classList.remove('menu')
}



opened.addEventListener('click', openMenu)
closed.addEventListener('click', closeMenu)