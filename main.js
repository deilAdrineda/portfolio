document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar nav a");
  const cards = document.querySelectorAll(".section-card");

  // 🔹 NAVBAR ACTIVE LINK
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  navLinks.forEach(link => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      link.blur();
    }, 100);
  });
});

  // 🔹 SECTION FOCUS EFFECT
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach(card => card.classList.remove("active"));
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.3
  });

  cards.forEach(card => observer.observe(card));

});

// PREVIEW IMAGES FOR PROJECTS AND WAHTNOT V1
const previewImages = document.querySelectorAll(".project-image");
const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const closeBtn = imageViewer.querySelector(".closeViewer");

previewImages.forEach(imageBox => {
  imageBox.addEventListener("click", () => {
    const img = imageBox.querySelector("img");

    imageViewer.classList.add("active");
    viewerImage.src = img.src;
  });
});

closeViewer.addEventListener("click", () => {
  imageViewer.classList.remove("active");
});

imageViewer.addEventListener("click", (e) => {
  if (e.target === imageViewer) {
    imageViewer.classList.remove("active");
  }
});