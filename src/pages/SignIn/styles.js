import styled from "styled-components";
import jalecoImg from "../../images/jaleco.jpg";
import semusImg from "../../images/semus.png";
import timbirasImg from "../../images/timbiras.png";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    height: 100vh;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  max-width: 350px;
  height: auto;
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100vh;
    width: 300px;
  };

  .texto {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;

    > h1 {
      background: none;
      color: ${({ theme }) => theme.COLORS.PEC};
      border: none;
      font-size: 18px;
      font-weight: 700;
      padding-bottom: 20px;
      padding-top: 30px;
    }

    > a {
      background: none;
      color: ${({ theme }) => theme.COLORS.PEC};
      border: none;
      font-size: 18px;
      font-weight: 700;
      padding-top: 10px;
      padding-bottom: 30px;
    }
  }    
`;

export const Background_semus = styled.div`
  background: url(${semusImg}) no-repeat center center;
  background-size: contain; /* Mudar de cover para contain para ajustar ao tamanho */
  width: 150px; /* Reduzindo o tamanho da imagem */
  height: 40px;

`;

export const Background_timbiras = styled.div`
  background: url(${timbirasImg}) no-repeat center center;
  background-size: contain;
  width: 100px;
  height: 60px;
 
`;

export const Background_jaleco = styled.div`
  flex: 1;
  background: url(${jalecoImg}) no-repeat center center;
  background-size: cover;
  height: 100%; /* Mantém o background preenchendo toda a altura */
  
`;

