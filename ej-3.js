// Lista de temperaturas
let celsiusTemperatures = [0, 20, 33, 40, 100];
let fahrenheitTemperatures = celsiusTemperatures.map(temp => (temp * 9/5) + 32);

console.log("Celsius:", celsiusTemperatures, "=> Fahrenheit:", fahrenheitTemperatures);
