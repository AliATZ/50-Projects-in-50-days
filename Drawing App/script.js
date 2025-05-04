const canvas = getEl("canvas");
const increaseBtn = getEl("increase");
const decreaseBtn = getEl("decrease");
const sizeEl = getEl("size");
const colorEl = getEl("color");
const clearEl = getEl("clear");


const ctx = canvas.getContext("2d");

let size =10;
let isPressed = false;
let color = 'black';
let x,y;

canvas.addEventListener("mousedown", (e) =>{
    isPressed = true

    x= e.offsetX;
    y= e.offsetY;


})

canvas.addEventListener("mouseup", (e) =>{
    isPressed = false
    x = undefined
    y = undefined

})


canvas.addEventListener("mousemove", (e) =>{
    if (isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2)
        drawLine(x,y,x2, y2)
        x = x2
        y =y2
    }
})


function updateSize(){
    sizeEl.innerText = size;
}


function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2);
    ctx.fillStyle=color;
    ctx.fill();
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke()
}

increaseBtn.addEventListener('click', (e) =>{
    size += 5

    if (size >50){
        size = 50
    }

    updateSize()
})

decreaseBtn.addEventListener('click', (e) =>{
    size -= 5
    if (size <5){
        size = 5
    }
    updateSize()
})



colorEl.addEventListener('change', (e)=> {
    color = e.target.value
});

clearEl.addEventListener('click', (e) =>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})


function getEl(selector){
    return document.getElementById(selector)
}