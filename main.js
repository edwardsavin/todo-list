(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(81),r=n.n(o),s=n(645),a=n.n(s),i=n(667),c=n.n(i),d=new URL(n(630),n.b),l=a()(r()),u=c()(d);l.push([e.id,':root {\n  --clr-primary-400: hsl(210, 11%, 15%);\n\n  --clr-neutral-100: hsl(210, 17%, 98%);\n  --clr-neutral-400: hsl(210, 17%, 93%);\n\n  --clr-accent-400: hsl(210, 10%, 23%);\n  --clr-accent-700: hsl(180, 75%, 28%);\n\n  --ff-primary: "Space Grotesk", -apple-system, BlinkMacSystemFont, avenir next,\n    avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto,\n    arial, sans-serif;\n\n  --ff-body: var(--ff-primary);\n  --ff-heading: var(--ff-primary);\n\n  --fw-light: 300;\n  --fw-regular: 400;\n  --fw-bold: 700;\n\n  --fs-200: 0.5rem;\n  --fs-300: 0.75rem;\n  --fs-350: 0.875rem;\n  --fs-400: 1rem;\n  --fs-500: 1.25rem;\n  --fs-600: 1.5rem;\n  --fs-650: 1.6rem;\n  --fs-700: 1.75rem;\n  --fs-800: 2rem;\n  --fs-900: 2.25rem;\n  --fs-1000: 2.5rem;\n  --fs-1100: 2.75rem;\n  --fs-1200: 3rem;\n  --fs-1600: 4rem;\n}\n\n@font-face {\n  font-family: "Space Grotesk";\n  src: url('+u+') format("truetype");\n}\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role="list"],\nol[role="list"] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\nhtml,\nbody {\n  height: 100%;\n  background-color: var(--clr-neutral-400);\n}\n\n/* Set core body defaults */\nbody {\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don\'t have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture,\nsvg {\n  max-width: 100%;\n  display: block;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n.text-input {\n  border: none;\n  background-color: white;\n  resize: none;\n  outline: none;\n}\n\n.selected-list {\n  color: var(--clr-accent-700);\n}\n\n.extended-todo-wrapper:hover {\n  cursor: pointer;\n  background-color: rgba(128, 128, 128, 0.192);\n}\n\n.todo-wrapper-checked {\n  color: gray;\n  text-decoration: line-through;\n}',""]);const m=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var s={},a=[],i=0;i<e.length;i++){var c=e[i],d=o.base?c[0]+o.base:c[0],l=s[d]||0,u="".concat(d," ").concat(l);s[d]=l+1;var m=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var s=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var i=n(s[a]);t[i].references--}for(var c=o(e,r),d=0;d<s.length;d++){var l=n(s[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},630:(e,t,n)=>{e.exports=n.p+"1036357b9651eff7d3dd.ttf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={id:o,exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),s=n(569),a=n.n(s),i=n(565),c=n.n(i),d=n(216),l=n.n(d),u=n(589),m=n.n(u),p=n(426),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;let h={},v={};const y=e=>{let t=b(e);if(null!==e&&!1===t){let t=e.replace(/  +/g," ");v[t]=((e,t={})=>({title:e,todos:t}))(t),B(e)}},b=e=>{let t=!1;return Object.keys(v).forEach((n=>{n.toString().toLowerCase()===e.toString().toLowerCase()&&(t=!0,alert("A list with this name exists already"))})),t},x=(e,t)=>{let n=!1;return Object.keys(v[e].todos).forEach((e=>{e.toString().toLowerCase()===t.toString().toLowerCase()&&(n=!0)})),n},C=(e,t,n=!0)=>{n&&(delete e.todos[t],P(t,!0))},E=(e,t=!0)=>{if(t)for(let t in v[e].todos)C(v[e],t)},g=(e,t)=>{e.todos[t.title]=t};document.querySelector("#my-lists-container-header-add-list").addEventListener("click",(()=>{const e=document.querySelector(".my-lists-container");if(!document.querySelector("#my-lists-create-modal")){const t=document.createElement("div");t.setAttribute("id","my-lists-create-modal"),t.classList.add("modal");const n=document.createElement("div");n.classList.add("modal-title"),n.textContent="CREATE A LIST";const o=document.createElement("input");o.setAttribute("id","my-lists-create-modal-text-input"),o.classList.add("text-input");const r=document.createElement("button");r.textContent="CREATE",r.setAttribute("id","button-modal-create"),r.classList.add("button"),r.classList.add("button-modal-create-list");const s=document.createElement("button");s.textContent="CANCEL",s.setAttribute("id","button-modal-cancel"),s.classList.add("button"),s.classList.add("button-modal-create-list"),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(s),e.appendChild(t);const a=()=>{let n=o.value.trim();""!==n&&(y(n),o.value=null,e.removeChild(t))},i=()=>{o.value=null,e.removeChild(t)};t.addEventListener("keydown",(e=>{"Enter"===e.key&&a()})),r.addEventListener("click",a),s.addEventListener("click",i)}}));const k=document.querySelector("#my-lists-container-lists"),w=e=>e.parentElement,L=(e,t,n)=>{null!==n.parentElement&&(!0===h[e].checkBox?(n.classList.add("todo-wrapper-checked"),w(n).appendChild(n)):(n.classList.remove("todo-wrapper-checked"),S(e,t,n)))},S=(e,t,n)=>{const o=Object.keys(v[t].todos).indexOf(e);if(null!==w(n)){let e=w(n).querySelectorAll(".extended-todo-wrapper"),r=o;for(;r>0&&(e.item(r-1).classList.contains("todo-wrapper-checked")||Object.keys(v[t].todos).indexOf(e.item(r-1).querySelector(".extended-todo-main-title").textContent)>Object.keys(v[t].todos).indexOf(n.querySelector(".extended-todo-main-title").textContent));)r--;if(r>0&&!e.item(r-1).classList.contains("todo-wrapper-checked")){const o=e.item(r-1).querySelector(".extended-todo-main-title").textContent,s=n.querySelector(".extended-todo-main-title").textContent;Object.keys(v[t].todos).indexOf(o)>Object.keys(v[t].todos).indexOf(s)&&w(n).insertBefore(n,e.item(r-1))}w(n).insertBefore(n,e.item(r))}},q=document.querySelector(".list-extended-view"),A=e=>{O();const t=document.createElement("section");t.classList.add("list-extended-view-todos"),t.textContent=`${e} EXTENDED TEST`,Object.keys(v[e].todos).forEach((n=>{const o=document.createElement("div");o.classList.add("extended-todo-wrapper"),o.id=`extended-todo-main-content-${n}`;const r=document.createElement("button");r.classList.add("extended-todo-checkbox"),r.id=`extended-todo-checkbox-${n}`,r.textContent="O",r.addEventListener("click",(()=>{((e,t,n=!1)=>{const o=document.querySelector(`#extended-todo-main-content-${e}`);let r=n;!1===r&&(R(h[e]),L(e,t,o)),!0===r&&(R(h[e]),L(e,t,o))})(n,e,!1)}));const s=document.createElement("div");s.classList.add("extended-todo-main-content");const a=document.createElement("div");a.classList.add("extended-todo-main-title"),a.textContent=n;const i=document.createElement("div");i.classList.add("extended-todo-main-date"),i.textContent=h[n].dueDate,s.appendChild(a),s.appendChild(i),o.appendChild(r),o.appendChild(s),t.appendChild(o),L(n,e,o)})),q.appendChild(t)},O=()=>{const e=document.querySelector(".list-extended-view-todos");e&&e.remove()},T=(e,t,n)=>{let o=e.value.trim().replace(/  +/g," ");0!==o.length&&(!1===x(n,o)?(D(o),g(v[n],h[o])):((e,t)=>{let n=t,o=1;for(;x(e,n);)n=`${t} (${o})`,o++;D(n),g(v[e],h[n])})(n,o),I(),A(n),e.value=null,q.appendChild(t))},j=()=>{const e=document.querySelector(".list-tool-bar");e&&e.remove()},B=e=>{const t=document.getElementById("my-lists-container-lists").childNodes;let n=!1,o="",r="";if(Object.keys(v).forEach((s=>{o=`list-${s}`.toLowerCase().replaceAll(" ","-"),r=e.toLowerCase().charAt(0).toUpperCase()+e.slice(1),t.forEach((e=>{n=e.id.toString()===o}))})),!n){let e=document.createElement("li");e.setAttribute("id",o),e.textContent=r,e.addEventListener("click",(()=>{M(o),(e=>{j();const t=document.createElement("div");t.classList.add("list-tool-bar");const n=document.createElement("div");n.classList.add("list-tool-bar-title"),n.textContent=e;const o=document.createElement("button");o.setAttribute("type","button"),o.id="list-tool-bar-clear-todos",o.textContent="X",o.addEventListener("click",(()=>{confirm("This action is irreversible, are you sure you want to clear all the todos in "+e+"?")&&(E(e),((e,t=!0)=>{if(!0===t)document.querySelectorAll(".extended-todo-wrapper").forEach((e=>{e&&e.remove()}));else{const t=document.querySelector(`#extended-todo-button-${e}`).parentElement;t&&t.remove()}})())}));const r=document.createElement("button");r.setAttribute("type","button"),r.id="list-tool-bar-delete-list",r.textContent="#",r.addEventListener("click",(()=>{confirm("This action is irreversible, are you sure you want to delete "+e+"?")&&(((e,t=!0)=>{t&&(E(e,!0),delete v[e],$(e))})(e),t.remove(),O())})),t.appendChild(n),t.appendChild(o),t.appendChild(r),document.querySelector(".list-extended-view").appendChild(t)})(r),A(r),(e=>{(()=>{const e=document.querySelector(".quick-add-todo-wrapper");e&&e.remove()})();const t=document.createElement("div");t.classList.add("quick-add-todo-wrapper");const n=document.createElement("div");n.classList.add("quick-add-todo-input-wrapper");const o=document.createElement("input");o.classList.add("quick-add-todo-input"),o.placeholder="Click to quickly add a todo";const r=document.createElement("button");r.id="quick-add-todo-button",r.textContent="↑",o.addEventListener("keydown",(n=>{"Enter"===n.key&&T(o,t,e)})),r.addEventListener("click",(()=>{T(o,t,e)})),n.appendChild(o),t.appendChild(n),t.appendChild(r),q.appendChild(t)})(r)})),k.appendChild(e)}},$=e=>{const t=document.getElementById(`list-${e}`.toLowerCase());t.parentElement.removeChild(t)},I=()=>{Object.keys(v).forEach((e=>{const t=Object.keys(v[e].todos).length,n=N(t),o=e.toLowerCase().replaceAll(" ","-"),r=document.querySelector(`#list-${o}`);if(!r)return;const s=r.querySelector(".todos-number");s?s.textContent=t:r.appendChild(n)}))},N=e=>{const t=document.createElement("div");return t.classList.add("todos-number"),t.textContent=`${e}`,0===e&&(t.style.display="none"),t},M=e=>{const t=document.getElementById(e);document.querySelectorAll("#my-lists-container-lists li").forEach((e=>{e.classList.remove("selected-list")})),t&&t.classList.add("selected-list")},D=(e,t,n=!1,o,r,s,a)=>{null!==e&&(h[e]=((e,t,n,o,r,s,a={})=>({title:e,description:t,checkBox:n,dueDate:o,priority:r,notes:s,subtasks:a}))(e,t,n,o,r,s,a))},R=(e,t=!0)=>{t&&(!0===e.checkBox?e.checkBox=!1:e.checkBox=!0)},G=(e,t)=>{e.dueDate=t},P=(e,t=!0)=>{t&&(delete h[e],I())};let U={userId:"0",userName:"Enter Name"};const Z=document.querySelector("#user-name");Z.textContent=U.userName,Z.onblur=()=>{(function(e,t){e.userName=t})(U,Z.value)},y("Personal"),y("Work"),y("Grocery List"),D("test"),D("test2"),D("test3"),D("testA"),D("testB"),D("testC"),D("testD"),D("testE"),g(v.Personal,h.test),G(h.test,"23.09.4400"),g(v.Personal,h.test2),g(v.Work,h.test3),g(v["Grocery List"],h.testA),g(v["Grocery List"],h.testB),g(v["Grocery List"],h.testC),g(v["Grocery List"],h.testD),g(v["Grocery List"],h.testE),G(h.testA,"13.08.4000"),G(h.testD,"13.08.4000"),I()})()})();