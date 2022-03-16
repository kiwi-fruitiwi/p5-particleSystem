/**
 *  @author Kiwi
 *  @date 2022.03
 *
 *  ☐ wand with particle emitter for cursor
 */
let font

function preload() {
    font = loadFont('data/meiryo.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
}

function draw() {    
    background(234, 34, 24)
}