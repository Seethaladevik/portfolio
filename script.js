let current=0;
const images =document.querySelectorAll(".slider");
const total=images.length;
function showImage(index){
  images.forEach((img,i)=> {
    img.classList.remove("active");
    if(i==index){
      img.classList.add("active");
    }
  });
}
setInterval(()=>{
  current=(current+1)%total;
  showImage(current);
},3000);
showImage(current);


let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');
menuIcon.onclick=()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =()=>{
  sections.forEach(sec =>{
    let top =window.scrollY;
    let offset=sec.offsetTop-150;
    let height =sec.offsetHeight;
    let id=sec.getAttribute('id');

    if(top >=offset && top <offset +height){
      navLinks.forEach(links=>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      });
    };
  });
  let header =document.querySelector('header');
  header.classList.toggle('sticky',window.screenY>100);
   menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

};



ScrollReveal({ 
  // reset: true ,
  distance:'80px',
  duration:2000,
  delay:200
});
ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.my-container, .skills-container,.project-container,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.about-img,.home-content h1',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

const typed=new Typed('.multiple-text',{
  strings:['Fullstack Developer','Frontend Developer','Backend Developer'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});