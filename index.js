function $(selector) {
    return document.querySelector(selector);
}

const underConstructionText = $(".under-construction");
const socials = $(".socials");

setTimeout(() => {
    underConstructionText.style.animation = "inherit";
    underConstructionText.style.border = "none";

    setTimeout(() => {
        socials.style.opacity = "1";
        socials.style.transform = "translateY(0)";
    }, 300);
}, 3500);
