const buttonOpenMenu = document.querySelector('.button-open-menu');
const buttonCloseMenu = document.querySelector('.button-close-menu');
buttonOpenMenu.addEventListener('click', () => {
    console.log('click');
    const aside = document.querySelector('.aside');
    aside.classList.toggle('hidden');
})

buttonCloseMenu.addEventListener('click', () => {
    console.log('click');
    const aside = document.querySelector('.aside');
    aside.classList.add('hidden');
})