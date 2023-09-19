let camX = 0;
let camY = -200;
let camZ = 500;

let overheadCam;
let moveableCam;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  background(255);

  sceneCam();
  stage();


  // pointLight(250, 250, 250, (mouseX - width / 2), (mouseY - height / 2), 50);

  box(150)
  fill(255, 0, 0);

}

function stage(){
  push()
  fill(200, 0, 200);
  rotateX(90);
  plane(1000, 500, 200, 200);
  pop()
}

function sceneCam() {
  overheadCam = createCamera();
  moveableCam = createCamera();

  overheadCam.setPosition(0, -1000, 1);
  overheadCam.lookAt(0, 0, 0);

  moveableCam.setPosition(camX, camY, camZ);
  moveableCam.lookAt(0, 0, 0);


  // camera(camX, camY, camZ, 0, 0, 0, 0, 1, 0);

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
}