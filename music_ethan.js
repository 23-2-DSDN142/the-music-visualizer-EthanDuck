// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0);
  light();
  camMove();
  stage();
  
  // pointLight(250, 250, 250, (mouseX - width / 2), (mouseY - height / 2), 50);

}

function light(){
  let color = 255;
  let xPos = 1;
  let yPos = 1;
  let zPos = 50;

  push()

  strokeWeight(4);
  stroke(255);
  line(100, -500, 200, 0, 0, 0);

  pointLight(255, 255, 255, xPos, yPos, zPos);

  pop()
}

function stage(){
  push()
  fill(200, 0, 200);
  rotateX(90);
  plane(1000, 500, 200, 200);
  pop()
}

function camMove() { 
  if (keyIsDown(49)) { //1 Key
    setCamera(moveableCam);
    print("1")
  }

  if (keyIsDown(50)) { //2 Key
    setCamera(overheadCam);
    print("2")
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