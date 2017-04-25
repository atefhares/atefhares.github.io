$(document).ready(function() {
  $("#questiondiv").removeClass("hidden")
  $("#contact").removeClass("hidden");
  $("#noscript").addClass("hidden");
  
  var num1;
  var num2;
  var correct;
  var answer;

  showMath();


  function showMath() {
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);
    correct = num1 + num2;
    //Populate our question paragraph
    $("#question").html("The result of " + num1 + " + " + num2 + " is:");
  }

  //Accept form input
  $("#contact").submit(function(event) {
    answer = $("#answer").val();
    if (answer == correct) {
      $("#contact").addClass("hidden")
      $("#sent").removeClass("hidden")
    } else {
      //Result is not a number. Alert the user.
      event.preventDefault();
      $("#wronganswer").removeClass("hidden")
      setTimeout(function() {
        $("#wronganswer").addClass("hidden")
      }, 2000);
      showMath();
    }
  });

});
