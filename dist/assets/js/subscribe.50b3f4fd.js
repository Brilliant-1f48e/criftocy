(()=>{"use strict";const e=document.querySelector(".form-subscribe");if(e){const t=e.querySelector(".form-subscribe__input"),r=e.querySelector(".form-subscribe__button");""===t.value&&r.setAttribute("disabled",!0),t.addEventListener("input",(e=>{const t=e.target.value;console.log(t),""===t&&t.length<10||-1===t.indexOf("@")?r.setAttribute("disabled",!0):r.removeAttribute("disabled")}))}})();