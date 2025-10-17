let ege;
let sound;

function preload() {
  ege = loadImage('ege.gif'); 
  sound = loadSound('song.mp3');
}


function setup() {
  let canvasWidth = min(windowWidth, windowHeight * 0.5625);
  let canvasHeight = canvasWidth * 1.777; 


  if (canvasHeight > windowHeight) {
        canvasHeight = windowHeight;
        canvasWidth = canvasHeight * 0.5625;
  }

  createCanvas(canvasWidth, canvasHeight);

  enableSoundTap('Tap to enjoy some music');

  background(50);
}

function draw() {
  background(0, 0, 240);

  let scaleX = width / ege.width;
  let scaleY = height / ege.height;
  let scale = max(scaleX, scaleY);


  let scaledWidth = ege.width * scale;
  let scaledHeight = ege.height * scale;
  let x = (width - scaledWidth) / 2;
  let y = (height - scaledHeight) / 2;

  image(ege, x, y, scaledWidth, scaledHeight);
}

function mousePressed() {
  if (window.soundEnabled && !sound.isPlaying()) {
    sound.play();
  }
}