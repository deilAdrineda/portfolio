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

    // window.addEventListener("scroll", () => {
    // let current = "";

    // sections.forEach(section => {
    //     const sectionTop = section.offsetTop;
    //     const sectionHeight = section.clientHeight;

    //     if (
    //     window.scrollY >= sectionTop - sectionHeight / 3 &&
    //     window.scrollY < sectionTop + sectionHeight - sectionHeight / 3
    //     ) {
    //     current = section.getAttribute("id");
    //     }
    // });

    // navLinks.forEach(link => {
    //     link.classList.remove("active");

    //     if (link.getAttribute("href") === `#${current}`) {
    //     link.classList.add("active");
    //     }
    // });
    // });

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