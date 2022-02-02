let font1, font2;

function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/font1.ttf");
  font2 = loadFont("assets/font2.ttf");
}

function draw() {
  background(100);
  textFont(font1);
  textSize(50);
  text("Hello",100,100)

  textFont(font2);
  textSize(50);
  text("It's me",200,200)
}
