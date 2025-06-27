// ✅ 1. Show current year in footer
const footer = document.getElementById("footer-text");
const year = new Date().getFullYear();
footer.innerHTML = `© ${year} Sooham Bhattacharyya. All rights reserved.`;

// ✅ 2. Show alert when resume is clicked
const resumeBtn = document.querySelector('.button');
if (resumeBtn) {
  resumeBtn.addEventListener('click', () => {
    alert("Thanks for downloading my resume! 📄");
  });
}

// ✅ 3. Add a dark mode toggle button dynamically
const toggle = document.createElement('button');
toggle.innerText = "🌙 Toggle Dark Mode";
toggle.style.marginTop = "20px";
toggle.style.padding = "10px 18px";
toggle.style.borderRadius = "6px";
toggle.style.border = "none";
toggle.style.backgroundColor = "#444";
toggle.style.color = "#fff";
toggle.style.cursor = "pointer";
toggle.style.display = "block";
toggle.style.marginLeft = "auto";
toggle.style.marginRight = "auto";

// Append the toggle button to container
document.querySelector('.container').appendChild(toggle);

// Toggle dark mode class on body
toggle.addEventListener('click', () => {
  document.body.classList.toggle("dark-mode");
});
