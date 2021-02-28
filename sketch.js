var gameState =0;
var contestantCount =0;
var database =0;
var quiz = 0;
var question =0;
var contestnant = 0;

function setup(){
          canvas = createCanvas(850,400);
 database = firebase.database();
quiz = new Quiz;
quiz.gameState();
quiz.start();

}


function draw(){
  background("pink");

  
}
