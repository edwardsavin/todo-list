(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(81),r=n.n(o),s=n(645),a=n.n(s),i=n(667),l=n.n(i),c=new URL(n(630),n.b),d=a()(r()),u=l()(c);d.push([e.id,':root {\n  --clr-primary-400: hsl(210, 11%, 15%);\n\n  --clr-neutral-100: hsl(210, 17%, 98%);\n  --clr-neutral-400: hsl(210, 17%, 93%);\n\n  --clr-accent-400: hsl(210, 10%, 23%);\n  --clr-accent-700: hsl(180, 75%, 28%);\n\n  --ff-primary: "Space Grotesk", -apple-system, BlinkMacSystemFont, avenir next,\n    avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto,\n    arial, sans-serif;\n\n  --ff-body: var(--ff-primary);\n  --ff-heading: var(--ff-primary);\n\n  --fw-light: 300;\n  --fw-regular: 400;\n  --fw-bold: 700;\n\n  --fs-200: 0.5rem;\n  --fs-300: 0.75rem;\n  --fs-350: 0.875rem;\n  --fs-400: 1rem;\n  --fs-500: 1.25rem;\n  --fs-600: 1.5rem;\n  --fs-650: 1.6rem;\n  --fs-700: 1.75rem;\n  --fs-800: 2rem;\n  --fs-900: 2.25rem;\n  --fs-1000: 2.5rem;\n  --fs-1100: 2.75rem;\n  --fs-1200: 3rem;\n  --fs-1600: 4rem;\n}\n\n@font-face {\n  font-family: "Space Grotesk";\n  src: url('+u+') format("truetype");\n}\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role="list"],\nol[role="list"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\nhtml,\nbody {\n  height: 100%;\n  background-color: var(--clr-neutral-400);\n}\n\n/* Set core body defaults */\nbody {\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don\'t have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture,\nsvg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n.text-input {\n  border: none;\n  background-color: white;\n  resize: none;\n  outline: none;\n}\n\n.selected-list {\n  color: var(--clr-accent-700);\n}',""]);const m=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var s={},a=[],i=0;i<e.length;i++){var l=e[i],c=o.base?l[0]+o.base:l[0],d=s[c]||0,u="".concat(c," ").concat(d);s[c]=d+1;var m=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var s=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var i=n(s[a]);t[i].references--}for(var l=o(e,r),c=0;c<s.length;c++){var d=n(s[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},630:(e,t,n)=>{e.exports=n.p+"1036357b9651eff7d3dd.ttf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={id:o,exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),s=n(569),a=n.n(s),i=n(565),l=n.n(i),c=n(216),d=n.n(c),u=n(589),m=n.n(u),p=n(426),f={};f.styleTagTransform=m(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;let h={},v={};const y=e=>{let t=b(e);if(null!==e&&!1===t){let t=e.replace(/  +/g," ").replaceAll(" ","-");v[t]=((e,t={})=>({title:e,todos:t}))(t),A(e)}},b=e=>{let t=!1;return Object.keys(v).forEach((n=>{n.toString().toLowerCase()===e.toString().toLowerCase()&&(t=!0,alert("A list with this name exists already"))})),t},g=(e,t,n=!0)=>{n&&(delete e.todos[t],M(t,!0))},x=(e,t=!0)=>{if(t)for(let t in v[e].todos)g(v[e],t)},C=(e,t=!0)=>{t&&(x(e,!0),delete v[e],T(e))},E=(e,t)=>{e.todos[t.title]=t};document.querySelector("#my-lists-container-header-add-list").addEventListener("click",(()=>{const e=document.querySelector(".my-lists-container");if(!document.querySelector("#my-lists-create-modal")){const t=document.createElement("div");t.setAttribute("id","my-lists-create-modal"),t.classList.add("modal");const n=document.createElement("div");n.classList.add("modal-title"),n.textContent="CREATE A LIST";const o=document.createElement("input");o.setAttribute("id","my-lists-create-modal-text-input"),o.classList.add("text-input");const r=document.createElement("button");r.textContent="CREATE",r.setAttribute("id","button-modal-create"),r.classList.add("button"),r.classList.add("button-modal-create-list");const s=document.createElement("button");s.textContent="CANCEL",s.setAttribute("id","button-modal-cancel"),s.classList.add("button"),s.classList.add("button-modal-create-list"),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(s),e.appendChild(t);const a=()=>{let n=o.value.trim();""!==n&&(y(n),o.value=null,e.removeChild(t))},i=()=>{o.value=null,e.removeChild(t)};r.addEventListener("click",a),s.addEventListener("click",i)}}));const w=document.querySelector("#my-lists-container-lists"),L=document.querySelector(".list-extended-view"),S=()=>{const e=document.querySelector(".list-extended-view-todos");e&&e.remove()},k=()=>{const e=document.querySelector(".list-tool-bar");e&&e.remove()},A=e=>{const t=document.getElementById("my-lists-container-lists").childNodes;let n=!1,o="",r="";if(Object.keys(v).forEach((s=>{o=`list-${s}`.toLowerCase(),r=e.toLowerCase().charAt(0).toUpperCase()+e.slice(1),t.forEach((e=>{n=e.id.toString()===o}))})),!n){let e=document.createElement("li");e.setAttribute("id",o),e.textContent=r,e.addEventListener("click",(()=>{N(o),(e=>{k();const t=document.createElement("div");t.classList.add("list-tool-bar");const n=document.createElement("div");n.classList.add("list-tool-bar-title"),n.textContent=e;const o=document.createElement("button");o.setAttribute("type","button"),o.id="list-tool-bar-clear-todos",o.textContent="X",o.addEventListener("click",(()=>{confirm("This action is irreversible, are you sure you want to clear all the todos in "+e+"?")&&(x(e),((e,t=!0)=>{if(!0===t)document.querySelectorAll(".extended-todo-wrapper").forEach((e=>{e&&e.remove()}));else{const t=document.querySelector(`#extended-todo-button-${e}`).parentElement;t&&t.remove()}})())}));const r=document.createElement("button");r.setAttribute("type","button"),r.id="list-tool-bar-delete-list",r.textContent="#",r.addEventListener("click",(()=>{confirm("This action is irreversible, are you sure you want to delete "+e+"?")&&(C(e),t.remove(),S())})),t.appendChild(n),t.appendChild(o),t.appendChild(r),document.querySelector(".list-extended-view").appendChild(t)})(r),(e=>{S();const t=document.createElement("section");t.classList.add("list-extended-view-todos"),t.textContent=`${e} EXTENDED TEST`,Object.keys(v[e].todos).forEach((e=>{const n=document.createElement("div");n.classList.add("extended-todo-wrapper");const o=document.createElement("button");o.classList.add("extended-todo-button"),o.id=`extended-todo-button-${e}`,o.textContent="O";const r=document.createElement("div");r.classList.add("extended-todo-main-content");const s=document.createElement("div");s.classList.add("extended-todo-main-title"),s.textContent=e;const a=document.createElement("div");a.classList.add("extended-todo-main-date"),r.appendChild(s),r.appendChild(a),n.appendChild(o),n.appendChild(r),t.appendChild(n)})),L.appendChild(t)})(r)})),w.appendChild(e)}},T=e=>{const t=document.getElementById(`list-${e}`.toLowerCase());t.parentElement.removeChild(t)},q=()=>{Object.keys(v).forEach((e=>{const t=Object.keys(v[e].todos).length,n=I(t),o=document.querySelector(`#list-${e.toLowerCase()}`);if(!o)return;const r=o.querySelector(".todos-number");r?r.textContent=t:o.appendChild(n)}))},I=e=>{const t=document.createElement("div");return t.classList.add("todos-number"),t.textContent=`${e}`,0===e&&(t.style.display="none"),t},N=e=>{const t=document.getElementById(e);document.querySelectorAll("#my-lists-container-lists li").forEach((e=>{e.classList.remove("selected-list")})),t&&t.classList.add("selected-list")},j=(e,t,n,o,r,s,a)=>{null!==e&&(h[e]=((e,t,n,o,r,s,a={})=>({title:e,description:t,checkBox:n,dueDate:o,priority:r,notes:s,subtasks:a}))(e,t,n,o,r,s,a))},M=(e,t=!0)=>{t&&(delete h[e],q())};let $={userId:"0",userName:"Enter Name"};const O=document.querySelector("#user-name");O.textContent=$.userName,O.onblur=()=>{(function(e,t){e.userName=t})($,O.value)},y("Personal"),y("Work"),y("Grocery List"),j("test"),j("test2"),j("test3"),j("test4"),j("test5"),j("test6"),E(v.Personal,h.test),E(v.Personal,h.test2),E(v["Grocery-List"],h.test5),E(v.Work,h.test3),E(v["Grocery-List"],h.test4),E(v["Grocery-List"],h.test6),q(),C("Grocery-List")})()})();