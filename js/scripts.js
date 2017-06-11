$(document).ready(function() {

  var age = prompt("What is your age?")

  if (age >= 18) {
    $(".over-18").show();
  }else{
    $(".under-18").show();
  };
});
