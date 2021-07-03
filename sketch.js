var cat, catFirst, catLast, catMove;
var mouse, mouseFirst, mouseLast, mouseMove;
var bgImage;

function preload() {
    bgImage = loadImage("images/garden.png");
    catFirst = loadAnimation("images/cat1.png");
    catLast  = loadAnimation("images/cat4.png");
    catMove  = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseFirst = loadAnimation("images/mouse1.png");
    mouseMove = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseLast = loadAnimation("images/mouse4.png");
}

function setup(){
    
    createCanvas(1000,800);

    cat = createSprite(800, 600, 30, 30);
    cat.addAnimation("catFirst", catFirst);
    cat.changeAnimation("catFirst");
    cat.scale = 0.15;

    mouse = createSprite(150, 600, 15, 15);
    mouse.addAnimation("mouseFirst", mouseFirst);
    mouse.changeAnimation("mouseFirst");
    mouse.scale = 0.1;
}

function draw() {

    background(bgImage);

    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width - mouse.width)/2) {

        cat.velocityX = 0;
        cat.addAnimation("catLast", catLast);
        cat.changeAnimation("catLast");

        mouse.addAnimation("mouseLast", mouseLast);
        mouse.changeAnimation("mouseLast");
    }

    drawSprites();
}


function keyPressed() {

    //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW) {
        
        mouse.addAnimation("mouseTeasing", mouseMove);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;

        cat.addAnimation("catChasing", catMove);
        cat.changeAnimation("catChasing");
        cat.frameDelay = 25;
        cat.velocityX = -2;
    }
}
