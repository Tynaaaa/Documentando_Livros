


//CONFIGURAÇÕES ÁUDIO 
const imgAudio = document.getElementById("imgAudio");
const audio = document.getElementById('podcast');

let controleImgAudio = 0;
let translateXImgContagemAudio = 0;


    //controle da bolinha
    function movimentar (){
        if (controleImgAudio === 1){
            translateXImgContagemAudio = translateXImgContagemAudio + 0.5;
            document.getElementById('imgContagemAudio').style.transform = 'translateX(' + translateXImgContagemAudio + 'px)';
        }
    }

    //
    setInterval(movimentar, 1000);

    //controle de play e pause 
    imgAudio.addEventListener('click', () => {
        if(controleImgAudio === 0){
        audio.play();
        imgAudio.src = "imagens/pause.png";
        controleImgAudio = 1;
    }
        else{
        audio.pause();
        imgAudio.src = "imagens/play.png";
        controleImgAudio = 0;
        }
    });

    audio.addEventListener('ended', function () {
        controleImgAudio = 0;
        imgAudio.src = "imagens/play.png";
        translateXImgContagemAudio = 0;
        imgContagemAudio.style.transform = 'translateX(' + translateXImgContagemAudio + 'px)';
      });


//CONFIGURAÇÕES SLIDES
const slides = document.getElementById('imgsSlide');
const bntSlidesDireito = document.getElementById('movDireita');
const bntSlidesEsquerdo = document.getElementById('movEsquerda');

    //fazer link dos slides com o pdf dos slides 

    //movimentação dos slides
    let slidesmovimentar = 1;

    bntSlidesDireito.addEventListener('click', () => {
        if (slidesmovimentar < 27){
            slidesmovimentar += 1;
            console.log(slidesmovimentar)
            if (slidesmovimentar === 2){
                slides.src = "imagens/slides/2.jpg";
            }
            if (slidesmovimentar === 3){
                slides.src = "imagens/slides/3.jpg";
            }
            if (slidesmovimentar === 4){
                slides.src = "imagens/slides/4.jpg";
            }
            if (slidesmovimentar === 5){
                slides.src = "imagens/slides/5.jpg";
            }
            if (slidesmovimentar === 6){
                slides.src = "imagens/slides/6.jpg";
            }
            if (slidesmovimentar === 7){
                slides.src = "imagens/slides/7.jpg";
            }
            if (slidesmovimentar === 8){
                slides.src = "imagens/slides/8.jpg";
            }
            if (slidesmovimentar === 9){
                slides.src = "imagens/slides/9.jpg";
            }
            if (slidesmovimentar === 10){
                slides.src = "imagens/slides/10.jpg";
            }
            if (slidesmovimentar === 11){
                slides.src = "imagens/slides/11.jpg";
            }
            if (slidesmovimentar === 12){
                slides.src = "imagens/slides/12.jpg";
            }
            if (slidesmovimentar === 13){
                slides.src = "imagens/slides/13.jpg";
            }
            if (slidesmovimentar === 14){
                slides.src = "imagens/slides/14.jpg";
            }
            if (slidesmovimentar === 15){
                slides.src = "imagens/slides/15.jpg";
            }
            if (slidesmovimentar === 16){
                slides.src = "imagens/slides/16.jpg";
            }
            if (slidesmovimentar === 17){
                slides.src = "imagens/slides/17.jpg";
            }
            if (slidesmovimentar === 18){
                slides.src = "imagens/slides/18.jpg";
            }
            if (slidesmovimentar === 19){
                slides.src = "imagens/slides/19.jpg";
            }
            if (slidesmovimentar === 20){
                slides.src = "imagens/slides/20.jpg";
            }
            if (slidesmovimentar === 21){
                slides.src = "imagens/slides/21.jpg";
            }
            if (slidesmovimentar === 22){
                slides.src = "imagens/slides/22.jpg";
            }
            if (slidesmovimentar === 23){
                slides.src = "imagens/slides/23.jpg";
            }
            if (slidesmovimentar === 24){
                slides.src = "imagens/slides/24.jpg";
            }
            if (slidesmovimentar === 25){
                slides.src = "imagens/slides/25.jpg";
            }
            if (slidesmovimentar === 26){
                slides.src = "imagens/slides/26.jpg";
            }
            if (slidesmovimentar === 27){
                slides.src = "imagens/slides/27.jpg";
            }
        }
    })

    bntSlidesEsquerdo.addEventListener('click', () => {
        if (slidesmovimentar > 1){
            if (slidesmovimentar === 2){
                slides.src = "imagens/slides/1.jpg";
            }
            if (slidesmovimentar === 3){
                slides.src = "imagens/slides/2.jpg";
            }
            if (slidesmovimentar === 4){
                slides.src = "imagens/slides/3.jpg";
            }
            if (slidesmovimentar === 5){
                slides.src = "imagens/slides/4.jpg";
            }
            if (slidesmovimentar === 6){
                slides.src = "imagens/slides/5.jpg";
            }
            if (slidesmovimentar === 7){
                slides.src = "imagens/slides/6.jpg";
            }
            if (slidesmovimentar === 8){
                slides.src = "imagens/slides/7.jpg";
            }
            if (slidesmovimentar === 9){
                slides.src = "imagens/slides/8.jpg";
            }
            if (slidesmovimentar === 10){
                slides.src = "imagens/slides/9.jpg";
            }
            if (slidesmovimentar === 11){
                slides.src = "imagens/slides/10.jpg";
            }
            if (slidesmovimentar === 12){
                slides.src = "imagens/slides/11.jpg";
            }
            if (slidesmovimentar === 13){
                slides.src = "imagens/slides/12.jpg";
            }
            if (slidesmovimentar === 14){
                slides.src = "imagens/slides/13.jpg";
            }
            if (slidesmovimentar === 15){
                slides.src = "imagens/slides/14.jpg";
            }
            if (slidesmovimentar === 16){
                slides.src = "imagens/slides/15.jpg";
            }
            if (slidesmovimentar === 17){
                slides.src = "imagens/slides/16.jpg";
            }
            if (slidesmovimentar === 18){
                slides.src = "imagens/slides/17.jpg";
            }
            if (slidesmovimentar === 19){
                slides.src = "imagens/slides/18.jpg";
            }
            if (slidesmovimentar === 20){
                slides.src = "imagens/slides/19.jpg";
            }
            if (slidesmovimentar === 21){
                slides.src = "imagens/slides/20.jpg";
            }
            if (slidesmovimentar === 22){
                slides.src = "imagens/slides/21.jpg";
            }
            if (slidesmovimentar === 23){
                slides.src = "imagens/slides/22.jpg";
            }
            if (slidesmovimentar === 24){
                slides.src = "imagens/slides/23.jpg";
            }
            if (slidesmovimentar === 25){
                slides.src = "imagens/slides/24.jpg";
            }
            if (slidesmovimentar === 26){
                slides.src = "imagens/slides/25.jpg";
            }
            if (slidesmovimentar === 27){
                slides.src = "imagens/slides/26.jpg";
            }
            slidesmovimentar -= 1;
            console.log(slidesmovimentar)
        }
    })









//CONFIGURAÇÃO QUESTÕES 
let abrir1 = 1, abrir2 = 1, abrir3 = 1, abrir4 = 1, abrir5 = 1, abrir6 = 1, abrir7 = 1, abrir8 = 1, abrir9 = 1, abrir10 = 1;

    //guardando os botões de resposta
    const mostrarReposta1 =document.getElementById("btn_resp_1");
    const mostrarReposta2 =document.getElementById("btn_resp_2");
    const mostrarReposta3 =document.getElementById("btn_resp_3");
    const mostrarReposta4 =document.getElementById("btn_resp_4");
    const mostrarReposta5 =document.getElementById("btn_resp_5");
    const mostrarReposta6 =document.getElementById("btn_resp_6");
    const mostrarReposta7 =document.getElementById("btn_resp_7");
    const mostrarReposta8 =document.getElementById("btn_resp_8");
    const mostrarReposta9 =document.getElementById("btn_resp_9");
    const mostrarReposta10 =document.getElementById("btn_resp_10");


    //guardando as respostas.
    const resposta1 = document.getElementById("reposta1");
    const resposta2 = document.getElementById("reposta2");
    const resposta3 = document.getElementById("reposta3");
    const resposta4 = document.getElementById("reposta4");
    const resposta5 = document.getElementById("reposta5");
    const resposta6 = document.getElementById("reposta6");
    const resposta7 = document.getElementById("reposta7");
    const resposta8 = document.getElementById("reposta8");
    const resposta9 = document.getElementById("reposta9");
    const resposta10 = document.getElementById("reposta10");


    //mostrar resposta ao clicar
    mostrarReposta1.addEventListener('click', () => {
        if (abrir1 === 1){
            resposta1.style.display = 'block';
            mostrarReposta1.style.minWidth = '100%';
            abrir1 = 0;
        }
        else{
            resposta1.style.display = 'none';
            mostrarReposta1.style.minWidth = '0%';
            abrir1 = 1;
        }
    });

    mostrarReposta2.addEventListener('click', () => {
        if (abrir2 === 1){
            resposta2.style.display = 'block';
            mostrarReposta2.style.minWidth = '100%';
            abrir2 = 0;
        }
        else{
            resposta2.style.display = 'none';
            mostrarReposta2.style.minWidth = '0%';
            abrir2 = 1;
        }
    });

    mostrarReposta3.addEventListener('click', () => {
        if(abrir3 === 1){
        resposta3.style.display = 'block';
        mostrarReposta3.style.minWidth = '100%';
        abrir3 = 0;
        }
        else{
            resposta3.style.display = 'none';
            mostrarReposta3.style.minWidth = '0%';
            abrir3 = 1;
        }
    });

    mostrarReposta4.addEventListener('click', () => {
        if(abrir4 === 1){
            resposta4.style.display = 'block';
            mostrarReposta4.style.minWidth = '100%';
            abrir4 = 0;
        }
        else{
            resposta4.style.display = 'none';
            mostrarReposta4.style.minWidth = '0%';
            abrir4 = 1;
        }
    });

    mostrarReposta5.addEventListener('click', () => {
        if(abrir5 === 1){

        resposta5.style.display = 'block';
        mostrarReposta5.style.minWidth = '100%';
        abrir5 = 0;
        }
        else{
            resposta5.style.display = 'none';
            mostrarReposta5.style.minWidth = '0%';
            abrir5 = 1;
        }
    });

    mostrarReposta6.addEventListener('click', () => {
        if(abrir6 === 1){

        resposta6.style.display = 'block';
        mostrarReposta6.style.minWidth = '100%';
        abrir6 = 0;
        }
        else{
            resposta6.style.display = 'none';
            mostrarReposta6.style.minWidth = '0%';
            abrir6 = 1;
        }
    });

    mostrarReposta7.addEventListener('click', () => {
        if(abrir7 === 1){

        resposta7.style.display = 'block';
        mostrarReposta7.style.minWidth = '100%';
        abrir7 = 0;
        }
        else{
            resposta7.style.display = 'none';
            mostrarReposta7.style.minWidth = '0%';
            abrir7 = 1;
        }
    });

    mostrarReposta8.addEventListener('click', () => {
        if(abrir8 === 1){

        resposta8.style.display = 'block';
        mostrarReposta8.style.minWidth = '100%';
        abrir8 = 0;
        }
        else{
            resposta8.style.display = 'none';
            mostrarReposta8.style.minWidth = '0%';
            abrir8 = 1;
        }
    });

    mostrarReposta9.addEventListener('click', () => {
        if(abrir9 === 1){

        resposta9.style.display = 'block';
        mostrarReposta9.style.minWidth = '100%';
        abrir9 = 0;
        }
        else{
            resposta9.style.display = 'none';
            mostrarReposta9.style.minWidth = '0%';
            abrir9 = 1;
        }
    });

    mostrarReposta10.addEventListener('click', () => {
        if(abrir10 === 1){

        resposta10.style.display = 'block';
        mostrarReposta10.style.minWidth = '100%';
        abrir10 = 0;
        }
        else{
            resposta10.style.display = 'none';
            mostrarReposta10.style.minWidth = '0%';
            abrir10 = 1;
        }
    });






