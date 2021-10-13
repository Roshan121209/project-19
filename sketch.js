var gameOver,gameOverImg
var space, spaceImg
var rocket, rocketImg
var UFO, UFOImg

function preload(){
gameOverImg = loadImage("gameover.jpg")
spaceImg = loadImage("space.jpg")
rocketImg = loadImage("Rocket.jpg")
UFOImg = loadImage("UFO.jpg")
}

function setup() {
 createCanvas(600,600)

 space = createSprite(300,300)
      space.addImage("space",spaceImg)
      space.velocityY = 2
}

function draw() {
    background(280)
    if(space.y > 400){
        space.y = 300
      }  

      drawSprites()
  
}
