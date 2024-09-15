import styled from 'styled-components';
import semusImg from '../../'

export const Container = styled.div`

    height: 100vh;

    display: flex;
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
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    > p {//secretaria municipal de saúde
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > h2 { //Faça seu login
        font-size: 24px;
        margin-top: 84px;
        margin-bottom: 24px;
    }    

    > a {
        margin-top: 34px;
        color: ${({ theme }) => theme.COLORS.ORANGE};

    }
    export const Background = styled.div`
    flex: 1;
    background: url(${semus_logoImg}) no-repeat center center;
    background-size: cover;
    
    
`;

