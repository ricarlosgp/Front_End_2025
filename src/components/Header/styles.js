import styled from "styled-components";
import semusImg from '../../images/semus.png';

export const Container = styled.header`
    background-color: ${({ theme })=> theme.COLORS.PEC};
    grid-area: header;

    height: 50px;
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
            font-size: 20px;
            color: ${({ theme  }) => theme.COLORS.WHITE};     
            font-weight: bold; 
            font-family: "IBM Plex Sans", sans-serif;  
        }

        strong {
            font-size: 15px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-weight: bold;
            font-family: "IBM Plex Sans", sans-serif;  
        }

    }
`;

export const SemusProfile = styled.div`
    background: url(${semusImg}) no-repeat center center;
    background-size: contain;  
    position: absolute;
    margin-top:10%;
    left: -7%;
    transform: translate(-50%, -50%);
    width: 135px; 
    height: 135px; 
    
`;

export const Logout = styled.button`
    border: none; 
    background: none;
    
    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 24px;
    }

`;
