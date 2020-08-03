let date = new Date();
let logo = document.querySelector('#nomoblogo');
let logo2 = document.querySelector('.mobilelogo');

/* New Year */
if (date.getMonth() === 11 && date.getDate() >= 20 && date.getDate() <= 31) {
    logo.src = '/images/logo_newyear.svg';
    logo2.src = '/images/logo_newyear.svg';
    logo.style.width = '56px';
    logo2.style.width = '56px';
}