var gameState = 0;
var coin, sun, land, air, water, cloud, uni, tree, house, person;



function setup() {
  createCanvas(1500, 750);
  coin = 1000000;

  sun = createSprite(100,100,50,50);
  sun.shapeColor = rgb(255,200,0);
  sun.visible = false;

  land = createSprite(750,725,1500,50);
  land.shapeColor = rgb(255,85,0);
  land.visible = false;

  air1 = createSprite(750, 375, 10, 10);
  air1.shapeColor = "white";
  air1.visible = false;
  air2 = createSprite(780, 320, 10, 10);
  air2.shapeColor = "white";
  air2.visible = false;
  air3 = createSprite(810, 390, 10, 10);
  air3.shapeColor = "white";
  air3.visible = false;

  air1.velocityX = 3;
  air2.velocityX = 3;
  air3.velocityX = 3;

  water = createSprite(750,675,1500,50);
  water.shapeColor = rgb(0, 177, 186);
  water.visible = false;

  cloud = createSprite(720, air3.y+30, 100, 20);
  cloud.shapeColor = "white";
  cloud.visible = false;  
  cloud.velocityX = 2;


  




  

 
  
  

  
  
 

}

function draw() {
 
  

  background(0);
  
  if(gameState>-1)
  {
    textSize(20);
    fill("white");
    text(""+gameState,1450, 100);
    text("//This game is not completely programmed yet.", 0,30);
    text("//This game is not completely programmed yet.", 0,30);
  }
 


  if(air1.x>1600)
  {
    air1.x = -75;
    air2.x = -20;
    air3.x = -90;
  }

  if(cloud.x>width+200)
  {
    cloud.x = - 100;
  }
 
 
  if(gameState === 0)
  {
    var button = createSprite(800,200,60,30);
    fill("white");
    textSize(20);
    text("COINS = "+coin,1000, 50);
    text("Hi! In this game, you get to create your own world!!",500, 100);
    text("You have 1 million coins to buy various resources.",500, 140);
    text("Start off with buying the Sun for 500,000",500, 180);

    if(mousePressedOver(button) && coin>=500000)
    {
      coin = coin - 500000;   
      gameState = 1;
      button.destroy();
      button.visible = false;
    }

  }
  else  if(gameState === 1)
  {
    
    var button1 = createSprite(800,240,60,30);

    background(140,45,0);
    fill("black");
    sun.visible = true;
    textSize(20);
    text("COINS = "+coin,1000, 50);
    text("Great! Now your coins and resources will keep increasing.",500, 100);
    text("The next step is buying land to build your world on, for 1,000,000, and coin production will increase.",500, 140);
    
    if(frameCount % 4 === 1)
    {
       coin = coin+100000;
    }
   

    if(mousePressedOver(button1) && coin>=1000000)
    {
      coin = coin - 1000000;
      gameState = 2;
      button1.destroy();
      button1.visible = false;
    }

  } else if(gameState === 2)
  {
    
    var button2 = createSprite(800,280,60,30);

    background(140, 45, 0);
    fill("black");
    sun.visible = true;
    land.visible = true;
    textSize(20);
    text("COINS = "+coin,1000, 50);
    text("Great! Now your coins and resources will keep increasing.",500, 100);
    text("The next step is buying air cool down the earth for forming water for 1,500,000, and coin production will increase.",500, 140);
    
    if(frameCount % 4 === 1)
    {
       coin = coin+150000;
    }
   

    if(mousePressedOver(button2) && coin>=1500000)
    {
      coin = coin - 1500000;
      gameState = 3;
      button2.destroy();
      button2.visible = false;
    }

  }

   else if(gameState === 3)
   {
     
     var button3 = createSprite(800,320,60,30);
 
     background(0,210,255);
     fill("black");
     sun.visible = true;
     land.visible = true;
     land.shapeColor = "brown";
     air1.visible = true;
     air2.visible = true;
     air3.visible = true;
     textSize(20);
     text("COINS = "+coin,1000, 50);
     text("Great! Now your coins and resources will keep increasing.",500, 100);
     text("The next step is buying water to start life processes for 3,000,000 and coin production will increase.",500, 140);
     
     if(frameCount % 4 === 1)
     {
        coin = coin+300000;
     }
    
 
     if(mousePressedOver(button3) && coin>=3000000)
     {
       coin = coin - 3000000;
       gameState = 4;
       button3.destroy();
       button3.visible = false;
     }
  
   } else if(gameState === 4)
   {
     
     var button4 = createSprite(800,360,60,30);
 
     background(0,210,255);

     fill("black");
     sun.visible = true;
     land.visible = true;
     land.shapeColor = "brown";
     air1.visible = true;
     air2.visible = true;
     air3.visible = true;
     water.visible = true;
     textSize(20);
     text("COINS = "+coin,1000, 50);
     text("Great! Now your coins and resources will keep increasing.",500, 100);
     text("The next step is buying clouds to help start life processes for 10,000,000 and coin production will increase.",500, 140);
     
     if(frameCount % 4 === 1)
     {
        coin = coin + 400000;
     }
    
 
     if(mousePressedOver(button4) && coin>=10000000)
     {
       coin = coin - 10000000;
       gameState = 5;
       button4.destroy();
       button4.visible = false;
     }
  
   } else if(gameState === 5)
   {
     
     var button5 = createSprite(900,200,60,30);
 
     background(0,210,255);

   

     fill("black");
     sun.visible = true;
     land.visible = true;
     land.shapeColor = "brown";
     air1.visible = true;
     air2.visible = true;
     air3.visible = true;
     water.visible = true;
     cloud.visible = true;
     textSize(20);
     text("COINS = "+coin,1000, 50);
     text("Great! Now your coins and resources will keep increasing.",500, 100);
     text("The next step is buying plankton to start evolution for 20,000,000 and coin production will increase.",500, 140);
     
     if(frameCount % 4 === 1)
     {
        coin = coin + 600000;
     }
    
 
     if(mousePressedOver(button5) && coin>=2000000)
     {
       coin = coin - 20000000;
       gameState = 6;
       button5.destroy();
       button5.visible = false;
     }
  
   }

   
 
  



  drawSprites();
  fill("white");
  text(mouseX+","+mouseY,mouseX,mouseY);
}
