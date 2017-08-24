

$( document ).ready(function() {
  var winningCombinations=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],
 xTiles=[], oTiles=[], tile1Checked=null, tile2Checked=null,tile3Checked=null,tile4Checked=null,
 tile5Checked=null,tile6Checked=null,tile7Checked=null,tile8Checked=null,tile9Checked=null;

 $("#board").click(function () {
     $(".game-tile").slideToggle("slow");
 });
//player turn- click tiles
/*
$("#tile-1").click(function(){
if(!tile1Checked){
  $("#tile-1").append("X");
xTiles.push(1);
tile1Checked=1;
didTheyWin(xTiles);
}

});
$("#tile-2").click(function(){
$("#tile-2").append("X");
});
$("#tile-3").click(function(){
$("#tile-3").append("X");
});
$("#tile-4").click(function(){
$("#tile-4").append("X");
});
$("#tile-5").click(function(){
$("#tile-5").append("X");
});
$("#tile-6").click(function(){
$("#tile-6").append("X");
});
$("#tile-7").click(function(){
$("#tile-7").append("X");
});
$("#tile-8").click(function(){
$("#tile-8").append("X");
});
$("#tile-9").click(function(){
$("#tile-9").append("X");
});


function didTheyWin(arg){
  for (i=0;i<winningCombinations.length;i++){
    if (arg.indexOf(winningCombinations[i][0]) >= 0 &&
   arg.indexOf(winningCombinations[i][1]) >= 0 &&
   arg.indexOf(winningCombinations[i][2]) >= 0){
      alert ("you win!");
    }
    }
    alert("nope");
  }
});*/


});
