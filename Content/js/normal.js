
$(document).ready(function(){

    //alert("jquery running...");

    var cv = $("#canvasel")[0];    // select canvas element
    var ctx = cv.getContext('2d'); // take context

    ctx.strokeStyle = "black";
    ctx.strokeRect(0,0,cv.width, cv.height);

    draw_image_scale_rotate(ctx);
});


function draw_image_scale_rotate(ctx){
    // drawImage(imagen, posX, posY);
    // drawImage(imagen, posX, posY, with, high);
    ctx.save();

    img_dic = [
        {x:10, y:140, width:445, heigh:125, src:"./Content/img/main-board-3.png"},
        {x:10, y:10, width:445, heigh:124, src:"./Content/img/main-board-2.png"}
        
    ]

    for(let i in img_dic){
        console.log(img_dic[i])
        // rectangle properties
        let x = img_dic[i].x;
        let y = img_dic[i].y;
        let width = img_dic[i].width;
        let height = img_dic[i].heigh;

        // draw image 1
        let img_src = img_dic[i].src

        let img = new Image();
        img.loaded = false;
        img.src = img_src;

        img.onload = function(){
            ctx.drawImage(img, x, y, width, height);
            img.loaded = true;
        }
    }

    setTimeout(draw_marker, 200, ctx);
    
    //ctx.restore();
}

function draw_marker(ctx){
    // draw marker

    mark_dic = [
        {x:86, y:27, width:248, heigh:12, c:"red"},
        {x:92, y:226, width:248, heigh:12, c:"green"}
    ]

    for(let i in mark_dic){
        ctx.strokeStyle = mark_dic[i].c;
        let x = mark_dic[i].x;
        let y = mark_dic[i].y;
        let width = mark_dic[i].width;
        let height = mark_dic[i].heigh;

        //strokeRect(x, y, with, heigh)
        ctx.strokeRect(x, y, width, height);
    }

    console.log(11);
}
