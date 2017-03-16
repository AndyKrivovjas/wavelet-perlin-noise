var meter, wavelet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  meter = new FPSmeter();

  wavelet = new Wavelet();
  frameRate(20);
}

function draw() {
  background(51);

  wavelet.display();

  meter.tick();
}
