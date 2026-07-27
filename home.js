

  const menuIcon = document.querySelector('.menu-icon');
  const dropdown = document.querySelector('.dropdown-menu');

  menuIcon.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
  });

