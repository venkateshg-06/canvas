let canvas = document.querySelector('#draw')
canvas.width = window.innerWidth
canvas.height = window.innerHeight 
const ctx = canvas.getContext('2d')
ctx.strokeStyle = "red";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
let hue  = 0;
let width = 50; 
let istrue = true 

let isDrawing = false ;
let lastX = 0 ;
let lastY = 0 ; 

function draw(e){
    if (!isDrawing) return 
    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.moveTo(lastX, lastY)    
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY]
   ctx.lineWidth = width
    if (width>= 50 || width <=1){
      istrue = !istrue
    }
    if(istrue){
        width++
    }
    else {
        width--
    }


    if (hue >= 360){
        hue  = 0 ;
    }
    hue++
    
}

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true 
    [lastX,lastY] = [e.offsetX,e.offsetY]
 } );

canvas.addEventListener("mousemove", draw)

canvas.addEventListener("mouseup",() => isDrawing = false)
canvas.addEventListener("mouseout",() => isDrawing = false)

