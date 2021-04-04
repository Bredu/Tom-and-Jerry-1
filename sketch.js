var tom, jerry;
var catImg, mouseImg;
var catTouch, mouseTouch;
var bgImg


function preload() {
    catImg = loadImage("images/cat2.png")
    mouseImg = loadImage("images/mouse2.png")
    catTouch = loadImage("images/cat1.png")
    mouseTouch = loadImage("images/mouse1.png")
    bgImg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);

    tom = createSprite(800,400,100,100);
    tom.addImage(catImg);
    tom.debug = true;
    tom.scale = 0.1

    jerry = createSprite (200,500,70,70);
    jerry.debug = true;
    jerry.addImage(mouseImg)
    jerry.scale = 0.1

}

function draw() {

    background(bgImg);
    tom.x = World.mouseX;
    tom.y = World.mouseY;

if(tom.x - jerry.x < tom.width/2+jerry.width/2 && tom.y - jerry.y < tom.height/2+jerry.height/2 && jerry.x - tom.x < tom.width/2+jerry.width/2 && jerry.y - tom.y < tom.height/2+jerry.height/2){
    tom.addImage(catTouch)
    jerry.addImage(mouseTouch)
} else {
    tom.addImage(catImg);
    jerry.addImage(mouseImg)

}


    drawSprites();
}


function keyPressed(){

}
