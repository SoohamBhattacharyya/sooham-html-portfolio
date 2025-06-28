// ✅ 1. Preloader fade-out on page load
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});

// ✅ 2. Footer year update
const footer = document.getElementById("footer-text");
const year = new Date().getFullYear();
if (footer) {
  footer.innerHTML = `© ${year} Sooham Bhattacharyya. All rights reserved.`;
}

// ✅ 3. Resume download confirmation
const resumeBtn = document.querySelector(".button");
if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    alert("Thanks for downloading my resume! 📄");
  });
}

// ✅ 4. Dark mode toggle
const toggle = document.getElementById("darkToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// ✅ 5. Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
