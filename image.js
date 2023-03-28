//preload images and soungd
let roadImage;
let actorImage;
let carImage;
let carImage2;
let carImage3;
let collideSound;
let pointSound;

function preload(){
 
  collideSound = loadSound("sounds/colidiu.mp3");
  pointSound = loadSound("sounds/pontos.wav");
  
  
  roadImage = loadImage("images/estrada.png");
  actorImage = loadImage("images/ator-1.png");
  carImage = loadImage("images/carro-1.png");
  carImage2 = loadImage("images/carro-2.png");
  carImage3 = loadImage("images/carro-3.png");
  carsImage =[carImage,carImage2,carImage3,carImage,carImage2,carImage3];
}
