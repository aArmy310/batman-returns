var umbrella;
var drop;
var l1,l2,l3,l4;
var w1,w2,w3,w4,w5,w6,w7,w8;
function preload(){
    l1=loadImage("1.png");
    l2=loadImage("2.png");
    l3=loadImage("3.png");
    l4=loadImage("4.png");
    w1=loadImage("walking_1.png");
    w2=loadImage("walking_2.png");
    w3=loadImage("walking_3.png");
    w4=loadImage("walking_4.png");
    w5=loadImage("walking_5.png");
    w6=loadImage("walking_6.png");
    w7=loadImage("walking_7.png");
    w8=loadImage("walking_8.png");

}

function setup(){
   createCanvas(300,600);
  // engine = Engine.create();
  // world = engine.world;
   drop = new Drop(50,100);
   umbrella = new Umbrella();
   l1 = createSprite(150,5);
   l2 = createSprite(150,5);
   l3 = createSprite(200,5);
   l4 = createSprite(110,5);
   w1=createSprite(150,425);

}

function draw(){
    background("black");
    //Engine.update(engine);
    drawSprites();
    drop.display();
    umbrella.display();
    l1.display();
    l2.display();
    l3.display();
    l4.display();
}   

