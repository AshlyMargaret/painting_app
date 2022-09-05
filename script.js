const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0,0,500,500);

ctx.fillStyle = "black";

let brushColor = "black";
let brushSize = 3;


document.getElementById("color").addEventListener("change",function(){
    brushColor = this.value;
});

document.getElementById("thickness").addEventListener("change",function(){
    brushSize = this.value;
});

let painting = false;


function paintingStart(e){
    painting = true;
     draw(e);
}

function paintingEnd(e){
    painting = false;
    ctx.beginPath();
}

function draw(e){

    console.log("hi");
    if(painting == false)  return;
   
 let x = e.clientX;
 console.log(x);
 let y = e.clientY - canvas.offsetTop;
 console.log(y);

 ctx.lineWidth = brushSize;
 ctx.lineCap = "round";

 ctx.lineTo(x,y);
 ctx.strokeStyle = brushColor;
 ctx.stroke();


}

canvas.addEventListener("mousedown",paintingStart);
canvas.addEventListener("mousemove",draw);
canvas.addEventListener("mouseup",paintingEnd);

