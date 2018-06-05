
$(document).ready(function(){

    var cv = $("#canvasel")[0];    // select canvas element
    var ctx = cv.getContext('2d'); // take context

    ctx.strokeStyle = "black";
    ctx.strokeRect(0,0,cv.width, cv.height);
    
    draw_image_scale_rotate(ctx, cv);
});

function convert_degrees_radian(degree){
    return (degree * Math.PI / 180);
}

function draw_image_scale_rotate(ctx, cv){
    canvas_width = cv.width;
    canvas_height = cv.height;

    ctx.save();

    ctx.setTransform(1,0,0,1,0,0);
    var ang = convert_degrees_radian(180);

    // translate origin point
    // centro del canvas
    ctx.translate((0.5*canvas_width), (0.5*canvas_height)); 
    // rotate shapes to certain angle
    ctx.rotate(ang);

    img_dic = [
        {x:10, y:140, width:445, heigh:125, src:"./Content/img/main-board-3.png"},
        {x:10, y:10, width:445, heigh:124, src:"./Content/img/main-board-2.png"}
    ]

    for(let i in img_dic){
        // rectangle properties
        let x = img_dic[i].x;
        let y = img_dic[i].y;
        let width = img_dic[i].width;
        let height = img_dic[i].heigh;

        // draw image
        let img_src = img_dic[i].src
        let img = new Image();
        img.loaded = false;
        img.src = img_src;

        img.onload = function(){
            ctx.drawImage(img, x+(-0.5*canvas_width), y+(-0.5*canvas_height), width, height);
            img.loaded = true;
        }
    }

    setTimeout(draw_marker, 200, ctx, canvas_width, canvas_height);
}

function draw_marker(ctx, canvas_width, canvas_height){
    
    mark_dic = [
        {x:86, y:27, width:248, heigh:12, c:"red"},
        {x:92, y:226, width:248, heigh:12, c:"green"}
    ]

    // draw marker
    for( let i in mark_dic ){
        ctx.strokeStyle = mark_dic[i].c;
        let x = mark_dic[i].x;
        let y = mark_dic[i].y;
        let width = mark_dic[i].width;
        let height = mark_dic[i].heigh;
        //strokeRect(x, y, with, heigh)
        ctx.strokeRect(x+(-0.5*canvas_width), y+(-0.5*canvas_height), width, height);
    }

    /*
    context.restore();
    context.strokeStyle = "green";
    context.strokeRect(10,10,100,100);
    */
}
