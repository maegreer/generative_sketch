function setup() {
    createCanvas(windowWidth, windowHeight);
}
  
function draw() {
    background(175,200,300); 
    
  
    fill(126, mouseY/4, 204)
    rect(30, 30, 100, 100)
    rect(30, 150, 100, mouseY)
    rect(150, 30, 100, 100)
    rect(150, 150, 100, mouseY)
    
    fill(126, mouseX/4, 204)
    rect(270, 270, 100, 100)
    rect(390, 390, mouseX/2, 100)
    rect(390, 270, mouseX/2, 100)
    rect(270, 390, 100, 100)
    
    if (mouseX>200)
      {stroke(126, mouseY/5, 204)
        strokeWeight(3)}
    else
      {fill(0, 0, 0)
        strokeWeight(5)} 
  }

//function mouseClicked() {
  //circle(mouseX, mouseY, 40)}
