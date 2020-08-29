var ball,img,paddle,ballimg,paddleimg,gameState;
function preload() {
  /* preload your images here of the ball and the paddle */
  paddleimg = loadImage("paddle.png");
  ballimg = loadImage("ball.png");
  
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  gameState = "play";
  
  if(gameState === "play"){
  ball = createSprite(100,200,10,10);
  ball.addImage("BALL",ballimg);
  
  /* assign the images to the sprites */
  paddle = createSprite(380,200,10,10);
  paddle.addImage("PADDLE",paddleimg);
  }
  
  
  
  
  /* give the ball an initial velocity of 9 in the X direction */
  if( gameState === "play"){
  ball.velocityX=9;
  }
  

}

function draw() {
  if(gameState==="play"){
  background(205,153,0);
  }
  
  /* create Edge Sprites here */
  edges= createEdgeSprites();
  
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  
  if(gameState ==="play"){
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  }
  
  
  /* Allow the ball to bounceoff from the paddle */
  if(ball.bounceOff(paddle)&& gameState === "play"){
    randomVelocity();
  }
  
  if (ball.x>400 && gameState === "play"){
    ball.x=100;
    ball.velocityX=0;
    ball.velocityY=0;
    ball.y=200;
    gameState="Over";
    background(255);
    textSize(20);
    stroke("black");
    text("PRESS SPACE TO START",100,200);
    
  }
  
  if(keyDown("space") && gameState ==="Over"){
    gameState = "play";
    ball.velocityX=9;
  
  }
    
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW) && gameState === "play")
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW)&& gameState === "play")
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y=paddle.y+20;
  }
  if(gameState === "play"){
  drawSprites();
  }
  
}

function randomVelocity()
{
  
  ball.velocityY=random(-8,8);
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

