var cars = [];
var frogPos;
var myState = -1;
var maxCars = 10;
var maxTimer = 1000 + 60;
var timer = maxTimer;
var winner;
var loser;
var alienated;



function setup() {
  createCanvas(800, 800);

  //spawn cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(400, 400);

  // alienated = loadFont('assets/alienated.ttf');
  // winner = loadImage("assets/winner.jpg");
  // loser = loadImage("assets/loser.jpg");
  jack = loadImage("assets/jack.png");
  joe = loadImage("assets/joe.png");

  ellipseMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  x = width;
  y = height / 2;
  r = width;
  g = width;
  b = width;
}



function draw() {

  switch (myState) {
    case -1:

      myState = 0;
      break;

    case 0: //menu
      menu();
      break;

    case 1: //game state
      game();
      timer = timer - 1;
      if (timer <= 0) {
        timer = maxTimer;
        myState = 2;
      }
      break;
    case 2: //win state
      //image(winner, 0, 0, 800, 800);
      fill('white');
      textSize(200);

      text("click", 400, 700);

      text("WIN!", width / 2, 400);
      break;

    case 3: //lose state
      //image(loser, 0, 0, 800, 800);
      fill('white');
      textSize(200);

      text("click", 400, 700);

      text("LOSE!!", width / 2, 400);
      break;
  }
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: //they won
      //reset timer
      timer = maxTimer;
      //respawn cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }
      myState = 0;
      break;

    case 3: //they lost
      //reset timer
      timer = maxTimer;
      //respawn cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }
      myState = 0;
  break;
}
}

function menu() {
  background('lightblue');
  fill('white');
  textSize(40);

  // text("Planetary_Dodge!", 400, 200);
  // fill('white');
  // textSize(30);

  text("don't touch the enemy", 400, 300);
  fill('white');
  textSize(20);

  text("click to start", 400, 400);
  fill('white');
  textSize(20);




//   x = x - 4;
//   r = r - 5;
//   b = b - 2;
//   g = g - 3;

//   if (x <= 0) {
//     x = width;
//   }
//   if (r <= 0) {
//     r = width;
//   }
//   if (b <= 0) {
//     b = width;
//   }
//   if (g <= 0) {
//     g = width;
//   }


}

function game() {
  background('lightgreen');
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 30) {
      //cars.splice(i, 1);
      myState = 3;
      frogPos = createVector(400, 400);
    }
  }
  // frog
  //fill('green');
  rocket(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
}

function rocket() {

  image(joe,frogPos.x, frogPos.y, 100, 100);
}

function touchStarted() {
  getAudioContext().resume();
}

// our Car class!!!!!
function Car() {
  // attributes
  this.pos = createVector(30, random(height));
  this.vel = createVector(random(-7, 7), random(-7, 7));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    image(jack,this.pos.x, this.pos.y, 100,100);

  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
