const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
var drops =[];
var Bruce;
var walking;

var umbrella;
//var rain;
var rand;
var scenary;
var backgroundImage;
var thunder, thunderbold1 , thunderbold2 , thunderbold3,thunderbold4;
var rand;
var sound;

function preload(){
   thunderbold1 = loadImage("images/thunderbolt/1.png");
    thunderbold2 = loadImage("images/thunderbolt/2.png");
   thunderbold3 = loadImage("images/thunderbolt/3.png");
   thunderbold4 = loadImage("images/thunderbolt/4.png");

   sound = loadSound("thundersound.wav");

  walking = loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png",
  "images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png")
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
   sound.play();

    Bruce = createSprite(400,525,50,100);
    Bruce.addAnimation("walk", walking);
    Bruce.scale = 0.5;
    //drops = new dropsClass(250,750);
    if(frameCount % 200 === 0 ){
        for(var i=0; i<50; i++){
            drops.push(new WaterDrops(random(0,800), random(0,800)));
        }
    }

  umbrella = new Umbrella(400,435);


}

function draw(){
    background(0);
    Engine.update(engine);
   
    drawSprites();
   // scenary = createSprite(800,350,800,700);
    //scenary = addImage(backgroundImage);
    //scenary.velocityX = -2;
    //scenary.scale = 3;

    //displaying rain drops
    for(var i = 0; i<50; i++){
        drops[i].display();
        drops[i].update_Y_Position();
        
    }
     rand =Math.round(random(1,4));
     if( frameCount%80 ===0 ){
      thunder = createSprite(random(10,770),random(10,30), 10,10);
      switch(rand){
        case 1: thunder.addImage(thunderbold1);
        break;
        case 2: thunder.addImage(thunderbold2);
        break; 
        case 3: thunder.addImage(thunderbold3);
        break;
        case 4: thunder.addImage(thunderbold4);
        break;
        default: break;

    }

    thunder.scale = random(0.3,0.6)

    thunder.lifetime= 20;
     }

    

    
   umbrella.display();

  
}   

