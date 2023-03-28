//car specs
let xCars = [600,600,600,600,600,600];
let yCars = [40,96,150,210,270,318];
let carSpeed =[2,2.5,3.2,4,3,2.3];
let widthCar = 50;
let heightCar = 40;


function createCar(){
  for (let i = 0; i < carsImage.length; i++ ){
    image(carsImage[i],xCars[i],yCars[i],widthCar,heightCar);
   }
}

function carMovement(){
  for(let i = 0; i < carsImage.length; i++){ 
    xCars[i] -= carSpeed[i];
   }
}

function loopCar(){
  for(let i = 0; i< carsImage.length; i++){
    if(pastTheScreen(xCars[i])){
    	xCars[i] = 600;

   }
 }
}
function pastTheScreen(xCar){
  return xCar < -50;
}