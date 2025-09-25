// Select all sections
const sections = document.querySelectorAll('main section');

// Hide all sections initially except About
sections.forEach(s => {
  if (s.id !== 'about') {
    s.style.display = 'none';
  } else {
    s.style.display = 'block';
    s.classList.add('active'); // Show About section first
  }
});

// Function to show selected section
function showSection(id, event) {
  if (event) event.preventDefault(); // Prevent default anchor jump

  sections.forEach(s => {
    s.style.display = 'none';
    s.classList.remove('active');
  });

  const sec = document.getElementById(id);
  sec.style.display = 'block';

  // Trigger fade-in after slight delay
  setTimeout(() => sec.classList.add('active'), 50);
}

// Toggle Projects visibility
function toggleProjects() { 
  const p = document.getElementById('projectList'); 
  if (p.style.display === 'none' || p.style.display === '') {
    p.style.display = 'block';
    setTimeout(() => p.classList.add('active'), 50);
  } else {
    p.classList.remove('active');
    setTimeout(() => p.style.display = 'none', 300); // Smooth hide
  }
}

// Scroll to top button
window.addEventListener('scroll', () => { 
  document.getElementById('btnTop').style.display = window.scrollY > 150 ? 'block' : 'none'; 
});

// Smooth scroll to top
document.getElementById('btnTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add nav active state
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    showSection(this.getAttribute('href').replace('#', ''), event);

    // Update active link styling
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
