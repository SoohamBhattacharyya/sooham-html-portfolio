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

// ✅ 4. Dark mode toggle with memory
const toggle = document.getElementById("darkToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  });
}

// ✅ 4b. Load dark mode from memory
window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "true") {
    document.body.classList.add("dark-mode");
  }
});

// ✅ 5. Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
  updateScrollProgress();
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ✅ 6. Scroll progress bar logic
function updateScrollProgress() {
  const progress = document.getElementById("scrollProgress");
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  if (progress) {
    progress.style.width = scrolled + "%";
  }
}

// ✅ 7. Animate sections on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-up-visible");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll("section").forEach(sec => {
  sec.classList.add("fade-up");
  observer.observe(sec);
});
