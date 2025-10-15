
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
  reset: true
});

// ScrollReveal().reveal('.item, .items', { origin: 'top' });
// ScrollReveal().reveal('.title', { origin: 'bottom' });



const typed = new Typed('.multiple-text', {

  strings: ['Frontend Developer', 'Backend Developer', 'Full stack Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


const scrollBtn = document.getElementById("scrollTop");

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});






let navbar = document.querySelector('.section-navbar');
let linknavbar = document.querySelectorAll('.link');
let bgcolor = document.querySelectorAll('.bgcolor');
let btndarkmode = document.querySelector('.fa-moon');
let hfirst = document.getElementsByTagName('h1');
let hthird = document.getElementsByTagName('h3');
let p = document.getElementsByTagName('p');
let icon = document.getElementById('icon');
let services = document.querySelector('.services');
let portfolio = document.querySelector('.portfolio');
let about = document.querySelector('.about');
let contact = document.querySelector('.contact');
let footer = document.querySelector('footer');
let pitem = document.querySelectorAll('.p-item');
let inputs = document.querySelectorAll('input');
let textarea = document.querySelector('textarea');
let btnhome = document.querySelector('.btnhome');

// نعرف media query
const media = window.matchMedia("(max-width: 500px)");

// دالة كتخدم حسب الحالة
function handleScreenChange(e) {
  if (e.matches) {
    // إلا العرض أقل من 500px
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        let textLength = input.value.length;
        input.style.fontSize = textLength > 0 ? '5rem' : '16px';
      });
    });

    textarea.addEventListener('input', () => {
      textarea.style.fontSize = textarea.value.length > 0 ? '5rem' : '16px';
    });
  } else {
    // إلا العرض تزاد على 500px
    inputs.forEach(input => {
      input.style.fontSize = '16px';
    });
    textarea.style.fontSize = '16px';
  }
}

// نخليها تخدم أول مرة
handleScreenChange(media);

// ونراقب التغيير
media.addEventListener("change", handleScreenChange);





btnhome.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
  textarea.value = '';
});


let darkmode = true;
function Darkmode() {
  for (let i = 0; i < linknavbar.length; i++) {
    linknavbar[i].style.color = 'black';
  }

  for (let i = 0; i < hfirst.length; i++) {
    hfirst[i].style.color = 'black'
  }
  for (let i = 0; i < hthird.length; i++) {
    hthird[i].style.color = 'rgb(239, 100, 123)'
  }
  for (let i = 0; i < p.length; i++) {
    p[i].style.color = 'black'
  }



  if (icon.classList.contains("fa-sun")) {
    icon.classList.replace("fa-sun", "fa-moon");
  }
  else {
    icon.classList.replace("fa-moon", "fa-sun");
  }



  for (let i = 0; i < bgcolor.length; i++) {
    bgcolor[i].style.backgroundColor = 'beige';
  }



  for (let i = 0; i < pitem.length; i++) {
    pitem[i].style.color = 'white';
  }
}

function Lightmode() {
  for (let i = 0; i < linknavbar.length; i++) {
    linknavbar[i].style.color = 'white'
  }

  for (let i = 0; i < hfirst.length; i++) {
    hfirst[i].style.color = 'white'
  }
  for (let i = 0; i < hthird.length; i++) {
    hthird[i].style.color = 'pink'
  }
  for (let i = 0; i < p.length; i++) {
    p[i].style.color = 'white'
  }

  if (icon.classList.contains("fa-moon")) {
    icon.classList.replace("fa-moon", "fa-sun");
  }
  else {
    icon.classList.replace("fa-sun", "fa-moon");
  }

  for (let i = 0; i < bgcolor.length; i++) {
    bgcolor[i].style.backgroundColor = 'black';

  }

  for (let i = 0; i < pitem.length; i++) {
    pitem[i].style.color = 'red';
  }
}


function drkmode() {
  if (darkmode == true) {
    btndarkmode.style.color = 'black';
    icon.style.color = 'tomato';
    navbar.style.backgroundColor = 'beige'

    Darkmode();
    darkmode = false;
  }






  else {
    btndarkmode.style.color = 'white';
    navbar.style.backgroundColor = 'black';
    icon.style.color = 'white';
    Lightmode();
    darkmode = true;

  }


}



bgcolor.forEach(el => {
  el.style.transition = 'background-color 0.6s ease-in-out';
  el.addEventListener('mouseenter', () => {
    if (!darkmode) {
      el.style.background = 'white';
    }
  });

  el.addEventListener('mouseleave', () => {
    if (!darkmode) {
      el.style.background = 'beige';
    } else {
      home.style.backgroundColor = 'black';
      services.style.backgroundColor = 'black';
      about.style.backgroundColor = 'rgb(33, 32, 32)';
      portfolio.style.backgroundColor = 'rgb(33, 32, 32)';
      footer.style.backgroundColor = 'black';
    }
  });
});




//////////////// menu bar/////////////////////////



let menubar = document.querySelector('.fa-bars');
let crossbar = document.querySelector('.fa-xmark');
let iconbar = document.getElementById('iconbar');

menubar.addEventListener('click', () => {
  iconbar.classList.toggle('show');

  if (iconbar.classList.contains('show')) {
    menubar.style.display = 'none';
    crossbar.style.display = 'block';
   


  } else {

    crossbar.style.display = 'none';
    menubar.style.display = 'block';
    

  }
});

crossbar.addEventListener('click', () => {
  iconbar.classList.toggle('show');

  if (iconbar.classList.contains('hide')) {
    menubar.style.display = 'none';
    crossbar.style.display = 'block';
    


  } else {

    crossbar.style.display = 'none';
    menubar.style.display = 'block';
    

  }
});




