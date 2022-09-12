  // global variables
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
  // builds the nav
sections.forEach( (section) => {
  // builds menu items
  const li = document.createElement('li');
  // creating li element
  li.setAttribute('data-id', section.getAttribute('id'));
  li.innerHTML = `<a class='menu__link'>${section.dataset.nav}</a>`;
  // scroll to section on link click
  li.addEventListener('click', () => {
    section.scrollIntoView({behavior: "smooth"});
  });
  // places built menu on navbar
  navbarList.appendChild(li);
});
  // detects scroll
window.addEventListener('scroll', () => {
    sections.forEach( (section) => {
      // getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport
      const inView = section.getBoundingClientRect();
      const id = section.getAttribute('id');
      const position =  inView.y <= 175 && inView.bottom >= 175
      // section active control
      if (position) {
        section.classList.add('your-active-class');
        navbarList.querySelector(`[data-id=${id}]`).classList.add('navbar-section-active');

      } else {
        section.classList.remove('your-active-class');
        navbarList.querySelector(`[data-id=${id}]`).classList.remove('navbar-section-active');
      }
    });
  })