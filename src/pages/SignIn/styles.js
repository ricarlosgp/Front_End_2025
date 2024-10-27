import styled from "styled-components";
import aberturaImg from "../../images/abertura.jpg";
import semusImg from "../../images/semus.png";
import timbirasImg from "../../images/timbiras.png";

// Container + BackgroundImage_abertura
export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

// Estilos para BackgroundImage_abertura
export const BackgroundImage_abertura = styled.div`
  flex: 1;
  background: url(${aberturaImg}) no-repeat center center;
  background-size: cover;
  height: 100vh;
`;

//CELULAR - estilizando o Form(todo o main)
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 100vh;
  margin: 0;
  padding: 0;

  @media (orientation: landscape) {
    width: 400px;
  }
  
`;

// CELULAR
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;

  

 

  

  /* CELULAR */
  .image_semus {
    background: url(${semusImg}) no-repeat center center;
    background-size: contain;
    width: 200px;
    height: 70px;
    margin-bottom: 20px;
    

    @media (orientation: landscape) {
      width: 150px;
      height: 40px;
      margin: 5px;
    }

 

    //Tablet, NB,PC


  }

  h1 {
    background: none;
    color: ${({ theme }) => theme.COLORS.PEC};
    font-size: 18px;
    font-weight: 700;
    display: inline-block;
    width: auto;
    height: auto;
    margin-bottom: 20px;

    @media (orientation: landscape) {
      font-size: 15px;
      margin-bottom: 0;
    }
  }

  Button {
    width: 200px;
    font-size: 18px;
    margin-bottom: 20px;

    @media (orientation: landscape) {
      width: 100px;
      height: 40px;
      font-size: 15px;
      margin: 5px;
    }
  }

  Button:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  a {
    color: ${({ theme }) => theme.COLORS.PEC};
    font-size: 18px;
    font-weight: 700;
    display: inline-block;
    width: auto;
    height: auto;
    margin-bottom: 20px;

    @media (orientation: landscape) {
      font-size: 15px;
      margin-bottom: 0;
    }
  }

  a:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  .image_timbiras {
    background: url(${timbirasImg}) no-repeat center center;
    background-size: contain;
    width: 200px;
    height: 90px;
    display: flex;
    text-align: center;

    @media (orientation: landscape) {
      width: 140px;
      height: 60px;
    }
  }
`;
