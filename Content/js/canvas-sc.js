$(document).ready(function(){

    //alert("jquery running...");

    var cv = $("#canvasel")[0];    // select canvas element
    var ctx = cv.getContext('2d'); // take context

    // draw_rectangles(ctx);
    // draw_path(ctx);
    // draw_path_two_site(ctx);
    // draw_curve(ctx);
    // draw_image(ctx);
    // draw_image_scale(ctx);
    // draw_image_cut_scale(ctx);
    draw_text(ctx);
});

function draw_rectangles(ctx){
    // fillRect(x, y, with, heigh)
    // strokeRect(x, y, with, heigh)

    ctx.fillStyle = "#6666ff";             // color: blue
    ctx.fillRect(0, 0, 150, 100);
    ctx.fillStyle = 'rgba(255,255,0,0.6)'; // color: yellow with transparency
    ctx.fillRect(10, 10, 100, 70);
    ctx.strokeStyle = "#ef1010";
    ctx.strokeRect(20, 20, 100, 70);
}

function draw_path(ctx){

    ctx.beginPath();
    ctx.moveTo(50, 5);
    ctx.lineTo(75, 65);
    ctx.lineTo(50, 125);
    ctx.lineTo(25, 65);
    ctx.fill(); 
    // if the path is not close then fill close the path and fill the shape
}

function draw_path_two_site(ctx){

    ctx.beginPath();
    ctx.moveTo(20,7);
    ctx.lineTo(32,20);
    ctx.lineTo(22,20);
    ctx.lineTo(22,35);
    ctx.lineTo(17,35);
    ctx.lineTo(17,20);
    ctx.lineTo(7,20);
    ctx.closePath();
    // change color, the color will apply to both shapes
    ctx.strokeStyle = '#ff8800';
    // move the pointer and coninue drawning lines
    ctx.moveTo(47,50);
    ctx.lineTo(67,70);
    ctx.lineTo(67,30);
    ctx.closePath();
    ctx.stroke();
}

function draw_curve(ctx){
    // arc(x, y, radio, angulo_inicio, angulo_final, sentido_contrario_del_reloj)
    // convert degrees to radians
    // var radians = (Math.PI/180)*degrees
    
    ctx.beginPath();
    ctx.fillStyle = "#6666ff";
    ctx.arc(50, 50, 20, 0, Math.PI*2, false);
    ctx.fill();
}

function draw_image(ctx){
    // drawImage(imagen, posX, posY);
    // drawImage(imagen, posX, posY, with, high);

    var img_src = "./Content/img/main-board-1.png"

    var img = new Image();
    img.src = img_src;
    img.onload = function(){
        ctx.drawImage(img, 10, 10);
    }
}

function draw_image_scale(ctx){
    // drawImage(imagen, posX, posY);
    // drawImage(imagen, posX, posY, with, high);

    var img_src = "./Content/img/main-board-1.png"

    var img = new Image();
    img.src = img_src;
    img.onload = function(){
        ctx.drawImage(img, 10, 10, 200, 200);
    }
}

function draw_image_cut_scale(ctx){
    // drawImage(imagen, imgX, imgY, imgwith, imghigh, newimgX, newimgY, newimgwith, newimghigh)

    var img_src = "./Content/img/main-board-1.png"

    var img = new Image();
    img.src = img_src;
    img.onload = function(){
        ctx.drawImage(img, 47, 16, 317, 64, 10, 10, 300, 60 );
    }
}

function draw_text(ctx){

    //background
    ctx.fillStyle = "#ffffaa";
    ctx.fillRect(0, 0, 500, 300);

    ctx.fillStyle = "#000000";
    ctx.font = "20px _sans";
    ctx.textBaseline = "top";
    ctx.fillText("Hello World!", 195, 80);

}