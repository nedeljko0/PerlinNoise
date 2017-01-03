// var xoff1  = 0;
// var xoff2  = 10000;

var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

var delci = [];

var flowfield;

function setup() {
createCanvas(300, 300);
cols = floor(width / scl);
rows = floor(height / scl);

flowfield = new Array(cols*rows);

for (var i = 0; i < 300; i++) {
  delci[i] = new Particle();
}


}

function draw() {
  background(255);


var yoff = 0;

for (var y = 0; y < rows; y++) {
  var xoff = 0;
for (var x = 0; x < cols; x++) {
      var index = x+y*cols;

      var angle = noise(xoff, yoff,zoff)*TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(5);
      flowfield[index] = v;

            xoff += inc;

            stroke(0,50);
            push();
            translate(x*scl,y*scl);
            rotate(v.heading());
            strokeWeight(1);
            line(0,0,scl,0);
            pop();
            // rect(x * scl, y * scl, scl, scl);
}
yoff += inc;
zoff += 0.001;
}
for (var i = 0; i < delci.length; i++) {
  delci[i].follow(flowfield),
  delci[i].update();
  delci[i].show();
  delci[i].edges();
}


}
