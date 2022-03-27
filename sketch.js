/**
 *  @author Kiwi
 *  @date 2022.03.14
 *
 *  ☐ wand with particle emitter for cursor
 */


let font
let instructions  /* div for instructions */
let DEBUG_MSG


let bubbles
let emitter


function preload() {
    font = loadFont('data/consola.ttf')
}


function setup() {
    let cnv = createCanvas(600, 300)
    cnv.parent('#canvas')

    colorMode(HSB, 360, 100, 100, 100)
    textFont(font, 14)
    rectMode(CENTER)
    noCursor()

    /* initialize instruction div */
    instructions = select('#ins')
    instructions.html(`<pre>
        [1,2,3,4,5] → no function
        z → freeze sketch
        r → revitalize all current particle lifespans</pre>`)

    bubbles = []
    for (let i=0; i<100; i++) {
        bubbles.push(new Particle(random(width), random(height)))
    }

    emitter = new Emitter(width/2, height/2, 'confetti')
}


function draw() {    
    background(234, 34, 24)
    fill(0, 0, 100, 70)
    stroke(0, 0, 100)
    circle(mouseX, mouseY, 10)

    for (const p of bubbles) {
        if (!p.finished()) {
            p.show()
            p.update()
            p.edges()
        } else {

        }
    }


    emitter.applyForce(new p5.Vector(0, 0.098))
    emitter.update()
    emitter.show()


    /** debug corner 🍁 TODO: make a function for this. dictionary! */
    const LEFT_MARGIN = 10
    const DEBUG_Y_OFFSET = height - 10 /* floor of debug corner */
    const LINE_HEIGHT = textAscent() + textDescent() + 2 /* 2 = lineSpacing */
    fill(0, 0, 100, 100) /* white */
    strokeWeight(0)
    text(`emitter size: ${emitter.particles.length}`, LEFT_MARGIN, DEBUG_Y_OFFSET)
    text(`particles: ${bubbles.length}`, LEFT_MARGIN, DEBUG_Y_OFFSET - LINE_HEIGHT)
    text(`debug: ${DEBUG_MSG}`, LEFT_MARGIN, DEBUG_Y_OFFSET - 2*LINE_HEIGHT)
    // text(`height: ${h.toFixed(2)}`, 50, DEBUG_Y_OFFSET - LINE_HEIGHT)
    // text(`σ: ${σ.toFixed(2)}`, 50, DEBUG_Y_OFFSET - n*LINE_HEIGHT)
}


function keyPressed() {
    /* stop sketch */
    if (key === 'z') {
        noLoop()
        instructions.html(`<pre>
            sketch stopped</pre>`)
        cursor()
    }

    if (key === 'r') {
        for (let p of bubbles) {
            p.lifetime = 100
            p.vel = p5.Vector.random2D()
        }
    }
}