// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0);
  light(200, 0, 0, 0);
  camMove();
  scene();
}

function light(rackX, rackY, lightX, lightY){
  push()

  strokeWeight(4);
  stroke(255, 0, 255);
  line(rackX, -500, rackY, lightX, lightY, 0);

  pop()

  pointLight(250, 250, 250, 0, -80, 0);
}



function scene(){
  push()
  fill(200, 0, 200);
  rotateX(90);
  plane(1000, 1000, 200, 200);

  pop()
}




function camMove() { 
  if (keyIsDown(49)) { //1 Key
    setCamera(moveableCam);
  }
  if (keyIsDown(50)) { //2 Key
    setCamera(overheadCam);
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