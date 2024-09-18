import styled from "styled-components";
import theme from "../../styles/theme";
import semusImg from '../../images/semus.png';

export const Container = styled.header`
    background-color: ${({ theme })=> theme.COLORS.BACKGROUND_800};
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme })=> theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;   
    
    
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 190px;
        line-height: 24px;
        
        span {
            font-size: 18px;
            color: ${({ theme  }) => theme.COLORS.WHITE};     
            font-weight: bold;   
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-weight: bold;
        }

    }
`;

export const SemusProfile = styled.div`
    background: url(${semusImg}) no-repeat center center;
    background-size: contain;  
    position: absolute;
    margin-top:5%;
    left: -4%;
    transform: translate(-50%, -50%);
    width: 235px; 
    height: 86px; 
    
`;

export const Logout = styled.button`
    border: none; 
    background: none;
    
    > svg {
        color: ${({ them }) => theme.COLORS.GRAY_100};
        font-size: 24px;
    }

`;
