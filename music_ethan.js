// Magic Number: (2)*9862/164
function draw_one_frame(words, vocal, bass, curSlice) {
  background(0);

  print(curSlice)

  if (songIsPlaying) {
    if (curSlice < sec(2.2)) {
      rack(0, -400, 0, -1000, 500, 0, bass, curSlice, true, 255, 0, 255, "scene2")
      rack(0, -400, 0, 1000, 500, 0, bass, curSlice, false, 255, 0, 255, "scene2")

      camY += (curSlice/200);
      moveableCam.setPosition(camX, camY, camZ);
      moveableCam.lookAt(0, 0, 0);

    } else if (curSlice < sec(11.5)) {
      rack(100, 0, 0, 0, 1000, 0, vocal, curSlice, true, 255, 0, 255, "scene1")
      rack(-100, 0, 0, 0, 1000, 0, vocal, curSlice, false, 255, 0, 255, "scene1")

      rack(0, -400, 0, -1000, 500, 0, bass, curSlice, true, 255, 0, 255, "scene2")
      rack(0, -400, 0, 1000, 500, 0, bass, curSlice, false, 255, 0, 255, "scene2")


      camY += (curSlice/400);
      camZ += (curSlice/500);

      moveableCam.setPosition(camX, camY, camZ);
      moveableCam.lookAt(0, 0, 0);

      scene(200, 0, 200);
    } else if (curSlice < sec(20.8)) {
      rack(100, 0, 0, 0, 1000, 0, vocal, curSlice, true, 255, 0, 255, "scene1")
      rack(-100, 0, 0, 0, 1000, 0, vocal, curSlice, false, 255, 0, 255, "scene1")

      rack(0, -400, 0, -1000, 500, 0, bass, curSlice, true, 255, 0, 255, "scene3")
      rack(0, -400, 0, 1000, 500, 0, bass, curSlice, false, 255, 0, 255, "scene3")


      camZ += (curSlice/500);
      
      moveableCam.setPosition(camX, camY, camZ);
      moveableCam.lookAt(0, 0, 0);
      scene(200, 0, 200);

      scene(100, 0, 200);
    } else if (curSlice < sec(30)) {
      rack(100, 0, 0, 0, 1000, 0, vocal, curSlice, true, 0, 0, 255, "scene4")
      rack(-100, 0, 0, 0, 1000, 0, vocal, curSlice, false, 0, 0, 255, "scene4")

      rack(0, -400, 0, -1000, 500, 0, bass, curSlice, true, 0, 0, 255, "scene3")
      rack(0, -400, 0, 1000, 500, 0, bass, curSlice, false, 0, 0, 255, "scene3")
      
      camZ -= (curSlice/800);
      camY -= (curSlice/500);

      camMove();
      scene(0, 0, 200);
    } else if (curSlice < sec(31.1)) {
      rack(100, 0, 0, 0, 1000, 0, vocal, curSlice, true, 0, 255, 255, "scene1")
      rack(-100, 0, 0, 0, 1000, 0, vocal, curSlice, false, 0, 255, 255, "scene1")

      rack(0, -400, 0, -1000, 500, 0, bass, curSlice, true, 0, 255, 255, "scene5")
      rack(0, -400, 0, 1000, 500, 0, bass, curSlice, false, 0, 255, 255, "scene5")

      rack(0, 500, 0, -2000, -2000, 0, bass, curSlice, true, 0, 255, 255, "scene3")
      rack(0, 500, 0, 2000, -2000, 0, bass, curSlice, false, 0, 255, 255, "scene3")

      camMove();
      scene(0, 255, 255);
    } else if (curSlice < sec(32.2)) {
      rack(100, 0, 0, 0, 1000, 0, vocal, curSlice, true, 0, 255, 0, "scene1")
      rack(-100, 0, 0, 0, 1000, 0, vocal, curSlice, false, 0, 255, 0, "scene1")

      rack(0, -400, 0, -1000, 500, 0, bass, curSlice, true, 0, 255, 0, "scene5")
      rack(0, -400, 0, 1000, 500, 0, bass, curSlice, false, 0, 255, 0, "scene5")

      rack(0, 400, 0, -2000, -2000, 0, bass, curSlice, true, 0, 255, 0, "scene3")
      rack(0, 400, 0, 2000, -2000, 0, bass, curSlice, false, 0, 255, 0, "scene3")

      camMove();
      scene(0, 255, 0);
    } else if (curSlice < sec(33.3)) {
      rack(100, 0, 0, 0, 1000, 0, vocal, curSlice, true, 255, 255, 0, "scene1")
      rack(-100, 0, 0, 0, 1000, 0, vocal, curSlice, false, 255, 255, 0, "scene1")

      rack(0, -400, 0, -1000, 500, 0, bass, curSlice, true, 255, 255, 0, "scene5")
      rack(0, -400, 0, 1000, 500, 0, bass, curSlice, false, 255, 255, 0, "scene5")

      rack(0, 300, 0, -2000, -2000, 0, bass, curSlice, true, 255, 255, 0, "scene3")
      rack(0, 300, 0, 2000, -2000, 0, bass, curSlice, false, 255, 255, 0, "scene3")

      camMove();
      scene(255, 255, 0);
    } else if (curSlice < sec(34.4)) {
      rack(100, 0, 0, 0, 1000, 0, vocal, curSlice, true, 255, 0, 0, "scene1")
      rack(-100, 0, 0, 0, 1000, 0, vocal, curSlice, false, 255, 0, 0, "scene1")

      rack(0, -400, 0, -1000, 500, 0, bass, curSlice, true, 255, 0, 0, "scene5")
      rack(0, -400, 0, 1000, 500, 0, bass, curSlice, false, 255, 0, 0, "scene5")

      rack(0, 200, 0, -2000, -2000, 0, bass, curSlice, true, 255, 0, 0, "scene3")
      rack(0, 200, 0, 2000, -2000, 0, bass, curSlice, false, 255, 0, 0, "scene3")

      camMove();
      scene(255, 0, 0);
    } else if (curSlice < sec(35.5)) {
      rack(100, 0, 0, 0, 1000, 0, vocal, curSlice, true, 0, 0, 255, "scene1")
      rack(-100, 0, 0, 0, 1000, 0, vocal, curSlice, false, 0, 0, 255, "scene1")

      rack(0, -400, 0, -1000, 500, 0, bass, curSlice, true, 0, 0, 255, "scene5")
      rack(0, -400, 0, 1000, 500, 0, bass, curSlice, false, 0, 0, 255, "scene5")

      rack(0, 100, 0, -2000, -2000, 0, bass, curSlice, true, 0, 0, 255, "scene3")
      rack(0, 100, 0, 2000, -2000, 0, bass, curSlice, false, 0, 0, 255, "scene3")

      camMove();
      scene(0, 0, 255);
    } else if (curSlice < sec(36.6)) {
      rack(100, 0, 0, 0, 1000, 0, vocal, curSlice, true, 0, 255, 255, "scene1")
      rack(-100, 0, 0, 0, 1000, 0, vocal, curSlice, false, 0, 255, 255, "scene1")

      rack(0, -400, 0, -1000, 500, 0, bass, curSlice, true, 0, 255, 255, "scene5")
      rack(0, -400, 0, 1000, 500, 0, bass, curSlice, false, 0, 255, 255, "scene5")

      rack(0, 0, 0, -2000, -2000, 0, bass, curSlice, true, 0, 255, 255, "scene3")
      rack(0, 0, 0, 2000, -2000, 0, bass, curSlice, false, 0, 255, 255, "scene3")

      camMove();
      scene(0, 255, 255);
    } else if (curSlice < sec(37.7)) {
      rack(100, 0, 0, 0, 1000, 0, vocal, curSlice, true, 0, 255, 0, "scene1")
      rack(-100, 0, 0, 0, 1000, 0, vocal, curSlice, false, 0, 255, 0, "scene1")

      rack(0, -400, 0, -1000, 500, 0, bass, curSlice, true, 0, 255, 0, "scene5")
      rack(0, -400, 0, 1000, 500, 0, bass, curSlice, false, 0, 255, 0, "scene5")

      rack(0, -100, 0, -2000, -2000, 0, bass, curSlice, true, 0, 255, 0, "scene3")
      rack(0, -100, 0, 2000, -2000, 0, bass, curSlice, false, 0, 255, 0, "scene3")

      camMove();
      scene(0, 255, 0);
    } else if (curSlice < sec(38.8)) {
      rack(100, 0, 0, 0, 1000, 0, vocal, curSlice, true, 255, 255, 0, "scene1")
      rack(-100, 0, 0, 0, 1000, 0, vocal, curSlice, false, 255, 255, 0, "scene1")

      rack(0, -400, 0, -1000, 500, 0, bass, curSlice, true, 255, 255, 0, "scene5")
      rack(0, -400, 0, 1000, 500, 0, bass, curSlice, false, 255, 255, 0, "scene5")

      rack(0, -200, 0, -2000, -2000, 0, bass, curSlice, true, 255, 255, 0, "scene3")
      rack(0, -200, 0, 2000, -2000, 0, bass, curSlice, false, 255, 255, 0, "scene3")

      camMove();
      scene(255, 255, 0);
    } else if (curSlice < sec(50)) {
      rack(800, -1000, -500, 0, 1000, 200, vocal, curSlice, false, 255, 0, 0, "scene6")
      rack(-800, -1000, -500, 0, 1000, 200, vocal, curSlice, true, 255, 0, 0, "scene6")

      rack(0, 150, 1000, -2000, -2000, 0, bass, curSlice, true, 255, 0, 0, "scene6")
      rack(0, 150, 1000, 2000, -2000, 0, bass, curSlice, false, 255, 0, 0, "scene6")

      camMove();
      scene(100, 0, 0);
    }
  }
}

function sec(sec){
  return (sec)*9862/164;
}

function rack(rackX, rackY, rackZ, lightX, lightY, lightZ, track, curSlice, invert, R, G, B, mode) {
  if (curSlice != null) {
    for (let i = 1; i < 10; i++) {
      light(rackX, rackY, rackZ, lightX, lightY, lightZ, R, G, B);
      rackZ += 100;

      if (mode == "scene1") {
        invert ? (lightX += map(track[curSlice - i - i], 60, 100, 0, 500, true)) : (lightX -= map(track[curSlice - i - i], 60, 100, 0, 500, true))
      } else if (mode == "scene2") {
        lightY += (0.5 * (sin(curSlice * 0.05)) * 1000)
        invert ? (lightX += ((sin(curSlice * 0.2)) * 200)) : (lightX -= ((sin(curSlice * 0.2)) * 200))
 
      } else if (mode == "scene3") {
      
        lightY += (0.5 * (sin(curSlice * 0.05)) * 1000)
        invert ? (lightX += ((sin(curSlice * 0.2)) * 200)) : (lightX -= ((sin(curSlice * 0.2)) * 200))

        R += ((sin(curSlice)) * 100)
        G += ((sin(curSlice)) * 100)
        B += ((sin(curSlice)) * 100)

      } else if (mode == "scene4") {
      
        lightY += (0.5 * (sin(curSlice * 0.05)) * 1000)
        invert ? (lightX += ((sin(curSlice * 0.2)) * 200)) : (lightX -= ((sin(curSlice * 0.2)) * 200))

        R += ((cos(curSlice)) * 80)
        G += ((cos(curSlice)) * 80)
        B += ((cos(curSlice)) * 80)
      } else if (mode == "scene5") {
      
        lightY += (0.5 * (sin(curSlice * 0.01)) * 1000)
        invert ? (lightX += ((sin(curSlice)) * 200)) : (lightX -= ((sin(curSlice )) * 200))

        R += ((cos(curSlice)) * 80)
        G += ((cos(curSlice)) * 80)
        B += ((cos(curSlice)) * 80)
      } else if (mode == "scene6") {
      
        lightY += (0.5 * (sin(curSlice * 0.01)) * 1000)
        invert ? (lightX += ((sin(curSlice)) * 500)) : (lightX -= ((sin(curSlice )) * 500))

        R += ((cos(curSlice * 10)) * 80)
        G += ((cos(curSlice * 10)) * 80)
        B += ((cos(curSlice)) * 80)
      }
 
    }
  }
}

function light(rackX, rackY, rackZ, lightX, lightY, lightZ, R, G, B) {
  let nLine = 15;

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

  pointLight((R / 10), (G / 10), (B / 10), 0, 0, 0);
}

function scene(R, G, B) {
  push()
  fill((R / 2), (G / 2), (B / 2));

  let size = 10000;
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
    camY += 2;
  }
  if (keyIsDown(65)) { //A Key
    camX += 2;
  }
  if (keyIsDown(83)) { //S Key
    camY -= 2;
  }
  if (keyIsDown(68)) { // D Key
    camX -= 2;
  }
  if (keyIsDown(81)) { // Q Key
    camZ += 2;
  }
  if (keyIsDown(69)) { // E Key
    camZ -= 2;
  }
  moveableCam.setPosition(camX, camY, camZ);
  moveableCam.lookAt(0, 0, 0);
}