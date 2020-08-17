"usr strict";

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

function createStar(x, y, radius){
    return {x, y, radius}
}

const stars = [
    createStar(30, 20, 10),
    createStar(270, 60, 30),
    createStar(120, 150, 20),
    createStar(100, 40, 10),
    createStar(200, 30, 15),
];

function drawBackground(ctx){
    const gradient  = ctx.createLinearGradient(0, 0, 300, 300);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "black");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 300, 300);
}

function drawStar(ctx, star){
    console.log(star)
    const gradient = ctx.createRadialGradient(star.x, star.y, 1, star.x, star.y, star.radius);
    gradient.addColorStop(0, "yellow");
    gradient.addColorStop(1, "white");

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);

    ctx.fillStyle = gradient;
    ctx.fill();
}

function drawMountains(ctx){
    ctx.beginPath();
    ctx.moveTo(0, 230)
    ctx.lineTo(300, 150);
    ctx.lineTo(300, 300);
    ctx.lineTo(0, 300);
    ctx.closePath();

    ctx.fillStyle = "#dddddd"

    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, 260)
    ctx.lineTo(300, 200);
    ctx.lineTo(300, 300);
    ctx.lineTo(0, 300);
    ctx.closePath();
    
    ctx.fillStyle = "#222244"

    ctx.fill();
}

function drawForeground(ctx){

    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(140, 300);
    ctx.lineTo(30, 300);
    ctx.closePath();

    ctx.fillStyle = "#222222"

    ctx.fill();
}

drawBackground(ctx);
stars.forEach( (star) => {
    drawStar(ctx, star)
});
drawMountains(ctx);
drawForeground(ctx);