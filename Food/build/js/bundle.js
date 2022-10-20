(()=>{"use strict";window.addEventListener("DOMContentLoaded",(function(){(function(){const e=document.querySelector(".calculating__result > span");let t,n,o,s="female",c=1.375;function l(){e.textContent=s&&t&&n&&o&&c?"female"===s?Math.round((447.6+9.2*n+3.1*t-4.3*o)*c):Math.round((88.3+13.4*n+4.8*t-5.7*o)*c):"___"}function r(e,t){const n=document.querySelectorAll(`${e} div`);document.querySelector(e).addEventListener("click",(function(e){"coef-block"!==e.target.id&&"gender"!==e.target.id&&(e.target.getAttribute("data-coef")?c=+e.target.getAttribute("data-coef"):s=e.target.id,console.log(c,s),n.forEach((e=>{e.classList.remove(t)})),e.target.classList.add(t),l())}))}function a(e){const s=document.querySelector(e);s.addEventListener("input",(function(){switch(s.value.match(/\D/g)?s.style.boxShadow="0 4px 15px red":s.style.boxShadow="0 4px 15px green",""!==s.value&&void 0!==s.value||(s.style.boxShadow="0 4px 15px rgb(0 0 0 / 20%)"),this.id){case"height":t=+this.value,console.log(t);break;case"weight":n=+this.value,console.log(n);break;case"age":o=+this.value,console.log(o);break;default:console.log("Something went wrong")}l()}))}l(),r("#gender","calculating__choose-item_active"),r("#coef-block","calculating__choose-item_active"),a("#height"),a("#weight"),a("#age")})(),axios.get("db.json").then((e=>{let t=e.data;console.log(t);let n="";for(let e in t)n+=`<div class="menu__item">\n                \n                    <img src="${t[e].img}" alt="${t[e].alt}">\n                    <h3 class="menu__item-subtitle">${t[e].title}</h3>\n                    <div class="menu__item-descr">\n                    <p>${t[e].descr}</p>\n                    </div>\n                    <div class="menu__item-divider"></div>\n                    <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:<b>${t[e].price}</b></div>\n                    <div class="menu__item-total"><span></span> грн/день</div>\n                    </div>\n                \n                </div>`;document.querySelector(".menu-container").innerHTML=n})).catch((e=>{console.error(e)})),function(){const e=document.querySelectorAll("[data-modal]"),t=document.querySelector(".modal");function n(){css(t,{cssText:"display: block"}),css(document.querySelector("html"),{cssText:"overflow: hidden"})}document.querySelectorAll("[data-close]"),e.forEach((e=>{e.addEventListener("click",n)})),document.querySelector(".modal").addEventListener("click",(function(e){(e.target.dataset.close||targetHasClass(e.target,"modal"))&&(css(this,{cssText:"display:none"}),css(document.querySelector("html"),{cssText:"overflow: unset"}))}));function o(e){const o=document.querySelector(".modal__dialog");o.classList.add("hide"),n();const s=document.createElement("div");s.classList.add(".modal__dialog"),s.innerHTML=`\n\n              <div class="modal__content">\n              \n                <div class="modal__close data-close"></div>\n                <div class="modal__title">${e}</div>\n              \n              </div>\n\n            `,document.querySelector(".modal").append(s),setTimeout((()=>{s.remove(),o.classList.add("show"),o.classList.remove("hide"),t.style.display="none",css(document.querySelector("html"),{cssText:"overflow: unset"})}),4e3)}document.querySelectorAll("form").forEach((e=>{var t;(t=e).addEventListener("submit",(function(e){e.preventDefault();const n=document.createElement("img");n.src="icons/spinner.svg",n.style.cssText="display: block; margin: 0 auto",t.append(n);try{const e=new XMLHttpRequest;e.open("POST","handler.php");const s=new FormData(t);e.send(s),e.responseType="json",e.addEventListener("load",(function(){200===e.status?(console.log(e.response),o("Данные пришли! С вами свяжемся"),t.reset(),n.remove()):(console.log(new Error("Failed POST Request "+e.statusText)),o("Что-то пошло не так..."),n.remove(),t.reset())}))}catch(e){console.log(e)}}))}))}(),function(){const e=document.querySelectorAll(".offer__slide"),t=document.querySelector(".offer__slider-prev"),n=document.querySelector(".offer__slider-next"),o=document.querySelector("#total"),s=document.querySelector("#current"),c=document.querySelector(".offer__slider-wrapper"),l=document.querySelector(".offer__slider-inner"),r=window.getComputedStyle(c).width;let a=1,i=0;e.length<10?(o.textContent=`0${e.length}`,s.textContent=`0${a}`):(o.textContent=e.length,s.textContent=a),l.style.cssText=`display: flex; width: ${100*e.length}%; transition: all 0.5s ease;`,e.forEach((e=>{e.style.cssText=`width: ${r}`})),c.style.cssText="overflow: hidden",n.addEventListener("click",(function(){i===parseInt(r)*(e.length-1)?i=0:i+=parseInt(r),l.style.cssText+=`transform: translateX(-${i}px)`,a===e.length?a=1:a++,e.length<10?s.textContent=`0${a}`:s.textContent=a})),t.addEventListener("click",(function(){0===i?i=parseInt(r)*(e.length-1):i-=parseInt(r),l.style.cssText+=`transform: translateX(-${i}px)`,1===a?a=e.length:a--,e.length<10?s.textContent=`0${a}`:s.textContent=a}))}(),function(){const e=[...document.querySelectorAll(".tabheader__item")],t=document.querySelectorAll(".tabcontent"),n=document.querySelector(".tabheader__items");function o(){t.forEach((e=>{e.classList.add("hide"),e.classList.remove("show")})),e.forEach((e=>{e.classList.remove("tabheader__item_active")}))}function s(n=0){t[n].classList.add("show","fade"),t[n].classList.remove("hide"),e[n].classList.add("tabheader__item_active")}o(),s(),n.addEventListener("click",(function(t){const n=t.target;n&&n.classList.contains("tabheader__item")&&e.forEach(((e,t)=>{n===e&&(o(),s(t))}))}))}(),function(){function e(e){let t,n,o,s;const c=Date.parse(e)-Date.parse(new Date);return c<=0?(t=0,n=0,o=0,s=0):(t=Math.floor(c/864e5),n=Math.floor(c/36e5%24),o=Math.floor(c/1e3/60%60),s=Math.floor(c/1e3%60)),{total:c,days:t,hours:n,minutes:o,seconds:s}}function t(e){return e>0&&e<10?`0${e}`:e}console.log(e("2022-09-23")),function({selector:n,endtime:o}){const s=document.querySelector(n),c=s.querySelector("#days"),l=s.querySelector("#hours"),r=s.querySelector("#minutes"),a=s.querySelector("#seconds"),i=setInterval(d,1e3);function d(){const n=e(o);c.innerHTML=t(n.days),l.innerHTML=t(n.hours),r.innerHTML=t(n.minutes),a.innerHTML=t(n.seconds),n.total<=0&&clearInterval(i)}d()}({selector:".timer",endtime:"2022-10-23"})}()}))})();
//# sourceMappingURL=bundle.js.map