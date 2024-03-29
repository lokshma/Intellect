// SCROLL PROGRESS BAR
var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight',
  progress = document.querySelector('.progress'),
  scroll;

document.addEventListener('scroll', function() {
  scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  progress.style.setProperty('--scroll', scroll + '%');
});
// END - SCROLL PROGRESS BAR

// NAVBAR BACKGROUND CHANGE ON SCROLL
const navbar = document.querySelector(".navbar");
const homeContainer = document.querySelector("#homeContainer");

const sectionOneOptions = {
  rootMargin: "-80px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function( entries ) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
        navbar.classList.remove("navbar-light")
      navbar.classList.add("navbar-dark");
    } else {
      navbar.classList.remove("navbar-dark");
      navbar.classList.add("navbar-light");
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(homeContainer);
// END - NAVBAR BACKGROUND COLOR TOGGLE ON SCROLL

// DISABLE COPY PASTE AND RIGHT CLICK
//Disable cut copy paste
//Disable mouse right click
// $(document).ready(function () {  
//   $('body').bind('cut copy paste', function (e) {
//       e.preventDefault();
//   });
 
//   $("body").on("contextmenu",function(e){
//       return false;
//   });
// });
// END - DISABLE COPY PASTE AND RIGHT CLICK

// FOOTER - COPY RIGHT YEAR
document.getElementById("current-year").innerHTML=new Date().getFullYear();
 
// END - FOOTER - COPY RIGHT YEAR