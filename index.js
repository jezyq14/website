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

    setTimeout(() => {
        $("main").style.display = "none";
        const af = $(".af");

        af.style.display = "flex";
        af.onclick = () => {
            aprilFools();
        };
    }, 2000);
}, 3500);

const aprilFools = () => {
    new Audio("audio.ogg").play();
    const body = $("body");

    body.style.background =
        "linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3)";
    body.style.backgroundSize = "1800% 1800%";
    body.style.animation = "rainbow 18s ease infinite";

    body.innerHTML = `<div class="x"><img class="y" src="rick.gif" alt="Rick Roll"></div>`;
};
