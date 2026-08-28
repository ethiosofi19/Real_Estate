const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  // Toggles the mobile menu on and off
  navLinks.classList.toggle("active");
});
