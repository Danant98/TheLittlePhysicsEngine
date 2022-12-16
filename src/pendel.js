
class pendulum {

    constructor(origin, r, x, y) {
        this.origin = origin;
        this.position = createVector(x, y);
        // Setting starting angle to 45 degrees
        this.startingAngle = PI / 4;
        this.r = r 

        // Setting starting velocity and acceleration
        this.theta_ddot = 0;
        this.theta_dot = 0;
    }

    draw() {
        stroke(255);
        strokeWeight(8);
        line(this.origin.x, this.origin.y, this.position.x, this.position.y);
        circle(this.positon.x, this.position.y, this.r);
    }
}






