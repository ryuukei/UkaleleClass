export const draw = function(){
    
    var canvas  = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    var width = canvas.width = canvas.offsetWidth;
    var height = canvas.height = canvas.offsetHeight;
 
    ctx.clearRect(0, 0, width, height);//清空画布
    ctx.beginPath();                   //开始路径
    ctx.fillStyle = "#f8f8f8";
    ctx.strokeStyle="#000000";            //设置线条颜色
    ctx.lineWidth = 1;                 //设置线条宽度
    ctx.moveTo(0, 0);          //起始点位置

    var A=-height,
    W=Math.PI/width,
    Q=0,
    H=height;
    for (let x = 0; x <=  width; x++) {// 绘制x对应y的 
       var y = A*Math.sin(W*x+Q) +H
      ctx.lineTo(x, y)
    }
    ctx.lineTo(0, height);
    ctx.fill();
    // ctx.stroke();                      //绘制路径
     ctx.closePath();       
}