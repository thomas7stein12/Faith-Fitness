function openMenu() {
  document.body.classList.add("menu-open");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
}

window.addEventListener("scroll", () => {

    const bg = document.querySelector(".hero_background img");

    const offset = window.pageYOffset;

    bg.style.transform =
    `translateY(${offset * 0.3}px) scale(1.08)`;

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".about_content, .about_image")
.forEach(el => observer.observe(el));