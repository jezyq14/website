function $(selector) {
  return document.querySelector(selector);
}

const underConstructionText = $(".under-construction"); 

setTimeout(() => {
    underConstructionText.style.animation = "inherit";
    underConstructionText.style.border = "none";
}, 3500)