const searchIcon = document.querySelector('.btn');
const searchBar = document.querySelector('.search');
const input = document.querySelector('.input');


searchIcon.addEventListener('click', () => {
  searchBar.classList.toggle('active');
  input.focus();
});