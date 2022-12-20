// Small Physics Engine for 2D games in JavaScript 

// Global variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let damping = false;

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
    
    constructor(x, y, r) {
        let origin = (0, 0); 
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
        ctx.strokeStyle = "white";
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.fillStyle = "red"; 
        ctx.fill(); 
    }
    
    update() {
        this.theta_ddot += 0;
        this.theta_dot += this.theta_ddot; 
        do {
            this.theta_dot *= 0.99;
        } while (damping); 
        this.theta = this.theta_dot;
    }

    force() {

    }
}

// Calling objects and methods
let pendulum = new Pendulum(canvas.width + 160, canvas.height + 200, 50); 
setSize(); 
animation();
