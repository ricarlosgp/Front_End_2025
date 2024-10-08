import styled from 'styled-components';

// Estilização do Container
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas:
        "header header"                      
        "menu content";       
`;

// Estilização do Menu (ul e li)
export const Menu = styled.ul`
    grid-area: menu;
    
    padding-left: 30px;  /* Ajuste o padding lateral do menu */
    display: flex;
    flex-direction: column;  /* Exibe os itens verticalmente */
    gap: 18px;  /* Espaço entre os itens */
    margin-top: -25px;

    > li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;  /* Altura do retângulo */
        width: 130px;  /* Largura do retângulo */
        border-radius: 8px;  /* Bordas arredondadas */
        margin: -7 auto;  /* Centraliza o retângulo horizontalmente */
        list-style: none;
        
    }

    /* Estilização baseada no nome da classe */
    .jan { background-color: #EAEAEA; }  /* Cor para JAN */
    .fev { background-color: #6A0DAD; }  /* Cor para FEV */
    .mar { background-color: #DDA0DD; }  /* Cor para MAR */
    .abr { background-color: #008000; }  /* Cor para ABR */
    .mai { background-color: #FFD700; }  /* Cor para MAI */
    .jun { background-color: #FF0000; }  /* Cor para JUN */
    .jul { background-color: #008000; }  /* Cor para JUL */
    .ago { background-color: #A020F0; }  /* Cor para AGO */
    .set { background-color: #FFFF00; }  /* Cor para SET */
    .out { background-color: #FFC0CB; }  /* Cor para OUT */
    .nov { background-color: #0000FF; }  /* Cor para NOV */
    .dez { background-color: #FF0000; }  /* Cor para DEZ */
`;

// Estilização do UBS
export const UBS = styled.div`
    grid-area: ubs;
    //background: violet;
    height: 50px;
    text-align: center;
    font-size: 12px;
    margin-top: -50px;
    
    > h1 {
        font-size: 15px;
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
    //background: blue;
`;
