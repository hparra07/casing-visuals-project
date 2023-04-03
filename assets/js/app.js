
/* LANGUAGE MODE */

/* let check=document.querySelector('.check');

check.addEventListener('click', language);

function language(){
    let id = check.checked;

    if (id == true){
        location.href="./es/index.html";
    }else{
        location.href="../index.html"
    }
} */

const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});

/* SCROLL NAVBAR */
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


/* ANIMATIONS */
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

/* FORM ACTTION */

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_bkr5x23';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                showAlert()
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

/* ALERT BUTTON */
    
const showAlert = () => {
    Swal.fire('Succes', 'Your email has been sent', 'success');
}

