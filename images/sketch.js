let first;
let second;
let third;


function setup() {
  createCanvas(500, 500);

  first = loadImage("assets/image1.jpg")
  second = loadImage("assets/image2.jpg")
  third = loadImage("assets/image3.jpg")
}

function draw() {
  image(first,width/2, 100,100,100);
  image(second,width/2, 200,100,100);
  image(third,width/2, 300,100,100);
}
