/* LANGUAGE MODE */

/* var check = document.querySelector('.check');

check.addEventListener('click', idioma);

function idioma(){
    let id = check.checked;

    if(id == true){
        location.href="./index-es.html";
    }else{
        location.href="./index.html";
    }
} */

/* LANGUAGE MODE NEW VERSION*/

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () =>{
    let id = checkbox.checked;

    if(id == true){
        location.href="./index-es.html";
    }else{
        location.href="./index.html";
    }
})

/* DARK MODE */

const checkboxMode = document.getElementById('checkboxMode');

checkboxMode.addEventListener('change', () =>{
    document.body.classList.toggle('light');
})