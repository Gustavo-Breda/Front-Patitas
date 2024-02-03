import styled from 'styled-components';


export const LoginStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: #E6E8E9;
`;

export const Wrapper = styled.div`
    height: 100%;
    gap: 4.5%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const InputConteiner = styled.form `
    width: 314px; 

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

export const ForgotPasswordStyled = styled.div `
    width: 285px;

    display: inline-flex;
    align-items: flex-end;
    flex-direction: column; 
    justify-content: flex-start; 
`;

export const ForgotPasswordBtn = styled.button `
    padding: 0;
    color: #154962;
    margin-right: -20px;

    font-size: 16px; 
    font-weight: 400; 
    font-family: Verdana; 
    text-shadow: 1px 1px 5px gray;

    background: none;
    box-shadow: none;
    cursor: pointer;
    outline: none;
    border: none;
`;

export const BtnDiv = styled.div `
    display: flex;
    padding-top: 35px;
    align-items: center;
    flex-direction: column;
`;