class Wave {
  color: number = 10;
  points: p5.Vector[] = [];

  init(xoff, yoff) {
    for(let x = 0; x < width; x += 10) {
      var y = map(noise(xoff, yoff), 0, 1, 0, height);
      this.push(createVector(x, y));
      xoff += 0.05;
    }
  }

  push(point: p5.Vector) {
    this.points.push(point);
  }

  show() {
    var self = this;
    push();
    colorMode(HSB);
    stroke(this.color, 100, 100);
    noFill();
    beginShape();
    this.points.forEach(function(p, i) {
      // var color = map(i, 0, self.points.length, 0, 255);
      // stroke(color, 255, 255);
      vertex(p.x, p.y);
    });
    endShape();
    pop();
  }
}

class Wavelet {
  history: Wave[] = [];
  maxHistory = 20;

  offsets: any = {
    x: 0,
    y: 0
  }

  update() {
    var wave = new Wave();
    wave.init(this.offsets.x, this.offsets.y);
    this.offsets.x = 0;
    this.offsets.y += 0.015;
    this.history.push(wave);

    if(this.history.length > this.maxHistory) {
      this.history.shift();
    }
  }

  display() {
    this.update();

    this.history.forEach(function(item) {
      item.show();
    });

  }
}
