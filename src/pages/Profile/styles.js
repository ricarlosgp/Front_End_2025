import styled from 'styled-components';
import semusImg from '../../images/semus.png'

export const Container = styled.div`
    width: 100%; 
    
    > header {
        width: 100%; 
        height: 144px;    
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        
        display: flex;
        align-items: center;

        padding: 0 124px;

        svg {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 34PX;
        }    
    }
`;
export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;
        
    > div:nth-child(3){
        margin-top:30px;
    }
`;
export const Avatar = styled.div`
    position: relative;
    margin-top: 6%;
        
`;
export const SemusProfile = styled.div`
    background: url(${semusImg}) no-repeat center center;
    background-size: contain;  
    position: absolute;
    margin-top:-1%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px; 
    height: 300px; 
    
`;
export const FiCameraProfile = styled.div`
    width: 38px;
    height: 34px;

    background-color: ${({ theme }) => theme.COLORS.SEMUS2};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    //bottom: -30%;
    right: 41%;
    margin-top: -6%;  
    
    input {
        display: none;     
        cursor: pointer;
    }   
        
    svg {
        
        color: ${({ theme }) => theme.COLORS.WHITE};
        cursor: pointer;
        width: 28px;
        height: 28px;        
    }
    
`;




   

 

