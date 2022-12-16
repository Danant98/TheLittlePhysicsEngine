
class Pendulum {

    constructor(origin, r, x, y, damping = false) {
        this.origin = origin;
        this.position = createVector(x, y);
        // Setting starting angle to 45 degrees
        this.theta = PI / 4;
        this.r = r 

        // Setting starting velocity and acceleration
        this.theta_ddot = 0;
        this.theta_dot = 0;

        // Determine if damping is enabled
        this.damping = damping; 
    }

    draw() {
        line(this.origin.x, this.origin.y, this.position.x, this.position.y);
        circle(this.position.x + this.r, this.position.y, this.r);
        stroke();
        strokeWeight();

    }

    update() {
        this.theta_ddot += 0;
        this.theta_dot += this.theta_ddot; 
        if (this.damping) {
            this.theta_dot *= 0.99;
        }
        this.theta = this.theta_dot;
    }
}






