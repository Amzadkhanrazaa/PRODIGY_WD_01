window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = 'rgba(85, 38, 29, 0.895)'; // Change background color when scrolled
    } else {
      navbar.style.backgroundColor = '#333';
    }
  });
  
