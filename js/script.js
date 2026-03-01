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
});

//Configurações de botão X Para fechar Menu

const fecharMobile = document.querySelector('.botao-fechar-menu');
fecharMobile.addEventListener('click', function () {
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

navOut.addEventListener('click', function () {
    fecharMenuMobile();
})


//-----------------------------------------------------------//

//Sistema de scroll suave

links.forEach(link => {
    const links_a = link.querySelectorAll("a");

    links_a.forEach(link_a => {
        link_a.addEventListener('click', function () {
            event.preventDefault();
            const idLink = link_a.getAttribute("href");
            let idFormatado = idLink.replace("#", "");

            const section = document.getElementById(idFormatado);
            section.scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        });

    });
});

//-----------------------------------------------------------//

//Função de carrosel

const containerCarrosel = document.querySelector(".container-carrosel");
let slides = document.querySelectorAll('.item-carrosel');

//coletar tamanho do slide
let slideWidth = slides[0].offsetWidth;
let containerWidth = containerCarrosel.offsetWidth;
let gap = 60;

function moverCarrosel() {

    const container = document.querySelector(".carrosel");
    const containerWidth = container.offsetWidth;

    const estilos = getComputedStyle(containerCarrosel);
    const gap = parseInt(estilos.gap);

    const posicao =
        (slideWidth + gap) * index
        - (containerWidth / 2 - slideWidth / 2);

    containerCarrosel.style.transform =
        `translateX(-${posicao}px)`;
}

//cria index de Elemento Atual
let index = 1;

//clona o primeiro e ultimo elemento
const clonePrimeiro = slides[0].cloneNode(true);
const cloneUltimo = slides[slides.length - 1].cloneNode(true);

//adiciona os elementos falsos na frente e atras do carrosel oficial

containerCarrosel.appendChild(clonePrimeiro);
containerCarrosel.insertBefore(cloneUltimo, slides[0]);

//Atualiza lista novamente
slides = document.querySelectorAll(".item-carrosel");
moverCarrosel();
updateActive();


//logica dos botoes
const botaoNext = document.querySelector('.next').addEventListener('click', function () {
    //impede do sistema quebra na troca do falso para o verdadeiro
    if (index >= slides.length - 1) return;
    index++;
    containerCarrosel.style.transition = "0.5s ease";
    moverCarrosel();
});

const botaoPrev = document.querySelector('.prev').addEventListener('click', function () {
    //impede do sistema quebra na troca do falso para o verdadeiro
    if (index < 0) return;
    index--;
    containerCarrosel.style.transition = "0.5s ease";
    moverCarrosel();
});

//Subistiuição de elemento falso para verdadeiro

containerCarrosel.addEventListener("transitionend", () => {
    if (slides[index] === clonePrimeiro) {
        containerCarrosel.style.transition = "none";
        index = 1;
        moverCarrosel();

    }

    if (slides[index] === cloneUltimo) {
        containerCarrosel.style.transition = "none";
        index = slides.length - 2;
        moverCarrosel();
    }

     updateActive();
});

function updateActive() {
    slides.forEach(slide => {
        slide.classList.remove("item-carrosel-active");
    });

    slides[index].classList.add("item-carrosel-active");
}



























