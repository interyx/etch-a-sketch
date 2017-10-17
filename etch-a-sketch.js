window.onload = function() {
  let htmlStyles = window.getComputedStyle(document.querySelector("html"));
  let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));

  for(var i = 0; i < rowNum; i++) {
    for(var j = 0; j < rowNum; j++) {
      $("<div>", {class: "cell"}).appendTo("#wrapper");
    }
  }

  $(".cell").hover(function() {
    $(this).addClass("pressed");
  });
}


/**
window.onload = function() {
  $("<div>", {class: "cell"}).appendTo("#wrapper");
}**/
