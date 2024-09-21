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
    position: relative;
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h2 { //Crie sua conta
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PEC};
        padding-bottom: 13px;
        
    }    

    > a {//Voltar para o Login
        margin-top: 20px;
        color: ${({ theme }) => theme.COLORS.PEC};
        
    }        
`;

export const Background = styled.div`
    flex:1;
    background: url(${jalecoImg}) no-repeat center center;
    background-size: cover;
`;

export const Background_semus = styled.div`    
    position: absolute; 
    top: 40px;
    left: 150px;
    background: url(${semusImg}) no-repeat center center;
    background-size: cover;
    width: 270px;  
    height: 70px;         
`;

export const Background_timbiras = styled.div`    
    position: absolute; 
    top: 600px;
    left:150px;
    background: url(${timbirasImg}) no-repeat center center;
    background-size: cover;
    width: 270px;  
    height: 120px;
    z-index: 1;     
      
`;

