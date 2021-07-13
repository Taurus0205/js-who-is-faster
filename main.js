var foot = 3.6;
var bike = 20.1;
var car = 70;
var plane = 800;

var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".input");
var elFoot = document.querySelector(".foot-cal");
var elBike = document.querySelector(".bike-cal");
var elCar = document.querySelector(".car-cal");
var elPlane = document.querySelector(".plane-cal");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  elFoot.textContent = (elInput.value / foot).toFixed(2);
  elBike.textContent = (elInput.value / bike).toFixed(2);
  elCar.textContent = (elInput.value / car).toFixed(2);
  elPlane.textContent = (elInput.value / plane).toFixed(2);
});
