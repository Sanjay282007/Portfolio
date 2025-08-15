const sections = document.querySelectorAll('main section');

// Hide all sections initially except About
sections.forEach(s => {
  if(s.id !== 'about') s.style.display = 'none';
  else s.style.display = 'block';
});

function showSection(id, event){
  if(event) event.preventDefault(); // Prevent default anchor jump
  sections.forEach(s => s.style.display = 'none'); // Hide all sections
  const sec = document.getElementById(id);
  sec.style.display = 'block';
  setTimeout(() => sec.classList.add('active'), 50);
  // Removed scroll so page doesn't jump
}

// Toggle Projects visibility
function toggleProjects(){ 
  const p = document.getElementById('projectList'); 
  p.style.display = (p.style.display==='none')?'block':'none'; 
}

// Scroll to top button
window.addEventListener('scroll', ()=>{ 
  document.getElementById('btnTop').style.display = window.scrollY>150?'block':'none'; 
});
