var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bm,bm1,bm2;
var packageBody,ground
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);
	bm=createSprite(380,650,300,20);
	bm.shapeColor="red";
	World.add(world, bm);
	bm1=createSprite(220,570,20,180);
	bm1.shapeColor="red";
	World.add(world, bm1);
	bm2=createSprite(520,570,20,180);
	bm2.shapeColor="red";
	World.add(world, bm2);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false); 
  }
}



