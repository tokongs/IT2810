"usr strict";

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

function drawBackground(ctx){
    const gradient  = ctx.createLinearGradient(0, 0, 300, 300);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "black");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 300, 300);
}

function drawStar(ctx, x, y, radius){
    const gradient = ctx.createRadialGradient(x, y, 1, x, y, radius);
    gradient.addColorStop(0, "yellow");
    gradient.addColorStop(1, "white");

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);

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
drawStar(ctx, 30, 20, 10);
drawStar(ctx, 270, 60, 30);
drawStar(ctx, 120, 150, 20);
drawStar(ctx, 100, 40, 10);
drawStar(ctx, 200, 30, 15);
drawMountains(ctx);
drawForeground(ctx);