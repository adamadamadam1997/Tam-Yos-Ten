const menuBtn = document.querySelector(".menuBtn");
const nav = document.querySelector("nav");
const iframe = document.querySelector("iframe");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    nav.classList.toggle("active");
    if (menuBtn.classList.contains("open")) {
        iframe.style.pointerEvents = 'none';
    } else {
        iframe.style.pointerEvents = "auto";
    }
});