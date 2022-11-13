/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
async function getWeather(city, units) {
    try {
        let weatherData = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40019a14b452f826a2ed0fe97af7d6c3&units=${units}`
        );
        weatherData = await weatherData.json();
        let weather = {
          temperature: weatherData.main.temp,
          name: weatherData.name,
          weather: weatherData.weather[0].description,
          country: weatherData.sys.country,
          wind: weatherData.wind.speed,
        };
        return weather;
    } 
    catch (error) {
        throw new Error("not a city!");
    }

}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather.js */ "./src/getWeather.js");


const changeWeatherDisplay = (weather) => {
  let windMeasurement;
  if (currentDegrees == "imperial") {
    windMeasurement = "mph";
  } 
  else if (currentDegrees == "metric") {
    windMeasurement = "kph";
  }
  const location = document.getElementById("weather-info-location");
  location.innerText = `${weather.name}, ${weather.country}`;

  const temperature = document.getElementById("weather-info-temperature");
  temperature.innerText = Math.round(weather.temperature) + "°F";

  const sky = document.getElementById("weather-info-sky");
  sky.innerText = weather.weather;

  const wind = document.getElementById("weather-info-wind");
  wind.innerText = `${weather.wind} ${windMeasurement}`;
};

const weatherSubmitted = () => {
  (0,_getWeather_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(input.value, currentDegrees)
    .then(changeWeatherDisplay)
    .catch((x) => alert(x));
  input.value = "";
};

let currentDegrees = "imperial";
(0,_getWeather_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)("riverton", currentDegrees)
  .then(changeWeatherDisplay)
  .catch((x) => alert(x));

const input = document.getElementById("input-field");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    weatherSubmitted();
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBLCtEQUErRCxLQUFLLGdEQUFnRCxNQUFNO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ042Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGFBQWEsSUFBSSxnQkFBZ0I7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixjQUFjLEVBQUUsZ0JBQWdCO0FBQ3REOztBQUVBO0FBQ0EsRUFBRSwwREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvZ2V0V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5LCB1bml0cykge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9NDAwMTlhMTRiNDUyZjgyNmEyZWQwZmU5N2FmN2Q2YzMmdW5pdHM9JHt1bml0c31gXG4gICAgICAgICk7XG4gICAgICAgIHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlckRhdGEuanNvbigpO1xuICAgICAgICBsZXQgd2VhdGhlciA9IHtcbiAgICAgICAgICB0ZW1wZXJhdHVyZTogd2VhdGhlckRhdGEubWFpbi50ZW1wLFxuICAgICAgICAgIG5hbWU6IHdlYXRoZXJEYXRhLm5hbWUsXG4gICAgICAgICAgd2VhdGhlcjogd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgICBjb3VudHJ5OiB3ZWF0aGVyRGF0YS5zeXMuY291bnRyeSxcbiAgICAgICAgICB3aW5kOiB3ZWF0aGVyRGF0YS53aW5kLnNwZWVkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gd2VhdGhlcjtcbiAgICB9IFxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3QgYSBjaXR5IVwiKTtcbiAgICB9XG5cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL2dldFdlYXRoZXIuanNcIjtcblxuY29uc3QgY2hhbmdlV2VhdGhlckRpc3BsYXkgPSAod2VhdGhlcikgPT4ge1xuICBsZXQgd2luZE1lYXN1cmVtZW50O1xuICBpZiAoY3VycmVudERlZ3JlZXMgPT0gXCJpbXBlcmlhbFwiKSB7XG4gICAgd2luZE1lYXN1cmVtZW50ID0gXCJtcGhcIjtcbiAgfSBcbiAgZWxzZSBpZiAoY3VycmVudERlZ3JlZXMgPT0gXCJtZXRyaWNcIikge1xuICAgIHdpbmRNZWFzdXJlbWVudCA9IFwia3BoXCI7XG4gIH1cbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItaW5mby1sb2NhdGlvblwiKTtcbiAgbG9jYXRpb24uaW5uZXJUZXh0ID0gYCR7d2VhdGhlci5uYW1lfSwgJHt3ZWF0aGVyLmNvdW50cnl9YDtcblxuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pbmZvLXRlbXBlcmF0dXJlXCIpO1xuICB0ZW1wZXJhdHVyZS5pbm5lclRleHQgPSBNYXRoLnJvdW5kKHdlYXRoZXIudGVtcGVyYXR1cmUpICsgXCLCsEZcIjtcblxuICBjb25zdCBza3kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItaW5mby1za3lcIik7XG4gIHNreS5pbm5lclRleHQgPSB3ZWF0aGVyLndlYXRoZXI7XG5cbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pbmZvLXdpbmRcIik7XG4gIHdpbmQuaW5uZXJUZXh0ID0gYCR7d2VhdGhlci53aW5kfSAke3dpbmRNZWFzdXJlbWVudH1gO1xufTtcblxuY29uc3Qgd2VhdGhlclN1Ym1pdHRlZCA9ICgpID0+IHtcbiAgZ2V0V2VhdGhlcihpbnB1dC52YWx1ZSwgY3VycmVudERlZ3JlZXMpXG4gICAgLnRoZW4oY2hhbmdlV2VhdGhlckRpc3BsYXkpXG4gICAgLmNhdGNoKCh4KSA9PiBhbGVydCh4KSk7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbn07XG5cbmxldCBjdXJyZW50RGVncmVlcyA9IFwiaW1wZXJpYWxcIjtcbmdldFdlYXRoZXIoXCJyaXZlcnRvblwiLCBjdXJyZW50RGVncmVlcylcbiAgLnRoZW4oY2hhbmdlV2VhdGhlckRpc3BsYXkpXG4gIC5jYXRjaCgoeCkgPT4gYWxlcnQoeCkpO1xuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGRcIik7XG5cbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIHdlYXRoZXJTdWJtaXR0ZWQoKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=