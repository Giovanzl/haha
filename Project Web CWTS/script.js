// ✅ Smooth scrolling between sections
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    const targetId = e.target.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });

      // Update active link on click
      document.querySelectorAll("nav ul li a").forEach(l => l.classList.remove("active"));
      e.target.classList.add("active");
    }
  });
});

// ========================== ACHIEVEMENT SLIDER ==========================
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Auto slide every 6 seconds
setInterval(nextSlide, 6000);

const swiper = new Swiper('.achievement-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: { delay: 4000 },
  // ✅ This allows clicking links inside slides
  preventClicks: false,
  preventClicksPropagation: false
});





// ✅ Scroll Spy — highlight menu link when section is in view
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Adjust for header height
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ✅ Get a Quote button action
document.querySelector(".quote-btn").addEventListener("click", () => {
  alert("Thank you for choosing BlueCleaning! We'll contact you soon.");
});
