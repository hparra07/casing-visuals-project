
window.addEventListener('scroll', function (){
    
    let header = document.querySelector('header');
    header.classList.toggle('down', window.scrollY > 0);

    let navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('down', window.scrollY > 0);

})

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () =>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))