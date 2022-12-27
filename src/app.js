// Small Physics Engine for 2D games in JavaScript 

// Global variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let origin = new Vector(canvas.width * 1.5, 0);
const g = 9.81; // Gravitational acceleration of Earth
const L = 1; // Length of pendulum


addEventListener("resize", () => setSize());
function setSize() {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
}

function animation() {
    requestAnimationFrame(animation);
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(
                0, 
                0, 
                canvas.width, 
                canvas.height);
    pendulum.drawLine(origin.components[0], origin.components[1]);
    pendulum.drawCircle(); 
    pendulum.update();
}

class Pendulum {
    
    constructor(
        position, 
        r, 
        damping = false
        ) {
        this.pos = position;
        // Setting starting angle to 45 degrees
        this.theta = Math.PI / 4;
        this.r = r
        // Setting starting velocity and acceleration
        this.theta_ddot = 0;
        this.theta_dot = 0; 
        // Determine if damping is enabled
        this.damping = damping; 
    }
    
    drawLine(originX, originY) {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white"; 
        ctx.moveTo(originX, originY);
        ctx.lineTo(this.pos.components[0], this.pos.components[1]);
        ctx.stroke();
    }
    
    drawCircle() {
        ctx.beginPath(); 
        ctx.strokeStyle = "white";
        ctx.arc(
            this.pos.components[0], 
            this.pos.components[1], 
            this.r, 
            0, 
            2 * Math.PI, 
            false);
        ctx.stroke();
        ctx.fillStyle = "red"; 
        ctx.fill(); 
    }
    
    update() {
        this.theta_ddot.add(-(g / L) * Math.sin(this.theta));
        console.log(this.theta_ddot);
        this.theta_dot.add(this.theta_ddot); 
        if (this.damping) {
            this.theta_dot.mul(0.99);
        }
        this.theta.add(this.theta_dot);
        this.pos = new Vector(L * Math.sin(this.theta), L * Math.cos(this.theta));
    }
}

// Calling objects and methods
let pos = new Vector(canvas.width * 2, canvas.height + 180);
let pendulum = new Pendulum(pos, 50); 
setSize(); 
animation();
