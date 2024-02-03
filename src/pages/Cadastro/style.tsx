import styled from 'styled-components';


export const CadastroStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: #E6E8E9;
`;

export const Wrapper = styled.form`
    height: 100%;
    gap: 4.5%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const InputConteiner = styled.div `
    width: 316px; 

    gap: 10px; 
    display: flex;
    flex-direction: column; 
`;

export const ValueInput = styled.div `
    color: #154962; 
    word-wrap: break-word;
    text-decoration: underline; 

    font-size: 16px; 
    font-weight: 700; 
    font-family: Verdana; 

    display: flex;
`;

export const TermosConteiner = styled.div `
    width: 235px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & p  {
        color: #154962; 
        text-align: center; 
        word-wrap: break-word;
        
        font-size: 16px; 
        font-weight: 400; 
        font-family: Verdana; 
    }
`;
