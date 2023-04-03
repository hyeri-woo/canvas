const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");    // 캔버스에 그림을 그릴때 사용하는 것
canvas.width = 800;
canvas.height = 800;
// the coordinate system of canvas start at top left corner of canvas block
// ctx.fillStyle("green");
// ctx.rect(50, 50, 100, 100); // (x, y, width, height)
// ctx.rect(150, 150, 100, 100); 
// ctx.fill();

// ctx.beginPath()             // will start new path
// ctx.rect(250, 250, 100, 100); 
// // without beginPath(), all rect will be filled with red color because all rect are parts of the same path 
// ctx.fillStyle = "red";      
// ctx.fill();              

/* -------- moveTo & line -------- */
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fill();

/* -------- drawing house -------- */
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.lineTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.fill();


/* -------- drawing body of person -------- */
// ctx.fillRect(200, 200, 15, 100);
// ctx.fillRect(350, 200, 15, 100);
// ctx.fillRect(250, 200, 60, 200);
// ctx.arc(280, 130, 50, 0, 2*Math.PI);
// ctx.fill();
// ctx.beginPath();
// ctx.fillStyle = "white";
// ctx.arc(260, 120, 5, 0, 2*Math.PI);
// ctx.arc(300, 120, 5, Math.PI, 2*Math.PI);
// ctx.fill();

/* -------- Painting lines -------- */
const colors = [
    "#ff3838", 
    "#ffb8b8", 
    "#c56cf0",
    "#ff8f1a", 
    "#fff200", 
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff"
];

ctx.lineWidth = 2;
function onClick(event) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    const color = colors[Math.floor(Math.random()*colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}
canvas.addEventListener("mousemove", onClick);