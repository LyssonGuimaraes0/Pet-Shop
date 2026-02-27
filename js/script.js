//funcao para arredondar numero e gera um intero com limite definido
function arredondar_numero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//Função para toca a animação em loop

function animacao_banner() {
    //gera um numero aleatorio para coletar o elemento
    let texto;
    const texto_ativo = document.querySelector(".texto-active");
    //Repetição para não repetir a mesma frase
    do {
        let numero = arredondar_numero(1, 5);
        const id_formatado = "texto-banner-" + numero;
        //Coleta elementos presentes na página
        texto = document.getElementById(id_formatado);

    } while (texto === texto_ativo);

    //alteração de css
    texto_ativo.style.animation = "animacao_subir 2s ease"
    texto_ativo.style.animationFillMode = "forwards";
    //Delay para animação acontecer
    setTimeout(function () {
        texto_ativo.classList.remove('texto-active');
        texto.style.animation = "animacao_desce 2s ease"
        texto.style.animationFillMode = "forwards";
        texto.classList.add('texto-active');
    }, 1000)

}

setInterval(() => {
    animacao_banner();
}, 5000);



//-----------------------------------------------------------//

//Função de ativação de Navbar Mobile

const botaoMenu = document.querySelector('.menu-mobile');
const menuMobile = document.querySelector('.menu-navbar');
const logoDesktop = document.querySelector('.logo-navbar');
const navOut = document.querySelector('.navbar-out');

function fecharMenuMobile() {
    menuMobile.classList.remove('menu-mobile-active');
    navOut.classList.remove('navbar-out-active');
    logoDesktop.style.display = "block";
}

botaoMenu.addEventListener('click', function () {
    menuMobile.classList.toggle('menu-mobile-active');
    navOut.classList.add('navbar-out-active');
    console.log(navOut)
});

//Configurações de botão X Para fechar Menu

const fecharMobile = document.querySelector('.botao-fechar-menu');
fecharMobile.addEventListener('click', function (){
    fecharMenuMobile();
});

//Configurações dos links Para fechar Menu

const links = document.querySelectorAll('.link-navbar');

links.forEach(link => {
    link.addEventListener('click', function () {
        fecharMenuMobile();
    })
});

//Configurações do background para caso receba um click fechar o Menu

navOut.addEventListener('click', function(){
    fecharMenuMobile();
})









