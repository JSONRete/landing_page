/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

sections.forEach(function(section) {
  
  const li = document.createElement('li');


  li.innerHTML = `<a class='menu__link'>${section.dataset.nav}</a>`;
  li.addEventListener('click', function() {
    section.scrollIntoView({behavior: "smooth"});
  });
  
  navbarList.appendChild(li);
});

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
window.addEventListener('scroll', function() {
    sections.forEach(function(section) {
      // check the position
      const screen = section.getBoundingClientRect();
      const test = screen.top > 0;
      
      // console.log(section.innerText, isInViewport);
      if (test) {
        section.classList.add('your-active-class');
      } else {
        section.classList.remove('your-active-class');
      }
    });
  })