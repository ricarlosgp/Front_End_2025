import styled from "styled-components";
import semusImg from '../../images/semus.png';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    background-color: ${({ theme }) => theme.COLORS.PEC};
    grid-area: header;

    height: 50px;
    width: 100%;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 190px;
        line-height: 24px;
        
        h1 {
            font-size: 15px;
            color: ${({ theme }) => theme.COLORS.WHITE};     
            font-weight: bold; 
            font-family: "IBM Plex Sans", sans-serif;  
        }

        h3 {
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
    margin-top: 10%;
    left: -7%;
    transform: translate(-50%, -50%);
    width: 135px; 
    height: 135px; 
`;

export const Logout = styled.button`
    border: none; 
    background: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -450px;

    > svg {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
    }

    > span {
        position: absolute;
        top: 15px; /* Ajusta a posição vertical */
        right: 30px; /* Alinha à direita do botão */
        font-size: 12px; /* Tamanho do texto */
        color: ${({ theme }) => theme.COLORS.WHITE};
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.2s ease-in-out;
    }

    &:hover > span {
        visibility: visible;
        opacity: 1;        
    }
`;

export const ChangePasswordButton = styled.button`
    border: none; 
    background: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;

    > svg {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
    }

    > span {
        position: absolute;
        top: 9px; /* Ajusta a posição vertical */
        right: 30px; /* Alinha à direita do botão */
        font-size: 12px; /* Tamanho do texto */
        color: ${({ theme }) => theme.COLORS.WHITE};
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.2s ease-in-out;
    }

    &:hover > span {
        visibility: visible;
        opacity: 1;
    }
`;
