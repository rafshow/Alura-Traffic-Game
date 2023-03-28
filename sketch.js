function setup() {
  createCanvas(500,400);
}

function draw() {
  background(roadImage);
  createActor();
  createCar();
  carMovement();
  actorMovement();
  loopCar();
  colisionVerifier();
  showPoints();
  scorePoints();
  }
