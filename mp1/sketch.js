function setup() {
  createCanvas(500, 500);

}

function draw() {

  if (mouseIsPressed) {
    background('grey');
    //face
    fill('#EDC77B');
    ellipse(250,250,80,80);

    //body
    fill('darkgreen');
    rect(200,290,100,290,20,20,10,10);

    //hands
    line(203,300,150,400)
    line(297,300,350,400)

    //eyes
    fill('white')
    ellipse(270,240,20,5);
    ellipse(230,240,20,5);

    //mouth

    noFill();
    arc(250,270,50,20,3,0);


    //hat
    fill('orange');
    triangle(205,220,300,220,250,150);

    //trees
    fill('brown');
    rect(95,200,20,100);
    fill('green');
    ellipse(105,175,70,70);

    fill('brown');
    rect(55,200,20,100);
    fill('green');
    ellipse(65,175,70,70);

    fill('brown');
    rect(405,200,20,100);
    fill('green');
    ellipse(415,175,70,70);

    fill('brown');
    rect(450,200,20,100);
    fill('green');
    ellipse(460,175,70,70);

    //moon
    fill('#ffe921');
    arc(300, 100, 125, 125, PI+HALF_PI, HALF_PI, CHORD);

    fill('black');
    textSize(20);
    text("This is me, James, during the night with a sad face and probably ready to sleep but still outside",10,10,400,400)







  } else {
    background("lightblue");

    //face
    fill('#EDC77B');
    ellipse(250,250,80,80);

    //body
    fill('lightgreen');
    rect(200,290,100,290,20,20,10,10);

    //hands
    line(203,300,150,400)
    line(297,300,350,400)

    //eyes
    fill('white')
    ellipse(270,240,20,10);
    ellipse(230,240,20,10);

    //mouth

    noFill();
    arc(250,270,50,20,0,3);

    //sun
    fill('#FC9803');
    ellipse(50,50,150,150);

    //hat
    fill('yellow');
    triangle(205,220,300,220,250,150);

    //trees
    fill('brown');
    rect(95,200,20,100);
    fill('green');
    ellipse(105,175,70,70);

    fill('brown');
    rect(55,200,20,100);
    fill('green');
    ellipse(65,175,70,70);

    fill('brown');
    rect(405,200,20,100);
    fill('green');
    ellipse(415,175,70,70);

    fill('brown');
    rect(450,200,20,100);
    fill('green');
    ellipse(460,175,70,70);

    fill('black');
    textSize(20);
    text("This is me, James, during the day with a happy face, big smile and eyes wide open",10,10,400,400)






  }



//  fill('black');
  //text("James",10,10);
}
