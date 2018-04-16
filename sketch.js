//GLOBAL VARIABLES 

function setup() {
  // put setup code here
  createCanvas(innerWidth, innerHeight); // 
  //noStroke();
  fill(255, 0, 0);
  background(0);
  //ellipse(150, 150, 50, 50); //position, size 
  console.log(' a random number: ' + random(100)); //same as println in processing  // but WHY it appears a single log?
 



}

function draw() {
  // put drawing code here
  background(0, 100, 100);
  fill(0, 0, 255);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);

  //ellipse(mouseX, mouseY, mouseX/2, 50);
  if(mouseX > width / 2 && mouseY < height/2){
    fill(0, 255, 0);
  } else if(mouseX < width/2 && mouseY < height/2){
    fill(255);
  } else if(mouseX > width/2 && mouseY > height/2){
    fill(255, 0, 0);
  } else if(mouseX < width / 2 && mouseY > height/2){
    fill(0, 0, 255);
  }
  
  ellipse(mouseX, mouseY, random(100), random(100));

}

/* this function makes your canvas responsive  */

function windowResized(){
  resizeCanvas(innerWidth, innerHeight); 


}