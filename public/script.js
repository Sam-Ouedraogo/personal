"use strict";

document.querySelector('.linkedIn-icon')?.addEventListener('click', () => {
    // window.location.href = 'https://linkedin.com';
    window.open('https://linkedin.com', '_blank');
  });

document.querySelector('.github-icon')?.addEventListener('click', () => {
    window.open('https://github.com', '_blank');
  });

document.querySelector('.x-icon')?.addEventListener('click', () => {
    window.open('https://x.com', '_blank');
  });

document.querySelector('.about_me-icon')?.addEventListener('click', () => {
    window.open('./#about', '_self');
  });

document.querySelector('.portfolio-icon')?.addEventListener('click', () => {
    window.open('./#projects', '_self');
  });

document.querySelectorAll('.resume, .resume-icon').forEach(el => {
  el.addEventListener('click', () => {
    window.open('./assets/Resume.pdf', '_blank');
  });
});




// document.querySelector('.resume-icon')
//   ?.closest('li')
//   ?.addEventListener('click', () => {
//     window.open('./public/assets/Resume.pdf', '_blank');
//   });


document.querySelector('.contact-icon')?.addEventListener('click', () => {
    window.location.href = './#contact';
  });



const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load saved theme or system preference
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const theme = savedTheme || (prefersDark ? "dark" : "light");
root.setAttribute("data-theme", theme);
toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";

// Toggle on click
toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  toggleBtn.textContent = next === "dark" ? "☀️" : "🌙";
});



function toggleMenu () {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu?.classList.toggle("open");
    icon.classList.toggle("open");
}

