import styled from "styled-components";
import aberturaImg from "../../images/abertura.jpg";
import semusImg from "../../images/semus.png";
import timbirasImg from "../../images/timbiras.png";
//estilizando container
export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100dvh; 
  
 
`;
//centralizando Form nos celulares e abaixo do tablet (semus, principal(h1,input,Button,link), timbiras)
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 100vdh;
  padding-top: 15px;
  margin-top:auto;
  margin-bottom: auto;
  padding: 0;
   
  

  //centralizando do tablet para cima
  @media screen and (min-width: 400px)  {
    width: 400px;    
    display: flex;
    margin-top:auto;
    margin-bottom: auto;    
    
  }
 
  //tablet, notebook e desktop
  @media screen and (min-width: 700px) {
    width: 500px;
    
  }
  //CELULAR - principal(h1,input,Button,link)
  .principal {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
      
        //tablet  
        @media screen and (min-width: 600px) {
        width: 450px;
        height: auto;
        padding: 0;    
        }      
  }

  h1 {
    background: none;
    color: ${({ theme }) => theme.COLORS.PEC};
    border: none;
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  Button {
    width: 60%;
    font-size: 20px;
  }
  Button:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
    transform-origin: center;
  }
  a {
    background: none;
    color: ${({ theme }) => theme.COLORS.PEC};
    border: none;
    font-size: 20px;
    font-weight: 700;
    padding-top: 20px;
  }
  a:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
    transform-origin: center;
  }
`;

export const Background_semus = styled.div`
  background: url(${semusImg}) no-repeat center center;
  background-size: contain;
  width: 90%;
  height: 90px; 
  @media screen and (min-width: 400px) {
    width: 250px;
    height: 80px; 
    
  } 
  
`;

export const Background_timbiras = styled.div`
  background: url(${timbirasImg}) no-repeat center center;
  background-size: contain;
  width: 150px;
  height: 90px;
  margin-top:50px;
  

  @media screen and (min-width: 400px) {
    width: 250px;
    height: 80px;
    margin-top:70px;    
    
  } 
`;

export const Background_abertura = styled.div`
  flex: 1;
  background: url(${aberturaImg}) no-repeat center center;
  background-size: cover;
  height: 100vdh;
  
`;
