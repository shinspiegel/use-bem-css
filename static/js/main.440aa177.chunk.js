(this["webpackJsonpuse-bem-css-example"]=this["webpackJsonpuse-bem-css-example"]||[]).push([[0],{10:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(1),r=n.n(a),s=(n(9),function(t){return t.trim().replace(/-./g,(function(t){return t.toUpperCase()[1]}))}),u=function(t){return t.trim().charAt(0).toUpperCase()+t.slice(1)},i=function(t){var e=[];return t.trim().split("").forEach((function(t,n){if(0!==n)return t.toUpperCase()===t?(e.push("-"),void e.push(t.toLowerCase())):void e.push(t);e.push(t)})),e.join("").toLocaleLowerCase().replace(/--/g,"-")},f=function(){var t=function(t){var e=t.className,n=t.blocks,o=void 0===n?[]:n,c=t.elements,a=void 0===c?[]:c,r=t.modifiers,f=void 0===r?[]:r,l={};o.forEach((function(t){var n=i(t),o=e.toLowerCase();l[o]||(l[o]=[]),l[o].push(n),a&&(null===a||void 0===a?void 0:a.length)>0&&a.forEach((function(t){var e=u(s(t.toLowerCase())),c=i(t);l["".concat(o).concat(e)]||(l["".concat(o).concat(e)]=[]),l["".concat(o).concat(e)].push("".concat(n,"__").concat(c))}))})),f&&f.length>0&&f.forEach((function(t){var n=t.modifier,o=t.isActive,c=t.affects;if(o){var a=i(n);if(!c||c.length<=0)Object.keys(l).forEach((function(t){l[t].forEach((function(e){l[t].push("".concat(e,"--").concat(a))}))}));else c.forEach((function(t){var n=t.toLowerCase();l[n]&&l[n].forEach((function(t){l[n].push("".concat(t,"--").concat(a))}));var o=e.toLowerCase(),c=u(s(t.toLowerCase())),r="".concat(o).concat(c);l[r]&&l[r].forEach((function(t){l[r].push("".concat(t,"--").concat(a))}))}))}}));var p={};return Object.keys(l).forEach((function(t){p[t]=l[t].join(" ")})),p}({className:"button",blocks:["button"],elements:["label","input","span"]}),e=t.button,n=t.buttonInput,o=t.buttonLabel,a=t.buttonSpan;return c.a.createElement("div",{className:e},c.a.createElement("label",{className:o},c.a.createElement("span",{className:a},"Label Text"),c.a.createElement("button",{type:"button",className:n},"Info")))};r.a.render(c.a.createElement(f,null),document.getElementById("root"))},2:function(t,e,n){t.exports=n(10)},9:function(t,e,n){}},[[2,1,2]]]);
//# sourceMappingURL=main.440aa177.chunk.js.map