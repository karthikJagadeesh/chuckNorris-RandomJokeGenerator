var quotes = "";
$(document).on("ready", function() {

  $.ajax({
    url: "http://api.icndb.com/jokes/random/",
    dataType: "jsonp",
    success: function(jokes) {
      quotes = jokes.value.joke;
      $(".quote").html("<i class='fa fa-quote-left fa-3x fa-pull-left'></i>" + jokes.value.joke + "<br>");
    }
  });

  $(".getQuote").on("click", function() {
    $.ajax({
      url: "http://api.icndb.com/jokes/random/",
      dataType: "jsonp",
      success: function(jokes) {
        quotes = jokes.value.joke;
        $(".quote").html("<i class='fa fa-quote-left fa-3x fa-pull-left'></i>" + jokes.value.joke + "<br>");
      }
    });
  });
  $(".getQuote").on("mouseup touchcancel touchend", function() {
    $(this).blur();
  });
  $(".callTwitter").on("click", function() {
    quotes = quotes.replace(/&quot;/g, '"')
    window.open("https://twitter.com/intent/tweet?text=" + quotes + " %23chucknorris");
  });

});
