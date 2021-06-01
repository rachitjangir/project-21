var canvas;
var music;
var surface1,surface2,surface3,surface4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(80,10,100,100);
surface2 = createSprite(80,10,400,400);
surface3 = createSprite(80,10,300,300);
surface4 = createSprite(80,10,200,200);


    //create box sprite and give velocity
ball = createSprite(random(20,750));
if(surface2.isTouching(ball)){
ball.shapeColour = rgb(225,128,0);
ball.velocityX = 0;
music.stop();
}
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprite();


    //add condition to check if box touching surface and make it box
    drawSprite();
}
