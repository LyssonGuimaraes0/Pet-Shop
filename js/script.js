//funcao para arredondar numero e gera um intero com limite definido
function arredondar_numero(min,max) {
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
    do{
        let numero = arredondar_numero(1,5);
        const id_formatado = "texto-banner-" + numero;
        //Coleta elementos presentes na página
        texto = document.getElementById(id_formatado);
        
    }while (texto === texto_ativo);

    //alteração de css
    texto_ativo.style.animation = "animacao_subir 2s ease"
    texto_ativo.style.animationFillMode = "forwards";
    //Delay para animação acontecer
    setTimeout(function(){
        texto_ativo.classList.remove('texto-active');
        texto.style.animation = "animacao_desce 2s ease"
        texto.style.animationFillMode = "forwards";
        texto.classList.add('texto-active');
    },1000)
    
}

setInterval(() => {
    animacao_banner();
}, 5000);



//-----------------------------------------------------------//

//Função de ativação de Navbar Mobile



