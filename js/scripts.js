$(document).ready(function(){
  $("form #survey").submit(function(event){
    event.preventDefault();
var frontback = $("input:radio[name=frontback]:checked").val();

if (frontback === "front"){
  $("#design").show();
}
else if(frontback === "back"){
  $("#function").show();
}
});


var cosize = $("cosize").val();

if (cosize === "1"){
  $("#large").show();
}
else if (cosize === "2"){
  $("#medium").show();
}
else if (cosize === "3"){
  $("#small").show();
}
else if (cosize === "4"){
  $("#freelance").show();{

});
