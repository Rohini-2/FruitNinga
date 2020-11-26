var PLAY=1;
var END=0;
var gameState=1
 var fruitGroup,EnemyGroup ;
var sword;
var score;
var monster;
var gameOverSound,knifeSound;
var position;
function preload(){
swordImage=loadImage("sword.png")
monsterImage = loadAnimation("alien1.png","alien2.png")
 fruit1=loadImage("fruit1.png")
 fruit2=loadImage("fruit2.png") 
  fruit3=loadImage("fruit3.png")
 fruit4=loadImage("fruit4.png");
  GameOverImage=loadImage("gameover.png"); 
  gameOverSound=loadSound("gameover.mp3");
   knifeSound=loadSound("knifeSwooshSound.mp3");
  
}


function setup(){
  createCanvas(600,500);
  
  score=0;
  
  sword=createSprite(400,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  
  fruitGroup=new Group();
  EnemyGroup=new Group();  
}


  function draw(){
    background("lightBlue");
    
    if(gameState === PLAY){
    sword.x=mouseX
    sword.y=mouseY 
    text("Score: "+score,300,30); 
  
    if(sword.isTouching(EnemyGroup)){  
     sword.addImage(GameOverImage)  
      sword.x=200;
      sword.y=200;
      gameOverSound.play();
      gameState = END
    }
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      EnemyGroup.destroyEach();
      fruitGroup.setVelocityXEach(0);
      EnemyGroup.setVelocityXEach(0);
      knifeSound.play();
      score=score+2;
    }
    Enemy();
    
    spawnFruit()
    
    
    }
    else if(gameState === END){
      fruitGroup.destroyEach();
        EnemyGroup.destroyEach();
        fruitGroup.setVelocityXEach(0);
        EnemyGroup.setVelocityXEach(0);
      
    }
    drawSprites();
}


function spawnFruit(){
  if(frameCount%80===0){
    var   fruit=createSprite(600,200,20,20); 
     fruit.scale=0.2;
 var r =Math.round(random(1,4));
  
  if(r===1){
    fruit.addImage(fruit1)
  }
  if(r===2){
    fruit.addImage(fruit2)
  }
  if(r===3){
    fruit.addImage(fruit3)
  }
  if(r===4){
    fruit.addImage(fruit4)
  }
  fruit.y=Math.round(random(50,340));
var position=Math.round(random(1,2));
    
  if(position==1){
    fruit.x=600;
    fruit.velocityX= -(7+(score/4));
  }
    else{
       if(position==2){
    fruit.x=0;
         
    fruit.velocityX= (7+(score/4));
  }
    
    }
    fruit.setliftime=100;
    
  fruitGroup.add(fruit);
  }
    
}
function Enemy(){
 if(frameCount%200===0){
   var monster=createSprite(600,200,20,20);
   monster.addAnimation("moving",monsterImage);
  monster.y=Math.round(random(100,300));
  monster.velocityX=-(8+(score/10));
  monster.Setlifetime=50;
  
  EnemyGroup.add(monster);
 }
}









