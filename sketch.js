var backGround,backGroundImage;
var cat, catImage;
var mouse, mouseAnimation;

function preload() {
    backGroundImage = loadImage("garden.png");
    catImage = loadImage("tomFour.png");
    catImage2 = loadImage("tomTwo.png");
mouseAnimation = loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png");
}

function setup(){
    createCanvas(800,800);
    backGround = createSprite(400,400,800,800);
    backGround.addImage("jungle",backGroundImage);

    cat = createSprite(300,200,10,10);
    cat.addImage("tom",catImage);
    cat.scale = 0.1;

    mouse = createSprite(10,200,10,10);
    mouse.addAnimation("teasing",mouseAnimation);
    mouse.scale = 0.1;

    

}

function draw() {

    background(255);
    keyPressed();

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
cat.loadAnimation("running",catImage2);
cat.changeAnimation("running");
  }


}
