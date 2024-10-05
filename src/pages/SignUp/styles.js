import styled from "styled-components";
import jalecoImg from "../../images/jaleco.jpg";
import timbirasImg from "../../images/timbiras.png";
import semusImg from "../../images/semus.png";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza itens horizontalmente */
  justify-content: center; /* Centraliza itens verticalmente */
  padding: 3rem;
  width: auto; /* Largura do form */
  height: 680px; /* Altura fixa para o form */
  margin: 20px 140px auto;

  .texto {
    display: flex; /* Usar flexbox para centralizar */
    flex-direction: column; /* Direção vertical dos itens */
    align-items: center; /* Centraliza horizontalmente */
    justify-content: center; /* Centraliza verticalmente */
    width: 100%; /* Largura total para preencher o espaço */
    padding: 20px; /* Espaçamento interno, se necessário */
    //margin-bottom: 20px; /* Espaço abaixo da mensagem */

    > h1 {
      background: none;
      color: ${({ theme }) => theme.COLORS.PEC};
      border: none;
      font-size: 20px;
      font-weight: 700;
      padding-bottom: 20px;
      padding-top: 30px;
    }

    > a {
      background: none;
      color: ${({ theme }) => theme.COLORS.PEC};
      border: none;
      font-size: 20px;
      font-weight: 700;
      padding-top: 20px;
      padding-bottom: 50px;
    }
  }
`;

export const Background_semus = styled.div`
  background: url(${semusImg}) no-repeat center center;
  background-size: cover;
  width: 230px;
  height: 60px;
`;

export const Background_timbiras = styled.div`
  background: url(${timbirasImg}) no-repeat center center;
  background-size: cover;
  width: 130px;
  height: 80px;
  left: auto;
`;

export const Background_jaleco = styled.div`
  flex: 1;
  background: url(${jalecoImg}) no-repeat center center;
  background-size: cover;
`;
