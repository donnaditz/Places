//business logic
function Location(place, landmark, season, restaurant) {
    this.place = place;
    this.landmark = landmark;
    this.season = season;
    this.restaurant = restaurant;
}
Location.prototype.newPlace = function() {
  return this.place;
}

// user interface logic
$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

var inputtedPlace = $("#new-place").val();
var inputtedLandmark = $("#new-landmark").val();
var inputtedSeason = $("#new-season").val();
var inputtedRestaurant = $("#new-restaurant").val();

var newPlace = new Location(inputtedPlace, inputtedLandmark, inputtedSeason, inputtedRestaurant);

$("ul#locations").append("<li><span class='location'>" + newPlace.place + "</span></li>");

$(".location").last().click(function() {
  $("#show-location").show();
  $("#show-location h2").text(newPlace.place);
  // $(".Place").text(newPlace.place);
  $(".Landmark").text(newPlace.landmark);
  $(".Season").text(newPlace.season);
  $(".Restaurant").text(newPlace.restaurant);
});

  $("input#new-place").val("");
  $("input#new-landmark").val("");
  $("input#new-season").val("");
  $("input#new-restaurant").val("");

  });

});
