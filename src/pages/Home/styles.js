import styled from 'styled-components';
import janeiroImg from '../../images/janeiro.png';
import fevereiroImg from '../../images/fevereiro.png';
import marçoImg from '../../images/março.png';
import abrilImg from '../../images/abril.png';
import maioImg from '../../images/maio.png';
import junhoImg from '../../images/junho.png';
import julhoImg from '../../images/julho.png';
import agostoImg from '../../images/agosto.png';
import setembroImg from '../../images/setembro.png';
import outubroImg from '../../images/outubro.png';
import novembroImg from '../../images/novembro.png';
import dezembroImg from '../../images/dezembro.png';


// Estilização do Container
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas:
        "header header"                      
        "menu content"
                
`;
//JaneiroImg
export const ProfileJan = styled.div`
    background: url(${janeiroImg}) no-repeat left;
    background-size: contain;  
    position: absolute;
    top: 14%;
    left: 0%;         
    width: 100px;  
    height: 100px;   
    //transform: rotate(-90deg); 
`;
//FevereiroImg
export const ProfileFev = styled.div`
    background: url(${fevereiroImg}) no-repeat left;
    background-size: contain;  
    position: absolute;
    top: 21%;
    left:11%;         
    width: 100px;  
    height: 100px;   
    //transform: rotate(-90deg); 
`;

//MarçoImg
export const ProfileMar = styled.div`
    background: url(${marçoImg}) no-repeat left;
    background-size: contain;  
    position: absolute;
    top: 29%;
    left: 0%;         
    width: 100px;  
    height: 100px;   
    //transform: rotate(-90deg); 
`;

//AbrilImg
export const ProfileAbr = styled.div`
    background: url(${abrilImg}) no-repeat left;
    background-size: contain;  
    position: absolute;
    top: 36%;
    left: 11%;         
    width: 100px;  
    height: 100px;   
    //transform: rotate(-90deg); 
`;

//MaioImg
export const ProfileMai = styled.div`
    background: url(${maioImg}) no-repeat left;
    background-size: contain;  
    position: absolute;
    top: 44%;
    left: 0%;         
    width: 100px;  
    height: 100px;   
    //transform: rotate(-90deg); 
`;

//JunhoImg
export const ProfileJun = styled.div`
    background: url(${junhoImg}) no-repeat left;
    background-size: contain;  
    position: absolute;
    top: 51%;
    left: 11%;         
    width: 100px;  
    height: 100px;   
    //transform: rotate(-90deg); 
`;

//JulhoImg
export const ProfileJul = styled.div`
    background: url(${julhoImg}) no-repeat left;
    background-size: contain;  
    position: absolute;
    top: 60%;
    left: 0%;         
    width: 100px;  
    height: 100px;   
    //transform: rotate(-90deg); 
`;


//AgostoImg
export const ProfileAgo = styled.div`
    background: url(${agostoImg}) no-repeat left;
    background-size: contain;  
    position: absolute;
    top: 67%;
    left: 11%;         
    width: 100px;  
    height: 100px;   
    //transform: rotate(-90deg); 
`;

//SetembroImg
export const ProfileSet = styled.div`
    background: url(${setembroImg}) no-repeat left;
    background-size: contain;  
    position: absolute;
    top: 75%;
    left: 0%;         
    width: 100px;  
    height: 100px;   
    //transform: rotate(-90deg); 
`;

//OutubroImg
export const ProfileOut = styled.div`
    background: url(${outubroImg}) no-repeat left;
    background-size: contain;  
    position: absolute;
    top: 82%;
    left: 11%;         
    width: 100px;  
    height: 100px;   
    //transform: rotate(-90deg); 
`;

//NovembroImg
export const ProfileNov = styled.div`
    background: url(${novembroImg}) no-repeat left;
    background-size: contain;  
    position: absolute;
    top: 91%;
    left: 0%;         
    width: 100px;  
    height: 100px;   
    //transform: rotate(-90deg); 
`;

//DezembroImg
export const ProfileDez = styled.div`
    background: url(${dezembroImg}) no-repeat left;
    background-size: contain;  
    position: absolute;
    top: 98%;
    left: 11%;         
    width: 100px;  
    height: 100px;   
    //transform: rotate(-90deg); 
`;

// Estilização do LI
export const Menu = styled.ul`
    grid-area: menu;
    padding-top: 34px;  
             
    
    > li {
        text-align: left;
        margin-top: -48px;
        padding: 40px;   
        border-right: 5px solid #071d41; 
        margin-left:50px;
        list-style: none;
            
    };    
`;

// Estilização do UBS
export const UBS = styled.div`
    grid-area: ubs;
    background: violet;
    height: 50px;
    text-align: center;
    font-size: 12px;
    
    > h1 {
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.PEC};
    }
    > strong {
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.PEC};
    }
`;

// Estilização do Content
export const Content = styled.div`
    grid-area: content;
    background: blue;
    
`;