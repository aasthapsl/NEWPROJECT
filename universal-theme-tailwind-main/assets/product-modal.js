customElements.get("product-modal")||customElements.define("product-modal",class extends ModalDialog{constructor(){super()}hide(){super.hide()}show(e){super.show(e),this.showActiveMedia()}showActiveMedia(){this.querySelectorAll(`[data-media-id]:not([data-media-id="${this.openedBy.getAttribute("data-media-id")}"])`).forEach(e=>{e.classList.remove("active")});const e=this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`);var t=e.querySelector("template");const o=t?t.content:null,d=(e.classList.add("active"),e.scrollIntoView(),this.querySelector('[role="document"]'));d.scrollLeft=(e.width-d.clientWidth)/2,"DEFERRED-MEDIA"==e.nodeName&&o&&o.querySelector(".js-youtube")&&e.loadContent()}});