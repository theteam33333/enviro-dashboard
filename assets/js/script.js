


































































































// Colin -------------------------------------------------------------------------------------------//
// THE JAVASCRIPT CODE FOR THE SEARCH INPUT FORM STARTS HERE-------------------------------------------------------------------------------------------//
$(document).ready(function(){
  $(".default_option").click(function(){
    $(".dropdown ul").addClass("active");
  });
  $(".dropdown ul li").click(function(){
    var text = $(this).text();
    $(".default_option").text(text);
    $(".dropdown ul").removeClass("active");
  });
});

     
  


  // Colin -------------------------------------------------------------------------------------------//
//  THE JAVASCRIPT CODE FOR THE SEARCH INPUT FORM ENDS -------------------------------------------------------------------------------------------//