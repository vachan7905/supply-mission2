var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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


	wall1 = createSprite(500, 610, 20,100);
	wall1.shapeColor=color("red")

	wall2 = createSprite(300,610, 20,100);
	wall2.shapeColor=color("red")

	wall3 = createSprite(400,650, 200,20);
	wall3.shapeColor=color("red")



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 wall1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 wall2 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, wall2);
	 
	 wall3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	 World.add(world,  wall3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x+=20;
		Matter.Body.translate(packageBody,{x:20,y:0});
	}
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x-=20;
		Matter.Body.translate(packageBody,{x:-20,y:0});
	}

 if (keyCode === DOWN_ARROW) {
        Matter.Body.setStatic(packageBody,false);
  }
}