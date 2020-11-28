const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var pinkImg, blueImg, purpleImg, orangeImg, greenImg, backgroundImg, pandaImg;
var pink, blue, purple, orange, green, background, panda;

function preload(){
    pinkImg = loadImage("pink bubble.png");
    blueImg = loadImage("blue bubble.png");
    purpleImg = loadImage("purple bubble.png");
    orangeImg = loadImage("orange bubble.png");
    greenImg = loadImage("green bubble.png");
    backgroundImg = loadImage("background.jpg");
    pandaImg = loadImage("panda.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    pink = createSprite(200,200,10,10);
    pink.addImage(pinkImg);
    pink.scale = 0.1;
    
    blue = createSprite(400,200,10,10);
    blue.addImage(blueImg);
    blue.scale = 0.1;

    purple = createSprite(600,200,10,10);
    purple.addImage(purpleImg);
    purple.scale = 0.35;

    orange = createSprite(800,200,10,10);
    orange.addImage(orangeImg);
    orange.scale = 0.18;

    green = createSprite(1000,200,10,10);
    green.addImage(greenImg);
    green.scale = 0.35;

    panda = createSprite(600,700,10,10);
    panda.addImage(pandaImg);
    panda.scale = 0.5;
}

function draw(){
    background(backgroundImg);

    Engine.update(engine);

    drawSprites();
}