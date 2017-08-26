

$( document ).ready(function() {
  var player1=null, player2=null, winningCombinations=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],
 xTiles=[], oTiles=[], tilesClicked=[], playerTurn=null;

$('body').on('click', '.x', function (){playerTurn="X"; player1="X";
$("#board").empty();
 $("#board").append('<div class ="choose-opponent"><br />Choose your <br />opponent <br /><br/></br/><span class="cpu">CPU</span><span class ="human">Human</span></div>');
});
$('body').on('click', '.o', function (){playerTurn="O"; player1="O";
$("#board").empty();
 $("#board").append('<div class ="choose-opponent"><br />Choose your <br />opponent <br /><br/></br/><span class="cpu">CPU</span><span class ="human">Human</span></div>');
});
  $('body').on('click', '.CPU', function (){ player2="CPU";
   $("#board").empty();
     $("#board").append('<div class="game-tile" id="tile-1"></div><div class="game-tile" id="tile-2"></div><div class="game-tile" id="tile-3"></div><div class="game-tile" id="tile-4"></div><div class="game-tile" id="tile-5"></div><div class="game-tile" id="tile-6"></div><div class="game-tile" id="tile-7"></div><div class="game-tile" id="tile-8"></div><div class="game-tile" id="tile-9"></div>');
 });
 $('body').on('click', '.human', function (){
  $("#board").empty();
    $("#board").append('<div class="game-tile" id="tile-1"></div><div class="game-tile" id="tile-2"></div><div class="game-tile" id="tile-3"></div><div class="game-tile" id="tile-4"></div><div class="game-tile" id="tile-5"></div><div class="game-tile" id="tile-6"></div><div class="game-tile" id="tile-7"></div><div class="game-tile" id="tile-8"></div><div class="game-tile" id="tile-9"></div>');
});

$('body').on('click', '#tile-1', function(){console.log("1");tileClickFunction(1);});
$('body').on('click', '#tile-2', function(){tileClickFunction(2);});
$('body').on('click', '#tile-3', function(){tileClickFunction(3);});
$('body').on('click', '#tile-4', function(){tileClickFunction(4);});
$('body').on('click', '#tile-5', function(){tileClickFunction(5);});
$('body').on('click', '#tile-6', function(){tileClickFunction(6);});
$('body').on('click', '#tile-7', function(){tileClickFunction(7);});
$('body').on('click', '#tile-8', function(){tileClickFunction(8);});
$('body').on('click', '#tile-9', function(){tileClickFunction(9);});

var tileClickFunction = function(tileNumber){
if(tilesClicked.indexOf(tileNumber)==-1){ //make sure its not checked
  if (playerTurn == "X"){
    $("#tile-"+tileNumber).append("X");  //check it
tilesClicked.push(tileNumber); //mark it
    xTiles.push(tileNumber);   //add to playerTiles
didTheyWin(xTiles);  //check for win/tie
if(player2 == "CPU" && player1 == "X"){cpuTurn("O");}
else{  playerTurn ="O";}   //next player turn
                   }
else{
        $("#tile-"+tileNumber).append("O");  //check it
  tilesClicked.push(tileNumber); //mark it
      oTiles.push(tileNumber);   //add to playerTiles
  didTheyWin(oTiles);  //check for win/tie
  if(player2 == "CPU" && player1 == "O"){cpuTurn("X");}
  else{playerTurn ="X";}   //next player turn
}
}
};



var didTheyWin = function(playerTiles){
  for (i=0;i<winningCombinations.length;i++){
    if (playerTiles.indexOf(winningCombinations[i][0]) >= 0 &&
   playerTiles.indexOf(winningCombinations[i][1]) >= 0 &&
    playerTiles.indexOf(winningCombinations[i][2]) >= 0){

  var win = confirm(playerTurn+"wins!\n Play again?");
  if (win == true) {
      location.reload();
  } else {
      alert("Good game. \n Remember to shake hands.");
  }
    }
    }
    if (tilesClicked.length == 9){
      var tie = confirm("Tie Game!\n Play again?");
      if (tie == true) {
          location.reload();
      } else {
          alert("Good game. \n Remember to shake hands.");
      }
    }
  };

var cpuTurn = function(cpuSide){
  if(cpuSide == "X"){playerTurn = "O";}
  else {playerTurn = "X";}
};

});
