class ShowMoreButton extends HTMLElement{constructor(){super();const e=this.querySelector("button");e.addEventListener("click",e=>{this.expandShowMore(e);const t=e.target.closest(".parent-display").querySelector(".show-more-item");t&&!t.classList.contains("hidden")&&t.querySelector("input").focus()})}expandShowMore(e){const t=e.target.closest('[id^="Show-More-"]').closest(".parent-display");t.querySelector(".parent-wrap");this.querySelectorAll(".label-text").forEach(e=>e.classList.toggle("hidden")),t.querySelectorAll(".show-more-item").forEach(e=>e.classList.toggle("hidden"))}}customElements.define("show-more-button",ShowMoreButton);