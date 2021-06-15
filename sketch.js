var pc,npc,wepons
var pcImage,npcImage,bgImage,bg,wall,wall2,wall3,wall4

function setup() {
  createCanvas(displayWidth-20,displayHeight-120);
 // wall=createSprite(450,450,10,0)
 // wall2=createSprite(950,450,10,00)
 // wall3=createSprite(700,100,500,10)
  bg=createSprite(width/2,height-50,30,30)
  bg.addImage(bgImage)
  bg.velocityY=1
  pc=createSprite(850,390,10,10)
  pc.addImage(pcImage)
  pc.scale=0.5
  npc=createSprite(680,390,10,10)
  npc.addImage(npcImage)
  npc

}
function preload(){
   pcImage=loadImage("images/pc.png")
   bgImage=loadImage("images/bagroung.jpg")
   npcImage=loadImage("images/ob1.png")
}
function draw() {
  background(0);
  
  if (bg.y>height-100) {
      bg.y=height/2
  }






  drawSprites();

  

}