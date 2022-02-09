
// var ballRadius = 10;;
var x = windowWidth/2
var y = windowHeight-30;
var dx = 2;
var dy = -2;


function setup() {
    createCanvas(windowWidth, windowHeight);
    window.alert('Move your mouse around to see the blocks stretch and change color.')
}
  
function draw() {
    background(175,200,300); 
    fill(300, 300, 300)
    noStroke()
    rect(0, 0, 100, windowHeight)
    // function drawBall() {
    //   ctx.beginPath();
    //   ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    //   ctx.fillStyle = "#0095DD";
    //   ctx.fill();
    //   ctx.closePath();
    // }

   function draw_circle(){
    circle (x,y,20)


   }

  //  draw_circle(windowWidth/2, windowHeight/2, 20)
    function draw2() {
      ctx.clearRect(windowWidth/2, windowHeight/2, 20, 20);
      // draw_circle(x, y, r)
      draw_circle(x, y, 20)
      
     
      
      x += dx;
      y += dy;
    }
    setInterval(draw2, 1000);

    // setInterval(draw2, 1000);

    stroke(126, mouseY/5, 204)
    strokeWeight(5+mouseX/100)

    fill(126, mouseY/4, 204)
    rect(30, 30, 100, 100)
    rect(30, 150, 100, mouseY)
    rect(150, 30, 100, 100)
    rect(150, 150, 100, mouseY)
    
    if (x > 200) {
    fill(126, mouseX/4, 204)
    rect(270, 270, 100, 100)
    rect(390, 390, mouseX-100, 100)
    rect(390, 270, mouseX-100, 100)
    rect(270, 390, 100, 100)}

    else{
    fill(126, mouseX/4, 204)
    rect(270, 270, 100, 100)
    rect(390, 390, mouseX/2, 100)
    rect(390, 270, mouseX/2, 100)
    rect(270, 390, 100, 100)}
  }