document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeButton = document.querySelector(".close");

  document.querySelectorAll(".achievement-image").forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
    });
  });

  closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  });
});
