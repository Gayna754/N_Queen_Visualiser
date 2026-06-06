'use strict'
const numberbox = document.getElementById("numberbox");
const slider = document.getElementById("slider");
const progressBar = document.getElementById("progress-bar")
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById("pause-button");

const queen = '<i class="fas fa-chess-queen" style="color:#000"></i>';

let n, speed, tempSpeed, q, Board = 0;
// Board = 0;

// Creating array for all the possible arrangements of the N-Queen
let array = [0, 2, 1, 1, 3, 11, 5, 41, 93];

// Used to store the state of the boards;
let pos = {};
// let position = {};


// Setting the slider value onSlide
speed = (100 - slider.value) * 10;
tempSpeed = speed;
slider.oninput = function () {
    progressBar.style.width = this.value + "%";
    speed = slider.value;
    speed = (100 - speed) * 10;
}