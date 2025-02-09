// Get the hamburger and sidebar elements
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

// Toggle the sidebar open/close
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open'); // Opens/closes the sidebar
});
