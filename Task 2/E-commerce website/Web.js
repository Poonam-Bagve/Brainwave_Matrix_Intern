let menu = document.querySelector('#menuicon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    navlist.classList.remove('active');
}


//scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal(`.hometext, .homeimg,
    .main-brands, .centertext,
    .content, .rowimg, 
    .btn2,.featurecontent.sellingcontent,.colimg,
    .newslettercontent,.footerbox`, {
    interval: 200
})