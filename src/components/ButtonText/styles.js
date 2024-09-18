import styled from 'styled-components';

export const Container = styled.button` 
    background: red;
    color: ${({ theme }) => theme.COLORS.RED }; 

    border: none;
    font-size: 16px;

`;