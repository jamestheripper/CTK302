let cars = [] ;
let frogPos ;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn one object
 // myCar = new Car();

  for (let i = 0 ; i < 40 ; i++) {
    cars.push(new Car()) ;
  }

  frogPos = createVector(width/2, height-100) ;

}

function draw() {
  background("white");

   for (let i = 0 ; i < cars.length ; i++) {
     cars[i].display() ;
     cars[i].move() ;
   }

  fill('green');
  ellipse(frogPos.x, frogPos.y, 50, 50) ;
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100); // initialize your attributes here
    this.v = createVector(random(-3, 3), random(-3, 3));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128) ;
  }
  // methods

  display() {
    fill(this.r, this.g, this.b, this.o);

    // make an actual car
    // rect(this.pos.x, this.pos.y, 75, 25);
    // ellipse(this.pos.x, this.pos.y + 30, 30, 30);
    // ellipse(this.pos.x+60, this.pos.y + 30, 30, 30);

    textSize(this.size) ;
    text("BOOM", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
