import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas:
        "header header"
        "menu search"
        "menu content"
        "newnote content"; 
`;

export const Menu = styled.ul`
    grid-area: menu;
    

    padding-top: 64px;
    text-align: center;    
    
    > li {
        margin-bottom: 24px;  
        
        
        
    }
    
`;


export const Search = styled.div`
    grid-area: search;
    background: violet;
`;

export const Content = styled.div`
    grid-area: content;
    background: blue;
`;

export const NewNote = styled.button`
    grid-area: newnote;
    background: yellow;
`;
