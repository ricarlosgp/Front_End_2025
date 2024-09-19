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

    > h2 { //Crie sua conta
        font-size: 24px;
        margin: 14px 0;
        color: ${({ theme }) => theme.COLORS.BANDEIRA};
        
    }    

    > a {//Voltar para o Login
        margin-top: 20px;
        color: ${({ theme }) => theme.COLORS.BANDEIRA};
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        
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
    top: 86%;
    left: 125%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 200px;  
    height: 200px; 
    
`;

export const SemusProfile = styled.div`
    background: url(${semusImg}) no-repeat center center;
    background-size: contain;  // Ajuste para "cover" ou "contain" conforme necessário
    position: absolute;
    top: 15%;
    left: 125%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 300px;  // Ajuste a largura conforme necessário
    height: 300px; // Ajuste a altura conforme necessário
    
`;

