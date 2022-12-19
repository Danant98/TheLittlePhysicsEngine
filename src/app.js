// Small Physics Engine for 2D games in JavaScript 


// Global variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

addEventListener("resize", () => setSize());
function setSize() {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
}

function animation() {
    requestAnimationFrame(animation);
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    pendulum.drawLine(canvas.width/2, 0);
    pendulum.drawCircle(); 
}

class Pendulum {
    
    constructor(x, y, r, damping = false) {
        this.x = x;
        this.y = y; 
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
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
    }
    
    drawCircle() {
        ctx.beginPath(); 
        ctx.lineWidth = 5;
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
        ctx.moveTo(this.x, this.y);
        ctx.arc(10, this.y + this.r, 0, 2 * Math.PI, false);
        ctx.stroke();
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

// Calling objects and methods
let pendulum = new Pendulum(canvas.width + 150, canvas.height + 200, 10); 
setSize(); 
animation();
