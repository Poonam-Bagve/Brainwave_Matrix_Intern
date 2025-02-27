let menu = document.querySelector('#menuicon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
//dark mode

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }
    else {
        darkmode.classList.replace('bx-sun', 'bx-mooon');
        document.body.classList.remove('active');
    }
}

//scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal(`.hometext, .homeimg,
    .aboutimg, .abouttext,
    .box, .sbox,
    .btn, .connecttext, 
    .contactbox`, {
    interval: 200
})