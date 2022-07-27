const contactFormEmail = document.querySelector('#email');
const contactForm = document.querySelector('#contactform');

console.log('loaded')

contactFormEmail.addEventListener('click', ()=>{
    contactFormEmail.placeholder = '(otrzymasz tutaj odpowiedż)';
});

contactForm.addEventListener('mouseover', ()=>{
    contactFormEmail.placeholder = 'E-mail/numer telefonu';
});