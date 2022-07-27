// navbar
const navbar = document.querySelector('#navigator');
const navbarBTNS = {
    start: navbar.querySelector('[data-navopt="start"]'),
}

navbarBTNS.start.addEventListener('click', ()=>{
document.querySelector('.landing_page').scrollIntoView();});

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 10){
    navbar.classList.add('navbar_scrolled')}
    else {
        navbar.classList.remove('navbar_scrolled')
    }
});

const hamburger = document.querySelector('.hamburger')
const hamburgerList = document.querySelector('.hamburger_list')

hamburger.addEventListener('click', ()=>{
    hamburgerList.classList.toggle('hidden');
});