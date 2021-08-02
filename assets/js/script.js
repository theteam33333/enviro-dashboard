// fetch ("https://api.climateclock.world/v1/clock") 
fetch ("https://content.guardianapis.com/search?q=climate%20change&api-key=2b864c12-3fa4-4b07-a5fa-72ff409c8dc3")

  .then (function(res) {
    return res.json();
  })

  .then (function(data) {
    console.log(data);
    var climateClockEl = document.querySelector('.climateClock');
    var webTitle = (data.response.results[0].webTitle);
    var webUrl = (data.response.results[0].webUrl);
    var buttonEl = document.createElement("button");
    var aEl = document.createElement("a");
    aEl.href=webUrl;
    aEl.innerHTML=webTitle;
    console.log(aEl);
    //buttonEl.textContent = aEl;
    climateClockEl.appendChild(aEl);
  });


































































































// Colin -------------------------------------------------------------------------------------------//
// THE JAVASCRIPT CODE FOR THE SEARCH INPUT FORM STARTS HERE-------------------------------------------------------------------------------------------//

$(".default_option").click(function(){
    $(".dropdown ul").addClass("active");
  });
  
  $(".dropdown ul li").click(function(){
    var text = $(this).text();
    $(".default_option").text(text);
    $(".dropdown ul").removeClass("active");
  });



  // Colin -------------------------------------------------------------------------------------------//
//  THE JAVASCRIPT CODE FOR THE SEARCH INPUT FORM ENDS -------------------------------------------------------------------------------------------//