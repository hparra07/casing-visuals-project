
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

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll('.services')[0].classList.add('fadeInTop');
            document.querySelectorAll('.services')[1].classList.add('fadeInLeft');
            document.querySelectorAll('.services')[2].classList.add('fadeInRight');
            document.querySelectorAll('.services')[3].classList.add('fadeInLeft');
            document.querySelectorAll('.services')[4].classList.add('fadeInRight');
        }
    })
})

observer.observe(document.querySelector('.what-we-do-services'))

const observerAbout = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll('.aboutAnimation')[0].classList.add('fadeInTop');
            document.querySelectorAll('.aboutAnimation')[1].classList.add('fadeInLeft');
            document.querySelectorAll('.aboutAnimation')[2].classList.add('fadeInLeft');
            document.querySelectorAll('.aboutAnimation')[3].classList.add('fadeInTop');
            document.querySelectorAll('.aboutAnimation')[4].classList.add('fadeInTop');
        }
    })
})

observerAbout.observe(document.querySelector('.about'))