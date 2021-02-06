const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground;
var ball;
var rope;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon;
var sling;
function setup(){
    createCanvas(2800,800);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,795,2000,30);
    stand1 = new Ground(560,685,350,15);
    stand2 = new Ground(1100,405,300,15);
    //level1 stand1
    
    block1 = new Block(650,655,40,50);
    block2 = new Block(585,655,40,50);
    block3 = new Block(560,655,40,50);
    block4 = new Block(540,655,40,50);
    block5 = new Block(500,655,40,50);
    block6 = new Block(500,655,40,50);
    block7 = new Block(600,655,40,50);

    
    // level 1 stand2
    block8 = new Block(1020,400,40,50);
    block9 = new Block(1060,400,40,50);
    block10 = new Block(1100,400,40,50);
    block11 = new Block(1140,400,40,50);
    block12 = new Block(1180,400,40,50);
    // level2 stand1
    
    block13 = new Block(620,605,40,50);
    block14 = new Block(600,605,40,50);
    block15 = new Block(560,605,40,50);
    block16 = new Block(520,605,40,50);
    block17 = new Block(500,605,40,50);

    // level2 stand2

    
    block18 = new Block(1060,300,40,50);
    block19 = new Block(1100,300,40,50);
    block20 = new Block(1140,300,40,50);

    // level3 stand1
    
    block21 = new Block(600,555,40,50);
    block22 = new Block(560,555,40,50);
    block23 = new Block(520,555,40,50);

    // top stand1
    block24 = new Block(560,505,40,50);
    block25 = new Block(1100,250,40,50);
   
    polygon = new Polygon(200,400,50,50);
    sling = new Slingshot(polygon.body,{x:300,y:500});
    
}

function draw(){
rectMode();
background("black");
Engine.update(engine);
ground.display();
stand1.display();
stand2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
polygon.display();
sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition( polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly();
}