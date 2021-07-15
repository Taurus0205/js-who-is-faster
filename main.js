var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".input");
var elFoot = document.querySelector(".foot-cal");
var elBike = document.querySelector(".bike-cal");
var elCar = document.querySelector(".car-cal");
var elPlane = document.querySelector(".plane-cal");

// speed
var foot = 3.6;
var bike = 20.1;
var car = 70;
var plane = 800;

function calcTime(distance, speed) {
  var hour = Math.floor(distance / speed);
  var minute = Math.floor((distance / speed - hour) * 60);
  var second = Math.floor(((distance / speed - hour) * 60 - minute) * 60);
  return hour + "soat " + minute + "min " + second + "sec ";
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var distanceInput = Number(elInput.value.trim());
  console.log(distanceInput);

  if (distanceInput <= 0 || isNaN(distanceInput)) {
    elInput.classList.add("input-alert");
    elInput.value = "Xato";
    return;
  } else {
    elInput.classList.remove("input-alert");
  }

  elFoot.textContent = calcTime(distanceInput, foot);
  elBike.textContent = calcTime(distanceInput, bike);
  elCar.textContent = calcTime(distanceInput, car);
  elPlane.textContent = calcTime(distanceInput, plane);
});
