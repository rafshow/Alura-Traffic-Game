//actor specs
let xActor = 250;
let yActor = 366;
let colision = false;
let myPoints = 0;

function createActor(){
  image(actorImage,xActor,yActor,30,30);
}

function actorMovement(){
 // key = w
  if (keyIsDown(87)){
    yActor -= 2
  }
  //key = s
  if(canMove()){ 
  	if (keyIsDown(83)){
    	yActor +=2
     }
  }
  //key = a
  if(keyIsDown(65)){
    xActor -=2
  }
  //key = s
  if (keyIsDown(68)){
    xActor +=2
  }
}

function colisionVerifier(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
 for(let i = 0; i< carsImage.length; i++){
   colision = collideRectCircle(xCars[i], yCars [i],widthCar,heightCar,xActor,yActor,15)
   if(colision){
     back2StartPosition();
     collideSound.play();
     if (verifyPoints()){
       myPoints -=1;
     }
     }
   }
}

function back2StartPosition(){
  yActor = 366;
}

function showPoints(){
  fill(255,215,0);
  textAlign(CENTER);
  textSize(25);
  text(myPoints,width/5, 27);
}

function scorePoints(){
  if(yActor < 15){
    myPoints +=1;
    pointSound.play();
    back2StartPosition();
  }
}

function verifyPoints(){
  return myPoints > 0
}

function canMove(){
  return yActor < 370
}
