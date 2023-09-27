// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0);
  rack(100, 100, 500, 0)
  camMove();
  scene();
}

function rack(rackX, rackY, lightX, lightY) {
  for (let i = 0; i < 10; i++) {

    light(rackX, rackY, lightX, lightY);

    rackY += 100;
    lightY += 100;
  }
}

function light(rackX, rackY, lightX, lightY) {
  push()
  strokeWeight(5);
  stroke(255, 0, 255);
  line(rackX, -500, rackY, lightX, 0, lightY);
  pop()

  pointLight(50, 0, 20, lightX, lightY, 0);
}

function scene() {
  push()
  fill(50, 0, 200);

  let size = 3000;
  let hSize = (size / 2)

  translate(0, 0, -hSize)
  plane(size, size, 200, 200);

  rotateX(90)
  translate(0, hSize, -hSize)
  plane(size, size, 200, 200);

  rotateX(90)
  translate(0, hSize, -hSize)
  plane(size, size, 200, 200);

  rotateX(90)
  translate(0, hSize, -hSize)
  plane(size, size, 200, 200);

  rotateY(90)
  translate(-hSize, 0, -hSize)
  plane(size, size, 200, 200);

  rotateY(180)
  translate(0, 0,-size)
  plane(size, size, 200, 200);

  pop()
}




function camMove() {
  if (keyIsDown(49)) { //1 Key
    setCamera(moveableCam);
  }
  if (keyIsDown(50)) { //2 Key
    setCamera(frontCam);
  }
  if (keyIsDown(87)) { //W Key
    camY += 10;
  }
  if (keyIsDown(65)) { //A Key
    camX += 10;
  }
  if (keyIsDown(83)) { //S Key
    camY -= 10;
  }
  if (keyIsDown(68)) { // D Key
    camX -= 10;
  }
  if (keyIsDown(81)) { // Q Key
    camZ += 10;
  }
  if (keyIsDown(69)) { // E Key
    camZ -= 10;
  }
  moveableCam.setPosition(camX, camY, camZ);
  moveableCam.lookAt(0, 0, 0);
}