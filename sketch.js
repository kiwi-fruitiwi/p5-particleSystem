/**
 *  @author Kiwi
 *  @date 2022.03
 *
 *  ☐ wand with particle emitter for cursor
 */


let font
let instructions  /* div for instructions */


let particles


function preload() {
    font = loadFont('data/meiryo.ttf')
}


function setup() {
    let cnv = createCanvas(600, 300)
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
}


function draw() {    
    background(234, 34, 24)
    fill(0, 0, 100, 70)
    stroke(0, 0, 100)
    circle(mouseX, mouseY, 10)

    for (p of particles) {
        if (!p.finished()) {
            p.show()
            p.update()
            p.edges()
        } else {

        }
    }
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