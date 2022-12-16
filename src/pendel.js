
class Pendulum {

    constructor(origin, r, x, y) {
        this.origin = origin;
        this.position = createVector(x, y);
        // Setting starting angle to 45 degrees
        this.theta = PI / 4;
        this.r = r 

        // Setting starting velocity and acceleration
        this.theta_ddot = 0;
        this.theta_dot = 0;
    }

    draw(ctx) {
        ctx.beginPath(this.origin);
        ctx.lineTo(this.position.x, this.position.y);
        ctx.Circle(this.positon.x + this.r, this.position.y, this.r);
        ctx.stroke();
        ctx.strokeWeight();
    }

    update() {
        this.theta_ddot += 0;
        this.theta_dot += this.theta_ddot; 
        this.theta = this.theta_dot;
    }
}






