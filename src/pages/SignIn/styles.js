import styled from "styled-components";
import aberturaImg from "../../images/abertura.jpg";
import semusImg from "../../images/semus.png";
import timbirasImg from "../../images/timbiras.png";

// VERTICAL - Container + BackgroundImage_abertura
export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

// VERTICAL - Estilos para BackgroundImage_abertura
export const BackgroundImage_abertura = styled.div`
  flex: 1;
  background: url(${aberturaImg}) no-repeat center center;
  background-size: cover;
  height: 100vh;
`;

//VERTICAL FORM - CELULAR
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 100vh;
  margin: 0;
  padding: 0;

  //VERTICAL - FORM
  @media screen and (min-width: 700px) {
    width: 700px;
  }
  //HORIZONTAL FORM - celular
  @media (max-width: 750px) and (orientation: landscape) {
    width: 400px;
  }

  @media (min-width: 751px) and (orientation: landscape) {
    width: 550px;
  }
`;

// VERTICAL MAIN - CELULAR
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;

  //VERTICAL MAIN - tablet,nb,ds
  @media (min-width: 700px) {
    width: 650px;
    padding: 20px;
  }
  // VERTICAL MAIN - celular
  @media (max-width: 750px) and (orientation: landscape) {
    width: 400px;
    margin: 0;
    padding: 5px;
    display: flex;
    align-items: center;
    background: aqua;
  }

  @media (min-width: 751px) and (orientation: landscape) {
    width: 550px;
    margin: 0;
    padding: 5px;
    display: flex;
    align-items: center;
    background: aqua;
  }

  // VERTICAL SEMUS - CELULAR
  .image_semus {
    background: url(${semusImg}) no-repeat center center;
    background-size: contain;
    width: 200px;
    height: 70px;
    margin-bottom: 20px;

    // VERTICAL SEMUS - tablet,nb,ds
    @media screen and (min-width: 700px) {
      width: 350px;
      height: 90px;
      margin: 60px;
    }
    // HORIZONTAL SEMUS - celular
    @media (max-width: 750px) and (orientation: landscape) {
      width: 250px;
      height: 50px;
      margin: 2px;
      //border:5px solid red;
    }

    @media (min-width: 751px) and (orientation: landscape) {
      width: 250px;
      height: 50px;
      margin: 2px;
      border: 5px solid red;
    }
  }
  // VERTICAL H1 - CELULAR
  h1 {
    background: none;
    color: ${({ theme }) => theme.COLORS.PEC};
    font-size: 18px;
    font-weight: 700;
    display: inline-block;
    width: auto;
    height: auto;
    margin-bottom: 20px;

    // VERTICAL H1 - tablet,nb,ds
    @media screen and (min-width: 700px) {
      font-size: 30px;
      margin-bottom: 40px;
    }

    // HORIZONTAL H1 - celular
    @media (max-width: 750px) and (orientation: landscape) {
      font-size: 20px;
      margin: 5px;
    }

    @media (min-width: 751px) and (orientation: landscape) {
      font-size: 20px;
      margin: 7px;
    }
  }
  //VERTICAL INPUT - tablet,nb,ds
  input {
    @media screen and (min-width: 700px) {
      font-size: 30px;
    }
    //HORIZONTAL INPUT - celular
    @media (max-width: 750px) and (orientation: landscape) {
      height: 50px;
      font-size: 20px;
    }
    @media (min-width: 751px) and (orientation: landscape) {
      height: 59px;
      font-size: 20px;
    }
  }
  //VERTICAL BUTTON - CELULAR
  Button {
    width: 200px;
    font-size: 18px;
    margin-bottom: 20px;

    // VERTICAL BUTTON - tablet,nb,ds
    @media screen and (min-width: 700px) {
      font-size: 25px;
      width: 200px;
      height: 40px;
      margin: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    //HORIZONTAL BUTTON - celular
    @media (max-width: 750px) and (orientation: landscape) {
      margin: 0;
      height: 40px;
      font-size: 20px;
    }
    @media (min-width: 751px) and (orientation: landscape) {
      margin: 5px;
      height: 40px;
      font-size: 20px;
    }
  }

  Button:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  //VERTICAL A - CELULAR
  a {
    color: ${({ theme }) => theme.COLORS.PEC};
    font-size: 18px;
    font-weight: 700;
    display: inline-block;
    width: auto;
    height: auto;
    margin-bottom: 20px;

    // VERTICAL A - tablet,nb,ds
    @media screen and (min-width: 700px) {
      font-size: 25px;
      width: 200px;
      height: 40px;
      margin: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    //HORIZONTAL A - celular
    @media (max-width: 750px) and (orientation: landscape) {
      margin: 2px;
      height: 40px;
      font-size: 18px;
    }

    @media (min-width: 751px) and (orientation: landscape) {
      margin: 2px;
      height: 40px;
      font-size: 20px;
    }
  }

  a:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  //VERTICAL TIMBIRAS - celular
  .image_timbiras {
    background: url(${timbirasImg}) no-repeat center center;
    background-size: contain;
    width: 200px;
    height: 90px;
    display: flex;
    text-align: center;

    // VERTICAL TIMBIRAS - tablet,nb,ds
    @media screen and (min-width: 700px) {
      width: 350px;
      height: 150px;
      margin: 30px;
    }
    // HORIZONTAL TIMBIRAS - celular
    @media (max-width: 750px) and (orientation: landscape) {
      margin: 0;
      height: 45px;
    }

    @media (min-width: 751px) and (orientation: landscape) {
      margin: 2px;
      height: 80px;
    }
  }
`;
