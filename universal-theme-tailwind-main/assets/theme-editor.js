document.addEventListener("shopify:block:select",function(t){if(t.target.classList.contains("slideshow__slide")){const e=t.target.closest("slideshow-component");e.pause(),setTimeout(function(){e.slider.scrollTo({left:t.target.offsetLeft})},200)}}),document.addEventListener("shopify:block:deselect",function(t){if(t.target.classList.contains("slideshow__slide")){const e=t.target.closest("slideshow-component");e.autoplayButtonIsSetToPlay&&e.play()}});