document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
const hamburger = document.querySelector(".nav__hamburger");
const navLinks = document.querySelector(".nav__links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav__links--active");
});
const texts = ["Assalamu Alaikum wa Rahmatullah"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000); // pause before next
  } else {
    setTimeout(type, 100);
  }
})();
// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -20px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skills__list li");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // stop observing once shown
      }
    });
  }, {
    threshold: 0.1
  });

  skills.forEach(skill => {
    observer.observe(skill);
  });
});
