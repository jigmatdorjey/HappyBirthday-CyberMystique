// In this setup, when any navigation option 
// (<a> tag) is clicked, it will trigger an event 
// listener which will uncheck the checkbox 
// (with the id check) that controls the menu, 
// effectively closing it.

// Close the menu when a navigation option is clicked


document.querySelectorAll('.navbar ul li a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('check').checked = false; // Uncheck the checkbox to close the menu
    });
});


// document.addEventListener("scroll", function() {
//     var sections = document.querySelectorAll("section");
//     var mostVisibleSection = null;
//     var mostVisibleArea = 0;

//     sections.forEach(function(section) {
//         var visibleArea = getVisibleArea(section);
//         if (visibleArea > mostVisibleArea) {
//             mostVisibleArea = visibleArea;
//             mostVisibleSection = section;
//         }
//     });

//     // Remove active class from all links
//     document.querySelectorAll('.navbar a').forEach(function(link) {
//         link.style.color = "#a85c4c";
//     });

//     // Set active class for the corresponding link
//     if (mostVisibleSection) {
//         var activeNavLink = document.querySelector("a[href='#" + mostVisibleSection.id + "']");
//         activeNavLink.style.color = "#2d2422";
//     }
// });

// document.querySelectorAll('.navbar a').forEach(function(link) {
//     link.addEventListener('click', function(event) {
//         event.preventDefault();
//         var targetId = this.getAttribute('href').substring(1);
//         var targetSection = document.getElementById(targetId);

//         if (targetSection) {
//             window.scrollTo({
//                 top: targetSection.offsetTop,
//                 behavior: 'smooth'
//             });
//         }

//         // Remove active class from all links
//         document.querySelectorAll('.navbar a').forEach(function(link) {
//             link.style.color = "black";
//         });

//         // Set active class for the clicked link
//         this.style.color = "black";
//     });
// });

// function getVisibleArea(element) {
//     var rect = element.getBoundingClientRect();
//     var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
//     var visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
//     return visibleHeight * element.offsetWidth; // Calculate visible area
// }




// function scrollToContact() {
//     // Find the contact section
//     var contactSection = document.getElementById('contact');
    
//     // Scroll to the contact section
//     if (contactSection) {
//         contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
// }