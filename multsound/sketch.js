let state = 0;
let song1,song2,song3;


function preload(){
  song1 = loadSound("assets/song1.mp3");
  song2 = loadSound("assets/song2.mp3");
  song3 = loadSound("assets/song3.mp3");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch(state){

    case 0:
    song1.play();
    state = 1;
    break;

    case 1:
    background("green");
    break;

    case 2:
    song2.play();
    state = 3;
    break;

    case 3:
    background("red");
    break;

    case 4:
    song3.play();
    state=5;
    break;

    case 5:
    background("yellow");
    break;
  }

}

function mouseReleased(){
  state++;
  song1.pause();
  song2.pause();
  song3.pause();
  if(state>5){
    state=0;
  }
}
