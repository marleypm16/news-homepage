const buttonOpenMenu = document.querySelector('.button-open-menu');
const image = document.querySelector('.image');
const buttonCloseMenu = document.querySelector('.button-close-menu');

function trocarSrc() {
    if (window.innerWidth > 1023) {
        image.src = '../assets/image-web-3-desktop.jpg'; // Defina o novo caminho da imagem
    } else {
        image.src = '../assets/image-web-3-mobile.jpg'; // Reverta para o caminho original se a largura da tela for menor ou igual a 1023 pixels
    }
}

// Execute a função inicialmente para definir o src com base na largura da tela
trocarSrc();

// Adicione um listener de redimensionamento para atualizar o src quando a largura da tela mudar
window.addEventListener('resize', trocarSrc);

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