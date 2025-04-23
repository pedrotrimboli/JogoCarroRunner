var timer = 0;
var timer2 = 0;
var time = 0;
var gameState = 1;

var road, roadImg
var car, carImg
var car2, car2Img
var car3, car3Img
var car4, car4Img
var car5, car5Img
var car6, car6Img
var play, playImg
var over, overImg
var win, winImg

function preload() {
    roadImg = loadImage("road.png_1.png");
    carImg = loadImage("car.png_1.png");
    car2Img = loadImage("car2.png_1.png");
    car3Img = loadImage("car3.png_1.png");
    car4Img = loadImage("car4.png_1.png");
    car5Img = loadImage("car5.png_1.png");
    car6Img = loadImage("car6.png_1.png");
    playImg = loadImage("play.png_1.png");
    overImg = loadImage("lose.png_1.png");
    winImg = loadImage("win.png_1.png");
}

function setup() {
road = createSprite(205,200);
road.addImage("road",roadImg);
road.width = 1000;
road.height = 1000;
road.scale = 10;

car = createSprite(200,300);
car.addImage("car", carImg);
car.scale = 0.5;

car2 = createSprite(100,200);
car2.addImage("car2", car2Img);
car2.scale = 0.5;

car3 = createSprite(325,350);
car3.addImage("car3", car3Img);
car3.scale = 0.5;

car4 = createSprite(50,30);
car4.addImage("car4", car4Img);
car4.scale = 0.5;

car5 = createSprite(350,85);
car5.addImage("car5", car5Img);
car5.scale = 0.5;

car6 = createSprite(100,10);
car6.addImage("car6", car6Img);
car6.scale = 0.5;

play = createSprite(200,200);
play.addImage("play", playImg);
play.scale = 1;

over = createSprite(200,200);
over.addImage("lose", overImg);

win = createSprite(200,200);
win.addImage("win", winImg);
win.scale = 1;
}

function draw() {
    drawSprites();
  if(gameState === 1){
    if(keyDown("space")){
        timer2 = World.seconds;
        gameState = 2;
      }
      play.visible = true;
      win.visible = false;
      over.visible = false;
  }
  if(gameState === 2) {
    timer = World.seconds - timer2;
    car2.velocityY = 10;
    car3.velocityY = 10;
    car4.velocityY = 10;
    car5.velocityY = 10;
    car6.velocityY = 10;
    play.visible = false;
  
  fill("white");
  textSize(20);
  textFont("Courier New");
  text("Tempo: " + timer,10,30);

  if(keyDown("RIGHT")){
    car.x = car.x + 10;
  }
  
  if(keyDown("LEFT")){
    car.x = car.x - 10;
  }
  
  over.visible = false;
  if(car.isTouching(car2)||
    car.isTouching(car3) ||
    car.isTouching(car4) ||
    car.isTouching(car5) ||
    car.isTouching(car6)){
    gameState = 3;
  }
  
  if(car2.isTouching(car3)||
    car2.isTouching(car4)||
    car2.isTouching(car5)||
    car2.isTouching(car6)){
    car2.y = 0;
    car2.x = Math.round(random(400,0));
  }
  
  if(car3.isTouching(car2)||
    car3.isTouching(car4)||
    car3.isTouching(car5)||
    car3.isTouching(car6)){
    car3.y = 0;
    car3.x = Math.round(random(400,0));
  }
  
  if(car4.isTouching(car2)||
    car4.isTouching(car3)||
    car4.isTouching(car5)||
    car4.isTouching(car6)){
    car4.y = 0;
    car4.x = Math.round(random(400,0));
  }
  
  if(car5.isTouching(car2)||
    car5.isTouching(car3)||
    car5.isTouching(car4)||
    car5.isTouching(car6)){
    car5.y = 0;
    car5.x = Math.round(random(400,0));
  }
  
  if(car2.y > 405) {
    car2.y = 0;
    car2.x = Math.round(random(400,0));
  }
  
  if(car3.y > 405) {
    car3.y = 0;
    car3.x = Math.round(random(400,0));
  }
  
  if(car4.y > 405) {
    car4.y = 0;
    car4.x = Math.round(random(400,0));
  }
  
  if(car5.y > 405) {
    car5.y = 0;
    car5.x = Math.round(random(400,0));
  }
  
  if(car6.y > 405) {
    car6.y = 0;
    car6.x = Math.round(random(400,0));
  }
  
  if(car.x > 405){
    car.x = 0;
  }
  win.visible = false;
  if(timer > 44) {
    win.visible = true;
  }
  }
  if(gameState === 3) {
    road.destroy();
    car.destroy();
    car2.destroy();
    car3.destroy();
    car4.destroy();
    car5.destroy();
    car6.destroy();
    play.visible = false;
    win.visible = false;
    over.visible = true;

}
}