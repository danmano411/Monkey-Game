
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup;
var score = 0;
var survivalTime = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(100, 320, 200, 200);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 800, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  
  monkey.collide(ground);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if (keyDown("space") && monkey.velocityY === 0){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY += 0.6;
  
  spawnBanana();
  
  spawnObstacles();
  
  drawSprites(); 
  
  drawScore();
}

function spawnBanana() {
  if (frameCount%80 === 0){
    banana = createSprite(400, 70, 20, 20);
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.y = Math.round(random(120, 200))
    banana.lifetime = 400/7;
    banana.velocityX = -7;
    
    foodGroup.add(banana);
  }
  
}

function spawnObstacles(){
  
  if (frameCount%300 === 0){
    obstacle = createSprite(400, 330, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -7;
    obstacle.lifetime = 400/7
    
    obstacleGroup.add(obstacle);
  }
}

function drawScore(){
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 550, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 100, 50);
  
}

 