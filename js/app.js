// Global Variables
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


// Builds the nav
sections.forEach( (section) => {
  // builds menu items
  const li = document.createElement('li');
// creating li element
  li.innerHTML = `<a class='menu__link'>${section.dataset.nav}</a>`;
  // Scroll to section on link click
  li.addEventListener('click', () => {
    section.scrollIntoView({behavior: "smooth"});
  });
  // places built menu on navbar
  navbarList.appendChild(li);
});

// detects the scroll
window.addEventListener('scroll', () => {
    sections.forEach( (section) => {

      const inView = section.getBoundingClientRect();
      const position = inView.top > -5;
      // Set sections as active
      if (position) {
        section.classList.add('your-active-class');
        // document.getElementById(`${section.dataset.nav}`).navbarList.add('active');
        

      } else {
        section.classList.remove('your-active-class');
      }
    });
  })

  