/**
 * I think an Emitter keeps track of particles it spits out and manages
 * their lifespans.
 */
class Emitter {
    constructor(x, y, type) {
        this.pos = new p5.Vector(x, y)

        /* an emitter manages a list of particles */
        this.particles = []
        this.emissionRate = 1
        this.type = type /* a key string for different particle types */
    }


    show() {
        for (const p of this.particles) {
            p.show()
        }
    }


    /**
     * applies a force to all the particles in this emitter
     * @param force: p5.Vector
     */
    applyForce(force) {
        for (const p of this.particles) {
            p.applyForce(force)
        }
    }


    /** emits the correct type of particle */
    emit() {
        for (let i=0; i<this.emissionRate; i++) {
            this.particles.push(new Particle(this.pos.x, this.pos.y))
        }
    }


    /** shows particles and removes particles past their lifetime */
    update() {
        this.emit(this.emissionRate)
        for (const p of this.particles) {
            p.update()
            p.edges()
        }
    }
}