import styled from 'styled-components';
import jalecoImg from '../../images/jaleco.jpg'; 
import timbirasImg from '../../images/timbiras.png'
import semusImg from '../../images/semus.png'

export const Container = styled.div`
    display: flex;
    height: 100vh;  
    align-items: stretch;    
`;

export const Form = styled.form`
    
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {//SEMUS
        font-size: 58px;
        color: ${({ theme }) => theme.COLORS.SEMUS3};
        
    }
    
    > p {//secretaria municipal de saúde
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.SEMUS3};
        font-weight: 700;
    }

    > h2 { //Faça seu login
        font-size: 24px;
        margin-top: 84px;
        margin-bottom: 24px;
        color: ${({ theme }) => theme.COLORS.SEMUS3};
        font-weight: 800;
        font-family: "Raleway", sans-serif;
    }    

    > a {//criar conta
        margin-top: 34px;
        color: ${({ theme }) => theme.COLORS.SEMUS3};
        font-family: "Raleway", sans-serif;
        font-weight: 800;
    }        
    `;



export const Background = styled.div`
    flex: 1;
    background: url(${jalecoImg}) no-repeat center center;
    background-size: cover;
    position: relative;
`;

export const TimbirasProfile = styled.div`
    background: url(${timbirasImg}) no-repeat center center;
    background-size: contain;  // Ajuste para "cover" ou "contain" conforme necessário
    position: absolute;
    top: 40%;
    left: 20%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 500px;  // Ajuste a largura conforme necessário
    height: 400px; // Ajuste a altura conforme necessário
    
`;

export const SemusProfile = styled.div`
    background: url(${semusImg}) no-repeat center center;
    background-size: contain;  // Ajuste para "cover" ou "contain" conforme necessário
    position: absolute;
    top: 70%;
    left: 20%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 230px; 
    height: 100px; 
    
`;

