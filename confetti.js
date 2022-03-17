class Confetti extends Particle {
    constructor(x, y) {
        super(x, y)
        this.angle = random(TAU)
        this.r = 5
        this.lifetime = random(10, 25)
    }


    show() {
        noStroke()
        fill(0, 0, 100, this.lifetime)

        if (this.finished()) {
            strokeWeight(0.5)
            stroke(random(360), 100, 100)
        }

        push()
        translate(this.pos.x, this.pos.y)
        rotate(this.angle)
        rect(0, 0, this.r, this.r)
        pop()

        this.angle += 0.2
    }
}