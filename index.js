// function my_company(adminsnumber, admin1, admin2, admin3, admin4, admin5) {
//   document.write(`<h1 style=
//     "
//     background:orange;
//     width:250px;
//     color:white;
//     "
//     >
//     i have ${adminsnumber} admins</h1>
//     <h2 style=
//     "
//     background:orange;
//     width:120px;
//     color:white;
//     "
//     >
//     1-${admin1}</h2>
//     <h2 style=
//     "
//     background:orange;
//     width:120px;
//     color:white;
//     "
//     >
//     1-${admin2}</h2>
//     <h2 style=
//     "
//     background:orange;
//     width:120px;
//     color:white;
//     "
//     >
//     1-${admin3}</h2>
//     <h2 style=
//     "
//     background:orange;
//     width:120px;
//     color:white;
//     "
//     >
//     1-${admin4}</h2>
//     <h2 style=
//     "
//     background:orange;
//     width:125px;
//     color:white;
//     "
//     >
//     1-${admin5}</h2>`);
// }

// my_company("five", "sayed", "ahmed", "hamza", "marah", "mohamed");


//***************** new lesson *********************//

// function showinfo(us, ag, hr, sh, ...sk)
// {
//   document.write(`<h1> welcome: ${us}</h1s>`)
//   document.write(`<p> data: </p>`)
//   document.write(`<p> age: ${ag}</p>`)
//   document.write(`<p> hour rate: ${hr}</p>`)
//   // for(i = 0; i > ;)
//   // {

//   // }
// }


// showinfo("hamza rafea", "14", "$350")


// let names = (...names) => `${(typeof "names").charAt(0).toUpperCase() + (typeof "names").slice(1)} [${names.join("], [")}] => Done ! `;


// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));


// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[0];

// console.log(calc(10, myNumbers[2], myNumbers[3]));

// let myNumbers = [20, 50, 10, 60];

// let calc = function (one, two, ...nums) {
//   return one + two + nums[0];
// }
// console.log(calc(10, myNumbers[2], myNumbers[3]));

// let swappingCases = "elZERo";
// let invertednumbers = [1, -10, -20, 15, 100, -30];
// let ignorenumbers = "ELz123er4o";

// let test1 = swappingCases.split("").map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join("");

// console.log(test1);

// let test2 = invertednumbers.map(el => -el);

// ===== ACTIVE FEATURES =====

// 1. Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// 2. Highlight active navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.style.borderBottom = 'none');
    this.style.borderBottom = '3px solid #0ff';
  });
});

// 3. Add scroll-to-top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑ Top';
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #0ff;
  color: #333;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  display: none;
  z-index: 1000;
  transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.display = 'block';
    scrollTopBtn.style.opacity = '0.8';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

scrollTopBtn.addEventListener('mouseover', function () {
  this.style.opacity = '1';
  this.style.backgroundColor = '#00ffff';
});

scrollTopBtn.addEventListener('mouseout', function () {
  this.style.opacity = '0.8';
  this.style.backgroundColor = '#0ff';
});

// 4. Add animation effects to images on hover
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

  img.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.05) rotate(2deg)';
    this.style.boxShadow = '0 8px 20px rgba(0, 255, 255, 0.5)';
  });

  img.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1) rotate(0deg)';
    this.style.boxShadow = 'none';
  });
});

// 5. Add click animation to links
const allLinks = document.querySelectorAll('a');
allLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      width: 20px;
      height: 20px;
      background: rgba(0, 255, 255, 0.5);
      border-radius: 50%;
      pointer-events: none;
      animation: ripple-animation 0.6s ease-out;
    `;

    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// 6. Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple-animation {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  section {
    animation: fadeIn 0.6s ease-out;
  }
`;
document.head.appendChild(style);

// 7. Welcome message based on time of day
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return 'Good Morning';
  } else if (hour < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}

// 8. Log visitor info to console
console.log('%c Welcome to Random Wiki! ', 'background: #0ff; color: #333; font-size: 16px; font-weight: bold; padding: 10px;');
console.log(`%c${getGreeting()}!`, 'color: #0ff; font-size: 14px; font-weight: bold;');
console.log('%cExplore our amazing wikis: Doors, Blox Fruits, and Scary Sushi!', 'color: #fff; font-size: 12px;');

// 9. Add loading animation when page loads
window.addEventListener('load', function () {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s backwards`;
  });
});

// 10. Add keyboard shortcuts
document.addEventListener('keydown', function (e) {
  // Press 't' to scroll to top
  if (e.key === 't' || e.key === 'T') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});

