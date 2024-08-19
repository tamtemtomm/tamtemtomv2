
export const fadeInAnimation = () => {
  // Fade in animation
  const fadeIn = document.querySelectorAll(".fade-in");
  const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  fadeIn.forEach((el) => Observer.observe(el));
};

