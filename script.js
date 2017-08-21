$( document ).ready(function() {
  var winningCombinations=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],
 xTiles=[], oTiles=[];

 ymz.jq_confirm({
   title:"Choose a Team",
   text:"Choose- X's or O's",
   yes_btn:"X's",
   no_btn:"O's",
   yes_fn:function(){alert("Team X");},
   no_fn:function(){alert("Team O");}
 });


$("#tile-1").click(function(){
$("#tile-1").append("X");
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








});
