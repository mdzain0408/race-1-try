var ball;
var position,database;
var gameState = 0;
var form,playerCount,game,player,allPlayers;
var car1,car2,car3,car4,cars;


function setup(){
    database = firebase.database();
    createCanvas(displayWidth - 20, displayHeight-30);

   game = new Game();
   game.getState();
   game.start();
   
    
  
    

}











function draw(){
    background("white");
    
    if(playerCount === 4){

  game.update(1);


    }


    if(gameState === 1){

game.play();

    }

   
}

