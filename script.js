
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Feather icons
  feather.replace();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
  });

  // Close mobile menu when a link is clicked
  navMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
          navMenu.classList.remove('show');
      }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Form submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Here you would typically send the form data to a server
      alert('Thank you for your message! I will get back to you soon.');
      form.reset();
  });

  // Add scroll reveal animation
  const sr = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
  });

  sr.reveal('.hero-content', { delay: 0 });
  sr.reveal('.about-content', { delay: 200 });
  sr.reveal('.skill-card', { interval: 100 });
  sr.reveal('.project-card', { interval: 200 });
  sr.reveal('.research-list li', { interval: 100 });
  sr.reveal('#contact form', { delay: 200 });
  sr.reveal('.social-links', { delay: 400 });
});
  document.getElementById("mail-me").addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      const email = "umer556601@gmail.com";
      const emailDisplay = document.getElementById("email-display");
      emailDisplay.textContent = `My Email: ${email}`;
      emailDisplay.style.display = "block"; // Make the email visible
  });

  const slider = document.querySelector('.projects-slider');

let scrollAmount = 0;
const scrollStep = 300; // Adjust based on card width
const scrollInterval = 3000; // Time in milliseconds between scrolls

setInterval(() => {
  if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0; // Reset scroll position
  } else {
    scrollAmount += scrollStep; // Move to the next card
  }
  slider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth',
  });
}, scrollInterval);

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  const skillItems = document.querySelectorAll(".skill-item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      skillItems.forEach((item) => {
        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  const skillItems = document.querySelectorAll(".skill-item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      skillItems.forEach((item) => {
        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
  });
  
  card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
  });
});

const filterButtons = document.querySelectorAll('.filter-btn');
        const skillCards = document.querySelectorAll('.skill-card');
        const filterContainer = document.querySelector('.filter-buttons');
        const leftIndicator = document.querySelector('.scroll-indicator.left');
        const rightIndicator = document.querySelector('.scroll-indicator.right');

        // Scroll indicators
        function updateScrollIndicators() {
            const isScrollable = filterContainer.scrollWidth > filterContainer.clientWidth;
            const isScrolledToStart = filterContainer.scrollLeft <= 0;
            const isScrolledToEnd = filterContainer.scrollLeft + filterContainer.clientWidth >= filterContainer.scrollWidth;

            leftIndicator.classList.toggle('visible', isScrollable && !isScrolledToStart);
            rightIndicator.classList.toggle('visible', isScrollable && !isScrolledToEnd);
        }

        // Scroll the filter buttons
        function scrollFilters(direction) {
            const scrollAmount = 200;
            if (direction === 'left') {
                filterContainer.scrollBy(-scrollAmount, 0);
            } else {
                filterContainer.scrollBy(scrollAmount, 0);
            }
        }

        // Filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.dataset.filter;
                skillCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'block';
                        card.style.animation = 'none';
                        card.offsetHeight;
                        card.style.animation = 'fadeIn 0.5s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Initialize
        filterContainer.addEventListener('scroll', updateScrollIndicators);
        window.addEventListener('resize', updateScrollIndicators);
        updateScrollIndicators();

        // Initialize with all skills visible
        skillCards.forEach(card => {
            card.style.display = 'block';
        });
// Add intersection observer to trigger animations when items come into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.research-item').forEach(item => {
  observer.observe(item);
});

// Add hover effect to research items
document.querySelectorAll('.research-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
  });

  item.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

/* Scroll nav section */
$(document).ready(function(){
  $(".overlay-content a").on('click', function(event) {

  $(".overlay").css("height", "0%");
  $(".menu-icon").toggleClass('change');

  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
      
      window.location.hash = hash;
    });
  } // End if
});


/* Menu icon */
$(".menu-icon").click(function(){
    var $this = $(this);
    $this.toggleClass('change');
    $(".menu-icon").css("z-index", "10");
    if($this.hasClass('change')){
      $(".overlay").css("height", "100%");        
    } else {
      $(".overlay").css("height", "0%");
    }
});


  /* General slide animation up */
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 700) {
          $(this).addClass("slide");
        }
    });
  });


  /* Service slide left */
    $(".brand-nav").ready(function() {
      $(".slideanimleft").each(function(){
          $(this).addClass("slideleft");
      });
    });

	/* Scroll to Top */ 
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 500) {        
	        $('.to-top').fadeIn(500);    
	    } else {
	        $('.to-top').fadeOut(500);   
	    }
	});

	$('.to-top').click(function(event) {
      event.preventDefault();      
	    $('.body,html').animate({
	        scrollTop : 0                       
	    }, 500);
	});


})
// script.js

// Handle button clicks for "View Certificate" or "View Badge"
document.querySelectorAll('.view-cert-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert("This feature is under development!");
    // You can replace the alert with a link to the certificate or badge.
  });
});

// If you want to add dynamic behavior later, you can start with simple JavaScript for user interaction
document.addEventListener("DOMContentLoaded", function() {
  const tagline = document.querySelector('.tagline');
  tagline.addEventListener('click', function() {
      alert('Thanks for reading my tagline!');
  });
});



