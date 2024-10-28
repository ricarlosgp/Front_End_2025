import styled from "styled-components";
import aberturaImg from "../../images/abertura.jpg";
import semusImg from "../../images/semus.png";
import timbirasImg from "../../images/timbiras.png";

// CONTAINER até 576px
export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;    
`;

// IMG DE ABERTURA até 576px
export const BackgroundImage_abertura = styled.div`
  flex: 1;
  background: url(${aberturaImg}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

// FORM até 576px
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 100vh;

  // 769 a 992px = preto
  @media (min-width: 768px) and (max-width: 992px) {
    width: 55%;          
  }

  // 993 a 1200px = amarela
  @media (min-width: 993px) and (max-width: 1200px) {
    width: 55%;
  }

  // 1201px para cima = rosa
  @media (min-width: 1201px) {
    width: 40%; 
  } 
`;

/* --------FIM DO FORM--------- */

/* --------INÍCIO DO MAIN--------- */

// MAIN até 576px
export const Main = styled.div`
  //background-color: aqua;
  display: flex;
  align-items: center; /* Alinha verticalmente ao centro */
  justify-content: center; /* Alinha horizontalmente ao centro */
  flex-direction: column; /* Coloca os elementos em coluna */
  text-align: center; /* Centraliza o texto */
  width: 100%; /* Largura total */
  height: 100vh; /* Ocupa a altura total da tela */  
  position: relative; /* Para que outros elementos possam ser posicionados em relação a ele */
  margin: 0; /* Remove margens */
  padding: 2px;

  // MAIN 577 a 767px = azul
  @media (min-width: 577px) and (max-width: 767px) {
    //background-color: blue;
    border: 5px solid red;
    padding: 25px;
  } 

  // MAIN 768 a 992px = preto
  @media (min-width: 768px) and (max-width: 992px) {
    //border: 5px solid red;
    padding: 25px;
    //background-color: black; 
  } 

  // MAIN 993 a 1200px = amarela
  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 30px;
    //background-color: yellow; /* Mantém a transparência */
  } 

  // MAIN 1201px para cima = rosa
  @media (min-width: 1201px) {
    margin: 0;
    padding: 0;
    height: 100vh;
    padding: 30px;
    //background-color: pink; /* Mantém a transparência */
  }

  // SEMUS até 576px
  .image_semus {
    background: url(${semusImg}) no-repeat center center;
    background-size: contain;
    width: 60vw;
    height: 20vw;
    margin-bottom: 40px;

    // SEMUS 769 a 992px = preto
    @media (min-width: 768px) and (max-width: 992px) {
      width: 40vw; // VW(viewport width) ocupará a largura da janela de visualização, independentemente do tamanho da tela.
      height: auto;
      aspect-ratio: 3 / 1; /* Ajuste a proporção da altura do elemento em sua caixa. Precisa do height como auto. Foi inserido largura 3 vezes maior que a 1 altura*/ 
      //border: 5px solid red;
    }

    // SEMUS 993 a 1200px = amarela 
    @media (min-width: 993px) and (max-width: 1200px) {
      width: 40vw; // VW(viewport width) ocupará a largura da janela de visualização, independentemente do tamanho da tela.
      height: auto;
      aspect-ratio: 3 / 1; /* Ajuste a proporção da altura do elemento em sua caixa. Precisa do height como auto. Foi inserido largura 3 vezes maior que a 1 altura*/ 
      //border: 5px solid red;
    }

    // SEMUS acima de 1200px
    @media (min-width: 1201px) {
      margin: 20px;
      width: 50%;
      height: auto;
      aspect-ratio: 3 / 1;
      //border: 5px solid red;
    } 
  }

  // H1 até 576px
  h1 {
    background: none;
    color: ${({ theme }) => theme.COLORS.PEC};
    font-size: 4vw;
    font-weight: 700;
    display: inline-block;
    width: auto;
    height: auto;
    margin-bottom: 20px;

    // H1 993 a 1200px
    @media (min-width: 993px) and (max-width: 1200px) {
      font-size: 30px;
    }

    // H1 1201 para cima
    @media (min-width: 1201px) {
      font-size: 15px;
    }
  }

  // INPUT 993 a 1200px
  input {
    @media (min-width: 993px) and (max-width: 1200px) {
      font-size: 30px;      
    }

    // a 1201 para cima
    @media (min-width: 1201px) {
      font-size: 30px;
      
    }
  }

  

  // BUTTON até 576px
  Button {
    width: 30vw;
    font-size: 3vw;
    margin-bottom: 20px;

    // BUTTON 1201 para cima
    @media (min-width: 1201px) {
      margin: 20px;
      width: 40%;
      height: auto;
      aspect-ratio: 3 / 1;
      font-size: 30px;
      // border: 5px solid red;
    }
  }

  // até 576px
  Button:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  // até 576px
  a {
    color: ${({ theme }) => theme.COLORS.PEC};
    font-size: 18px;
    font-weight: 700;
    display: inline-block;
    width: auto;
    height: auto;
    margin-bottom: 40px;

    // a 993 a 1200px
    @media (min-width: 993px) and (max-width: 1200px) {
      font-size: 3vw;
    }

    // a 1201 para cima
    @media (min-width: 1201px) {
      font-size: 20px;
    }
  }

  // para todos
  a:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  // até 576px
  .image_timbiras {
    background: url(${timbirasImg}) no-repeat center center;
    background-size: contain;
    width: 60vw; /* Ajusta o tamanho responsivamente */
    aspect-ratio: 5 / 2; /* Define a proporção da imagem (ajuste conforme necessário) */
    display: flex;
    text-align: center;

    // TIMBIRAS 768 a 992px = preto
    @media (min-width: 768px) and (max-width: 992px) {
      width: 35vw; // VW(viewport width) ocupará a largura da janela de visualização, independentemente do tamanho da tela.
      height: auto;
      aspect-ratio: 2 / 1; /* Ajuste a proporção da altura do elemento em sua caixa. Precisa do height como auto. Foi inserido largura 2 vezes maior que a 1 altura*/ 
      border: 5px solid red;
    }
    // TIMBIRAS 993 a 1200px = preto
    @media (min-width: 993px) and (max-width: 1200px) {
      width: 35vw; // VW(viewport width) ocupará a largura da janela de visualização, independentemente do tamanho da tela.
      height: auto;
      aspect-ratio: 2 / 1; /* Ajuste a proporção da altura do elemento em sua caixa. Precisa do height como auto. Foi inserido largura 2 vezes maior que a 1 altura*/ 
      border: 5px solid red;
    }

    // 1201px para cima = rosa
    @media (min-width: 1201px) {
      width: 50%;
    } 
  }
`; /* --------FIM DO MAIN--------- */
