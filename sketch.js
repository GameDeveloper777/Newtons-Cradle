const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
	world = engine.world;
	
	ground = new Roof(400,700,800,20);
	roofObject1 = new Roof(400,100,400,50);
	bobObject1=new PaperClass(500,300,30);
	rope1 = new Rope(bobObject1.body,roofObject1.body,200,20);

	bobObject2=new PaperClass(500,300,30);
	rope2 = new Rope(bobObject2.body,roofObject1.body,140,20);

	bobObject3=new PaperClass(500,300,30);
	rope3 = new Rope(bobObject3.body,roofObject1.body,80,20);

	bobObject4=new PaperClass(500,300,30);
	rope4 = new Rope(bobObject4.body,roofObject1.body,20,20);

	bobObject5=new PaperClass(500,300,30);
	rope5 = new Rope(bobObject5.body,roofObject1.body,-40,20);``

	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(225);
  ground.display();
  roofObject1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



