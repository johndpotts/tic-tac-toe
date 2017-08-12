var winningCombinations=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],
var xTiles=[],
var oTiles=[], board = document.getElementById('board'),
tileOne = document.getElementById('tile-1'),
tileTwo= document.getElementById('tile-2'),
tileThree = document.getElementById('tile-3'),
tileFour= document.getElementById('tile-4'),  
tileFive= document.getElementById('tile-5'),
tileSix= document.getElementById('tile-6'),
tileSeven= document.getElementById('tile-7'),
tileEight= document.getElementById('tile-8'),
tileNine = document.getElementById('tile-9');
/*board.onclick=xTurn();
function xTurn(){*/
tileOne.onclick=function(){tileOne.innerHTML="X"; xTiles.push(1);}
tileTwo.onclick=function(){tileTwo.innerHTML="X";xTiles.push(2);}
tileThree.onclick=function(){tileThree.innerHTML="X";xTiles.push(3);}
tileFour.onclick=function(){tileFour.innerHTML="X";xTiles.push(4);}
tileFive.onclick=function(){tileFive.innerHTML="X";xTiles.push(5);}
tileSix.onclick=function(){tileSix.innerHTML="X";xTiles.push(6);}
tileSeven.onclick=function(){tileSeven.innerHTML="X";xTiles.push(7);}
tileEight.onclick=function(){tileEight.innerHTML="X";xTiles.push(8);}
tileNine.onclick=function(){tileNine.innerHTML="X";xTiles.push(9);}

/*function oTurn(){
  tileOne.onclick=function(){tileOne.innerHTML="O";oTiles.push(1);xTurn() }
  tileTwo.onclick=function(){tileTwo.innerHTML="O";oTiles.push(2);xTurn()}
  tileThree.onclick=function(){tileThree.innerHTML="O";oTiles.push(3);xTurn()}
  tileFour.onclick=function(){tileFour.innerHTML="O";oTiles.push(4);xTurn()}
  tileFive.onclick=function(){tileFive.innerHTML="O";oTiles.push(5);xTurn()}
  tileSix.onclick=function(){tileSix.innerHTML="O";oTiles.push(6);xTurn()}
  tileSeven.onclick=function(){tileSeven.innerHTML="O";oTiles.push(7);xTurn()}
  tileEight.onclick=function(){tileEight.innerHTML="O";oTiles.push(8);xTurn()}
  tileNine.onclick=function(){tileNine.innerHTML="O";oTiles.push(9);xTurn()}
}*/


function didTheyWin(){
if xTiles includes []
else if oTiles*/
