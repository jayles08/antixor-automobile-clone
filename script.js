const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (events) {
    document.querySelector(".nav-link.active")?.classList.remove("active");
    this.classList.add("active");
  });
});

// when header/nav get passed the hero section add solid background

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
