// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, bass, curSlice) {
  background(0);
  rack(100, 0, 0, 500, 500, 0, vocal, curSlice, true, 255, 0, 255)
  rack(-100, 0, 0, -500, 500, 0, vocal, curSlice, false, 255, 0, 255)

  rack(0, -500, 200, -500, 500, 0, bass, curSlice, false, 255, 0, 255)
  rack(0, -500, 200, 500, 500, 0, bass, curSlice, false, 255, 0, 255)


  camMove();
  scene(255, 0, 255);
}

function rack(rackX, rackY, rackZ, lightX, lightY, lightZ, track, curSlice, invert, R, G, B) {

  if(curSlice != null){
    for (let i = 0; i < 10; i++) { 
      light(rackX, rackY, rackZ, lightX, lightY, lightZ, R, G, B);
      rackZ += 100;

      if (rackY == 0){
        invert ? (lightX += map(track[curSlice - i], 60, 100, 0, 200, true)) : (lightX -= map(track[curSlice - i], 60, 100, 0, 200, true))
      } else{
        invert ? (lightY += map(track[curSlice - i], 0, 100, 0, 100, true)) : (lightY -= map(track[curSlice - i], 0, 100, 0, 100, true))
      }

    }
  }


}

function light(rackX, rackY, rackZ, lightX, lightY, lightZ, R, G, B) {
  let nLine = 30;

  push()
  let deltaX = (lightX - rackX) / nLine
  let deltaY = (lightY - rackY) / nLine
  let deltaZ = (lightZ - rackZ) / nLine
  let deltaC = 255 / nLine

  strokeWeight(10);

  for (let i = 1; i < nLine; i++) {

    stroke((R - (deltaC * i)), G, (B - (deltaC * i)));

    line(((deltaX * (i - 1)) + rackX),
      ((deltaY * (i - 1)) + rackY),
      ((deltaY * (i - 1)) + rackZ),
      ((deltaX * i) + rackX),
      ((deltaY * i) + rackY),
      ((deltaY * i) + rackZ));
  }

  pop()

  pointLight((R/10), (G/10), (B/10), 0, 0, 0);
}

function scene(R, G, B) {
  push()
  fill((R/2), (G/2), (B/2));

  let size = 5000;
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
  translate(0, 0, -size)
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
    camY += 5;
  }
  if (keyIsDown(65)) { //A Key
    camX += 5;
  }
  if (keyIsDown(83)) { //S Key
    camY -= 5;
  }
  if (keyIsDown(68)) { // D Key
    camX -= 5;
  }
  if (keyIsDown(81)) { // Q Key
    camZ += 5;
  }
  if (keyIsDown(69)) { // E Key
    camZ -= 5;
  }
  moveableCam.setPosition(camX, camY, camZ);
  moveableCam.lookAt(0, 0, 0);
}