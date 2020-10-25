var scene,sceneImage,monkey,money_running,ground,foodGroup,food_Image,
stoneGroup,stone_Image;
 
var score = 0 ;



function preload(){
  sceneImage = loadImage("jungle2.jpg")
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
 food_Image = loadImage("Banana.png")
  stone_Image =loadImage("stone.png ")
  
  
  
 
  
}

function setup() {
  //craeted the canvas already
  createCanvas(800,400);
  
  scene=createSprite(0,0,800,400);
  scene.addImage(sceneImage);
  scene.scale=1.5;
  scene.x=scene.width/2;
  scene.velocityX=-4;
    ground = createSprite(400,350,800,10);
 ground.velocityX=-4;
  ground.x = ground.width/2;
  ground.visible=false;
  monkey = createSprite(100,340,20,20);
  monkey.scale=0.1;
  monkey.addAnimation("running",monkey_running)
foodGroup = new Group();
  stoneGroup = new Group();
  
  
}

function draw() {
  
  background(255);
  
  
    if(ground.x<0){
       ground.x=ground.width/2;
             
    }
  
  if(scene.x<100){
       scene.x=scene.width/2;
             
    }
    
    if(foodGroup.isTouching(monkey)){
      foodGroup.destroyEach()
      score=score + 10
    }
    
    switch(score){
        case 10: monkey.scale=0.12;
                break;
                
                case 20: monkey.scale=0.14;
                break;
                
                case 30: monkey.scale=0.16;
                break;
                
                case 40: monkey.scale=0.1;
                break;
       
        default: break;
    }
  
  
    
  
  if(keyDown("space")){
    monkey.velocityY = -12;
    
  }
  monkey.velocityY= monkey.velocityY+1 
  monkey. collide(ground)
    spawnFood();
    spawnObstacles();
 
      if(stoneGroup.isTouching(monkey)){ 
       monkey.scale = 0.05
    
    }
  
  drawSprites();
  
  //displaying of the score>>>already done
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
}

function spawnFood() {
  //write code here to spawn the food after every 80 frames
  if (frameCount % 80 === 0) {
   var banana = createSprite(600,250,10,10)
     
  banana.y = random(120,200);
    banana.addImage(food_Image);
    banana.scale=0.05
    banana.velocityX = -5
    banana.lifetime=300
    foodGroup.add(banana)
  }}

function spawnObstacles() {
  //write code here to spawn the food after every 300 frames
  if(frameCount % 300 === 0) {
    
  var stone = createSprite(800,350,10,10)
    stone.addImage(stone_Image);
    stone.scale=0.2
    stone.velocityX = -5
    stone.lifetime=300
    stoneGroup.add(stone)   
    //assign scale and lifetime to the obstacle     
    
    //add each obstacle to the group
   
  }
}


  
