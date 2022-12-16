// Small Physics Engine for 2D games in JavaScript 


// Global variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var origin = createVector(width / 2, 0);

function setup() {
    createCanvas(width, height); 
    pendulum = new Pendulum(origin, 100, width / 2, height / 2);
}

function draw() { 
    pendulum.draw(ctx);
}



