let canvas = document.getElementById('bb-game-canvas');

const ctx = canvas.getContext('2d');




ctx.clearRect(0, 0, 1200, 675);

let x = 120;
let y = 575;
let g = 0.2;
let dy = 0;
let dx = 0;
let score = false;

// Hoop location
let [hoopX, hoopY] = getHoopLocation();

let spacePressed = false;
let release = false;
let rPressed = false;


const setButton = document.getElementById("setButton");
setButton.addEventListener("click", setSpeedDirection, false);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function getHoopLocation() {
    let hoopX = Math.floor(Math.random() * 500) + 500;
    let hoopY = Math.floor(Math.random() * 450) + 80;
    return [hoopX, hoopY];
}

function setSpeedDirection() {
    const speed = Number(document.getElementById("speed").value);
    const angle = Number(document.getElementById("angle").value);
    dx = speed * Math.cos(angle * Math.PI / 180);
    dy = -speed * Math.sin(angle * Math.PI / 180);
    release = false;
    setButton.blur();
}

// Drawing!
function draw() {
    // Set Background
    ctx.clearRect(0,0, 1200, 675);
    ctx.fillStyle = '#a1dbff';
    ctx.fillRect(0,0, 1200, 675);

    // Draw Player
    ctx.fillStyle = '#000';
    ctx.fillRect(20, 575, 100, 100);
    ctx.beginPath();
    ctx.arc(70, 550, 30, 0, Math.PI*2);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.closePath();

    // Draw Hoop
    ctx.fillRect(hoopX, hoopY, 80, 10);
    ctx.fillRect(hoopX + 80, hoopY - 80, 15, 120);
    ctx.fillRect(hoopX + 95, hoopY - 25, 50, 20);
    ctx.fillRect(hoopX + 145, hoopY - 25, 20, 675 - hoopY + 25);
    ctx.font = "20px Arial";
    ctx.fillText("Basket Center is at: " + (hoopX + 40)/100 + ", " + (675 - hoopY)/100, 20, 100);



    // Draw Ball
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI*2);
    ctx.fillStyle = "#F00";
    ctx.fill();
    ctx.closePath();

    if (score) {
        ctx.font = "20px Arial";
        ctx.fillText("You Scored!", 20, 40);
    }

    // Release ball
    if (release) {
        x += dx;
        y += dy;
        dy += g;

        // Check bounce on ground
        if (y > 645) {
            dy = - Math.abs(dy/2);
            dx = 3*dx/4;
        }

        // Check backboard hit
        if (y > hoopY - 95 && y < hoopY - 95 + 120 && x > hoopX + 50 && dx > 0 && x < hoopX + 80) {
            dx = -dx * 3 / 4;
            x = hoopX + 50;
        }

        // Check front rim hit
        if (y > hoopY - 15 && y < hoopY - 5 && x > hoopX -30 && dx > 0 && x < hoopX - 25) {
            dx = -dx * 3 / 4;
            x = hoopX - 15;
        }

        // Check if scored
        if (y > hoopY -15 && y < hoopY - 5 && x > hoopX - 25 && x < hoopX + 80) {
            score = true;
        }
    }

    // Reset
    if (rPressed) {
        x = 120;
        y = 575;
        setSpeedDirection();
        release = false;
        score = false;
    }
}

function keyDownHandler(e) {
    if (e.keyCode == 32) {
        release = true;
    }
    if (e.keyCode == 82) {
        rPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 82) {
        rPressed = false;
    } 
}



setInterval(draw, 10);

