
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof1 = new roof(600,100,700,40)
bob1 = new bob(600,300,60)
//bob1.setCollider("circle",0,0,40)
bob2 = new bob(670,310,60)
//bob1.debug = true
bob3 = new bob(740,350,60)
bob4 = new bob(530,300,60)
bob5 = new bob(365,300,60)

chain1 = new Chain(bob1.body,roof1.body,0)
chain2 = new Chain(bob2.body,roof1.body,121)
chain3 = new Chain(bob3.body,roof1.body,235)
chain4 = new Chain(bob4.body,roof1.body,-125)
chain5 = new Chain(bob5.body,roof1.body,-235)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  
  bob2.setCollider = 0

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  chain2.display();
  chain1.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  
  drawSprites();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob3.body,bob3.body.position,{x:385,y:-385});
  }

}

