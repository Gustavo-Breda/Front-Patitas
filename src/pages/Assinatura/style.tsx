import styled from "styled-components";

export const AssinaturaStyled = styled.div `
    height: 100%;
    background-color: #E6E8E9;

    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Wrapper = styled.div `
    width: 100%;
    
    gap: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const ConteinerBtn = styled.div `
    width: 100%;

    display: flex;
    justify-content: space-evenly;

    & a {
        background: #EDA61A;
        border-radius: 18px;
        height: 125px;
        width: 125px;

        gap: 10px;
        display: flex;
        text-align: center;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        
        text-decoration: none;
        border: none;
        
        & p {
            color: #154962;
            word-wrap: break-word;

            margin: 0;
            padding: 0;
            
            font-size: 18px;
            font-weight: 700;
            font-family: Verdana;
        }
    }
`;

export const BtnRegras = styled.button `
        color: #154962;
        word-wrap: break-word;
        
        margin: 0;
        margin-top: -10px;
        
        font-size: 18px;
        font-weight: 700;
        font-style: italic;
        font-family: Verdana;
        
        border: none;
        background: none;
`;

export const BannerConteiner = styled.div `
    position: absolute;
    bottom: 4.5%;
    right: 0%;
`;

export const BannerButtonConteiner = styled.button `
    position: absolute;
    bottom: calc(0% + 185px);
    right: calc(0% + 195px);

    border: none;
    background: none;
`;