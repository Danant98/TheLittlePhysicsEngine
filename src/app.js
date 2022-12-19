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
    console.log("Hello only checking if it works");
}

class Pendulum {
    
    constructor(origin, r, x, y, damping = false) {
        this.origin = origin;
        this.position = (x, y);
        // Setting starting angle to 45 degrees
        this.theta = PI / 4;
        this.r = r 
        
        // Setting starting velocity and acceleration
        this.theta_ddot = 0;
        this.theta_dot = 0;
        
        // Determine if damping is enabled
        this.damping = damping; 
    }
    
    draw(ctx) {
        ctx.beginPath();
        cxt.lineWidth = 5;
        ctx.strokeStyle = "red"; 
        ctx.moveTo(this.origin.x, this.origin.y);
        ctx.lineTo(this.position.x, this.position.y);
        ctx.circleTo(this.position.x, this.position.y, this.r);
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


let origin = (canvas.width / 2, 0); 
let pendulum = new Pendulum(origin, 10, 
                            canvas.width / 2, canvas.height / 2); 
setSize(); 
animation();
pendulum.draw(ctx);
