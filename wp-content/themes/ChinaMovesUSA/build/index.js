/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _src_modules_rmMatching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/modules/rmMatching */ "./src/modules/rmMatching.js");
/* harmony import */ var _src_modules_rmMatching__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_modules_rmMatching__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_modules_genListing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/modules/genListing.js */ "./src/modules/genListing.js");
/* harmony import */ var _src_modules_genListing_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_modules_genListing_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_modules_mobile_mobile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/modules/mobile/mobile.js */ "./src/modules/mobile/mobile.js");
/* harmony import */ var _src_modules_mobile_mobile_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_modules_mobile_mobile_js__WEBPACK_IMPORTED_MODULE_3__);
// CSS
 // JS


 // Mobile



/***/ }),

/***/ "./src/modules/genListing.js":
/*!***********************************!*\
  !*** ./src/modules/genListing.js ***!
  \***********************************/
/***/ (function() {

if (window.location.pathname.includes('genlisting')) {
  console.log(' THIS IS THE PLACE');
}

/***/ }),

/***/ "./src/modules/mobile/mobile.js":
/*!**************************************!*\
  !*** ./src/modules/mobile/mobile.js ***!
  \**************************************/
/***/ (function() {

if (window.location.pathname.includes('mobile')) {
  setTimeout(() => {
    const hder = document.querySelector('#gnav');
    const fter = document.querySelector('#gfter');
    hder.style.display = 'none';
    fter.style.display = 'none';
  }, 10);
}

/***/ }),

/***/ "./src/modules/rmMatching.js":
/*!***********************************!*\
  !*** ./src/modules/rmMatching.js ***!
  \***********************************/
/***/ (function() {

if (window.location.pathname === '/roommate/') {
  window.addEventListener('DOMContentLoaded', () => {
    let currentStep = 0;
    const rmQStep = document.querySelectorAll('.rm-question-step');
    const fNBtn = document.querySelector('#rmFNBtn');
    const rmNStep = document.querySelectorAll('.rmNextBtn');
    rmNStep.forEach(ele => {
      ele.addEventListener('click', () => {
        if (currentStep < rmQStep.length - 1) {
          rmQStep[currentStep].style.display = 'none';
          currentStep++;
          rmQStep[currentStep].style.display = 'block';

          if (currentStep > 0) {
            fNBtn.style.display = 'none';
            document.querySelector('#paginationBtnBox').style.display = 'block';
          }

          if (currentStep == 15) {
            document.querySelector('#paginationBtnBox').style.display = 'none';
            document.querySelector('#rmSubmitBtn').style.display = 'block';
          }

          if (currentStep == 16) {
            document.querySelector('#paginationBtnBox').style.display = 'none';
            document.querySelector('#rmSubmitBtn').style.display = 'none';
          }
        }
      });
    });
    const rmPStep = document.querySelectorAll('.rmPreviousBtn');
    rmPStep.forEach(ele => {
      ele.addEventListener('click', () => {
        if (currentStep > 0) {
          rmQStep[currentStep].style.display = 'none';
          currentStep--;
          rmQStep[currentStep].style.display = 'block';

          if (currentStep == 0) {
            fNBtn.style.display = 'block';
            document.querySelector('#paginationBtnBox').style.display = 'none';
          }
        }
      });
    });
    const rmSubmitBtn = document.querySelector('#rmSubmitBtn');
    let roommateCheckList = [];

    const addData = dt => {
      if (!dt.value) {
        roommateCheckList.push('');
      } else {
        roommateCheckList.push(dt.value);
      }
    }; // Input Data


    const appName = document.querySelector('#rmAppName');
    const appContact = document.querySelector('#rmAppContact');
    const appDate = document.querySelector('#rmAppDate');
    const appArea = document.querySelector('#rmAppArea');
    const appBudget = document.querySelector('#rmAppBudget');
    const appSelect = document.querySelectorAll('.rm-radio-btn');
    rmSubmitBtn.addEventListener('click', () => {
      emailjs.init('user_hedHXP5BIDEBqSuAdRcOt');
      addData(appName);
      addData(appContact);
      addData(appDate);
      addData(appArea);
      addData(appBudget);
      appSelect.forEach(el => {
        if (el.checked) {
          roommateCheckList.push(el.getAttribute('data-input'));
        }
      }); // Transfer to submit form

      const submissionInputForm = document.querySelectorAll('.roommateSubmissionFormInput');

      for (k = 0; k < roommateCheckList.length; k++) {
        submissionInputForm[k].value = roommateCheckList[k];
      }

      const emailjsSubmission = document.querySelector('#roommateSubmissionForm');
      emailjs.sendForm('service_g17icyc', 'template_v3ay8bh', emailjsSubmission);
    });
  });
}

/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkchinamovesusa"] = self["webpackChunkchinamovesusa"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map