'use strict';

let arrBlocks = document.querySelectorAll('.color-block');

//Function to generate random hex code

function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
}

//Function to change page color & text 

function addColor() {
    let hexCode = randomColor();
    this.style.backgroundColor = hexCode;
    this.querySelectorAll('.hex-text')[0].innerHTML = hexCode;
}

arrBlocks.forEach(block => block.addEventListener('click', addColor));