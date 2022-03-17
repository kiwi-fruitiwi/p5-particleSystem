/**
 *  @author Kiwi
 *  @date 2022.03
 *
 *  ☐ wand with particle emitter for cursor
 */


let font
let instructions  /* div for instructions */


let particles
let emitter


function preload() {
    font = loadFont('data/consola.ttf')
}


function setup() {
    let cnv = createCanvas(600, 300)
    textFont(font, 14)

    noCursor()
    cnv.parent('#canvas')

    colorMode(HSB, 360, 100, 100, 100)

    /* initialize instruction div */
    instructions = select('#ins')
    instructions.html(`<pre>
        [1,2,3,4,5] → no function
        z → freeze sketch
        r → revitalize all current particle lifespans</pre>`)

    particles = []
    for (let i=0; i<100; i++) {
        particles.push(new Particle(random(width), random(height)))
    }

    emitter = new Emitter(width/2, height/2, 'stand-in')
}


function draw() {    
    background(234, 34, 24)
    fill(0, 0, 100, 70)
    stroke(0, 0, 100)
    circle(mouseX, mouseY, 10)

    for (const p of particles) {
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
    const DEBUG_Y_OFFSET = height - 50 /* floor of debug corner */
    const LINE_HEIGHT = textAscent() + textDescent() + 2 /* 2 = lineSpacing */
    fill(0, 0, 100, 100) /* white */
    strokeWeight(0)
    text(`emitter size: ${emitter.particles.length}`, 50, DEBUG_Y_OFFSET)
    // text(`height: ${h.toFixed(2)}`, 50, DEBUG_Y_OFFSET - LINE_HEIGHT)
    // text(`σ: ${σ.toFixed(2)}`, 50, DEBUG_Y_OFFSET - n*LINE_HEIGHT)
}


function keyPressed() {
    /* stop sketch */
    if (key === 'z') {
        noLoop()
        instructions.html(`<pre>
            sketch stopped</pre>`)
    }

    if (key === 'r') {
        for (let p of particles) {
            p.lifetime = 100
        }
    }
}