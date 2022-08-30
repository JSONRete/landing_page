const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

sections.forEach(function(section) {
  
  const li = document.createElement('li');

  li.innerHTML = `<a class='menu__link'>${section.dataset.nav}</a>`;
  li.addEventListener('click', function() {
    section.scrollIntoView({behavior: "smooth"});
  });
  
  navbarList.appendChild(li);
});

window.addEventListener('scroll', function() {
    sections.forEach(function(section) {

      const screen = section.getBoundingClientRect();
      const test = screen.top > 0;
      
      if (test) {
        section.classList.add('your-active-class');
      } else {
        section.classList.remove('your-active-class');
      }
    });
  })