
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1,rope2,rope3,rope4,rope5
var wall
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall = new Roof(600, 100, 600, 10)
	bobObject1 = new Bob(400, 600, 100, 10) 
	bobObject2 = new Bob(500, 600, 100, 10) 
	bobObject3 = new Bob(600, 600, 100, 10) 
	bobObject4 = new Bob(700, 600, 100, 10) 
	bobObject5 = new Bob(800, 600, 100, 10) 
	rope1 = new Rope(bobObject1.body, {x: 400, y:100})
	rope2 = new Rope(bobObject2.body, {x: 500, y:100})
	rope3 = new Rope(bobObject3.body, {x: 600, y:100})
	rope4 = new Rope(bobObject4.body, {x: 700, y:100})
	rope5 = new Rope(bobObject5.body, {x: 800, y:100})
	Engine.run(engine);
  
}


function draw() {
	background(255);
	rectMode(CENTER);
   bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  wall.display();
 rope1.display(); 
 rope2.display();
 rope3.display();	
 rope4.display();
 rope5.display();
  drawSprites();
 
}



