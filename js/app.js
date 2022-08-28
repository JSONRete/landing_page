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
    section.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
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

const observer = new IntersectionObserver((entries, observer) => {
  // Each of the sections will make up an “entry”
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // If target enters the viewport, add an “your-active-class” class to it
          entry.target.classList.add('your-active-class');
          // Otherwise, remove the “your-active-class” class
      } else {
          entry.target.classList.remove('your-active-class');
      }
  });
});
// Looping through the sections and adding them as targets of the observer
// Array.prototype.forEach.call(sections, (el) => {
//   observer.observe(el)
// });
// Scroll to anchor ID using scrollTO event
//done in createMenuBar function
  
  
