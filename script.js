window.addEventListener("load", () => {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");
  
    loading.classList.add("fade-out");
  
    setTimeout(() => {
      loading.style.display = "none";
      content.style.display = "block";
    }, 1000);
  });

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