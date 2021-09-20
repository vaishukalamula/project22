
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(700, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false, 
	restitution:0.3,
    friction:0,
	density:1.2
}
ball = Bodies.circle(100,200,20,ball_options)
World.add(world,ball)
	Engine.run(engine);
	groundObj = new Ground(width/2,650,width,20);
	leftSide = new Ground(500,600,20,120);
	rightSide = new Ground(1650,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);


  
  ellipse(ball.position.x,ball.position.y,20);
  
groundObj.display();
leftSide.display();
  drawSprites();
 
}



