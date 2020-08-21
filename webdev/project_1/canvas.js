"use strict";

// Get the canvas context
const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

// Array of star objects.
const stars = [
    createStar(30, 20, 10),
    createStar(270, 60, 30),
    createStar(120, 150, 20),
    createStar(100, 40, 10),
    createStar(200, 30, 15),
];

// Draw the initial canvas
redraw(ctx);


function createStar(x, y, radius){
    return {x, y, radius}
}

// Draw the gradient background. 
function drawBackground(ctx){
    const gradient  = ctx.createLinearGradient(0, 0, 300, 300);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "black");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 300, 300);
}

//Take in a star and draw it to the canvas. 
function drawStar(ctx, star){
    const gradient = ctx.createRadialGradient(star.x, star.y, 1, star.x, star.y, star.radius);
    gradient.addColorStop(0, "yellow");
    gradient.addColorStop(1, "white");

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);

    ctx.fillStyle = gradient;
    ctx.fill();
}

// Draw the to mountain ranges. One dark and one light. 
function drawMountains(ctx){

    //Draw light mountain range
    ctx.beginPath();
    ctx.moveTo(0, 230)
    ctx.lineTo(300, 150);
    ctx.lineTo(300, 300);
    ctx.lineTo(0, 300);
    ctx.closePath();

    ctx.fillStyle = "#dddddd"
    ctx.fill();

    // Draw dark mountain range
    ctx.beginPath();
    ctx.moveTo(0, 260)
    ctx.lineTo(300, 200);
    ctx.lineTo(300, 300);
    ctx.lineTo(0, 300);
    ctx.closePath();
    
    ctx.fillStyle = "#222244"
    ctx.fill();
}

//Draw the black/gray "things" in the foreground. 
function drawForeground(ctx){

    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(140, 300);
    ctx.lineTo(30, 300);
    ctx.closePath();

    ctx.fillStyle = "#222222"
    ctx.fill();
}


// Draw everything
function redraw(ctx){
    drawBackground(ctx);
    stars.forEach( (star) => {
        drawStar(ctx, star)
    });
    drawMountains(ctx);
    drawForeground(ctx);
}

// Make the star with the mouse over it move with the mouse. 
$("#canvas").mousemove((event) => {
    stars.forEach((star) => {
        if(isInBoundingBox(event.offsetX, event.offsetY, star)){
            star.x = event.offsetX;
            redraw(ctx);
        }
    })
})

// Check if an x,y coordinate is inside a stars bouding box. 
function isInBoundingBox(x, y, star) {
    return (x >= star.x-star.radius) && (x <= star.x+star.radius) && (y >= star.y - star.radius) && (y <= star.y+star.radius)
}