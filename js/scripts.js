$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();
var frontBack = $("input:radio[name=frontback]:checked").val();


if (frontBack === "front"){
  $("#design").show();
  $("#function").hide();
  $("#job").hide();
  $("#large").hide();
  $("#medium").hide();
  $("#small").hide();
  $("#freelance").hide();

}
else if (frontBack === "back"){
  $("#design").hide();
  $("#function").show();
  $("#job").show();
  $("#large").show();
  $("#medium").show();
  $("#small").show();
  $("#freelance").show();
}

var coSize = $("#coSize").val();

if (coSize === "1"){
  $("#large").show();
  $("#medium").hide();
  $("#small").hide();
  $("#freelance").hide();
}
else if (coSize === "2"){
  $("#large").hide();
  $("#medium").show();
  $("#small").hide();
  $("#freelance").hide();
}
else if (coSize === "3"){
  $("#large").hide();
  $("#medium").hide();
  $("#small").show();
  $("#freelance").hide();

}
else if (coSize === "4"){
  $("#large").hide();
  $("#medium").hide();
  $("#small").hide();
  $("#freelance").show();
}

else if (coSize === "5"){
  $("#large").hide();
  $("#medium").hide();
  $("#small").hide();
  $("#freelance").hide();
}

})
});
