function conversion() {
  var tempcelcius = document.getElementById("inputField").value;
  var tempfahrenheit = tempcelcius * (9 / 5) + 32;
  document.getElementById("outputField").value = tempfahrenheit;
  var greeting = tempcelcius + " * (9/5) + 32 = " + tempfahrenheit;
  document.getElementById("methodField").value = greeting;

  updateThermometers(tempcelcius, tempfahrenheit);
}

function reverse() {
  var tempfahrenheit = document.getElementById("inputField").value;
  var tempcelcius = (tempfahrenheit - 32) * (5 / 9);
  document.getElementById("outputField").value = tempcelcius;
  var greeting = tempfahrenheit + " - 32 * (5/9) = " + tempcelcius;
  document.getElementById("methodField").value = greeting;

  updateThermometers(tempcelcius, tempfahrenheit);
}

function reset() {
  document.getElementById("inputField").value = "";
  document.getElementById("outputField").value = "";
  document.getElementById("methodField").value = "";
  document.getElementById("celsius-thermometer").style.height = "0px";
  document.getElementById("fahrenheit-thermometer").style.height = "0px";

  document.getElementById("celsius-thermometer").style.height = "0px";
  document.getElementById("fahrenheit-thermometer").style.height = "0px";

  document.getElementById("celsius-value").textContent = "0 °C";
  document.getElementById("fahrenheit-value").textContent = "32 °F";
}

function updateThermometers(celsius, fahrenheit) {
  const celsiusHeight = Math.min(Math.max(celsius, -100), 100) * 2;
  const fahrenheitHeight = Math.min(Math.max(fahrenheit, -148, 212), 212) * 0.5;

  document.getElementById("celsius-thermometer").style.height = `${celsiusHeight}px`;
  document.getElementById("fahrenheit-thermometer").style.height = `${fahrenheitHeight}px`;

  document.getElementById("celsius-value").textContent = `${Math.round(celsius)} °C`;
  document.getElementById("fahrenheit-value").textContent = `${Math.round(fahrenheit)} °F`;
}
