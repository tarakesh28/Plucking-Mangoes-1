
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;

var mango1;
var world,boy;
var launchingForce = 100;
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

    stoneObject = new Stone(235,420,30);

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(920,170,30);
	mango5=new Mango(1000,60,30);
	mango6=new Mango(1050,200,30);
	mango7=new Mango(1150,170,30);
	mango8=new Mango(1200,200,30);
    mango9=new Mango(1120,230,30);
	mango10=new Mango(1115,27,30);
	mango11=new Mango(1220,160,30);
	mango12=new Mango(950,240,30);

	treeObj=new tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	launcherObject = new Launcher(stoneObject.body,{x:235,y:420});
	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1300,
			height:600,
			wireframes:false
		}
	});
	Engine.run(engine);
	Render.run(render);

}

function draw() {

  background(255);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObject.display();
  launcherObject.display();
  groundObject.display();

  detectCollision(stoneObject,mango1);
  detectCollision(stoneObject,mango3);
  detectCollision(stoneObject,mango4);
  detectCollision(stoneObject,mango5);
  detectCollision(stoneObject,mango6);
  detectCollision(stoneObject,mango7);
  detectCollision(stoneObject,mango8);
  detectCollision(stoneObject,mango9);
  detectCollision(stoneObject,mango10);
  detectCollision(stoneObject,mango11);
  detectCollision(stoneObject,mango12);

}

function mouseDragged(){
   Matter.Body.setPosition(stoneObject.body,{x:mouseX,y:mouseY})
 }

function mouseReleased(){
	launcherObject.fly();
}
function keyPressed(){
	if(keyCode===32){
      Matter.Body.setPosition(stoneObject.body,{x:235,y:420});
	  launcherObject.attach(stoneObject.body);
	}
}

function detectCollision(lstone,lmango){
	
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<=lmango.r+lstone.r){
		console.log("collided");
        Matter.Body.setStatic(lmango.body,false);
}	
}
