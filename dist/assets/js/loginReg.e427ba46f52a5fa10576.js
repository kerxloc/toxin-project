!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=10)}({10:function(e,t,r){"use strict";function i(){var e=document.querySelector(".email-box__indicator");n.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)?(e.classList.add("email-box__indicator_valid"),e.classList.remove("email-box__indicator_invalid")):(e.classList.add("email-box__indicator_invalid"),e.classList.remove("email-box__indicator_valid")),""==n.value&&(e.classList.remove("email-box__indicator_invalid"),e.classList.remove("email-box__indicator_valid"))}r.r(t);var n=document.querySelector(".email-box__email");n.addEventListener("input",i),document.querySelector("#reg-email").addEventListener("input",i)}});