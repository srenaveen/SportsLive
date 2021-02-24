var back, back2,score,board;
var coach, Coach;
function preload(){
  back = loadImage("Back.png");
  back2 = loadImage("Arena.jpg");
  Coach = loadImage("Coach.png");
  board = loadImage("Score.png");
}
function setup() {
  createCanvas(1340,700);
  coach = createSprite(670,600,50,50);
  coach.addImage(Coach);
  score = createSprite(680,310,100,100);
  score.addImage(board);
  score.scale = 0.5;
}

function draw() {
  background(back2);  

  drawSprites();
}