import styled from "styled-components";
import React from 'react';

import Logo from "../assets/logo1.png"

interface HeaderAssinaturaProps {
    style?: React.CSSProperties;
}

const Wrapper = styled.div `
    width: 100%;
    margin-top: 40px;
    padding-bottom: 40px;

    display: flex;
    align-items: center;
    flex-direction: column;

    & p {
        color: #154962;
        word-wrap: break-word;
        text-shadow: 0px 0px 1px gray;

        font-size: 17px;
        font-weight: 700;
        font-family: Verdana;
    }
`;

const HeaderAssinatura: React.FC<HeaderAssinaturaProps> = ( {style} ) => {

    return (

        <Wrapper>
            <img src={Logo} alt="Logo da Patitas"/>
            <p style={style}>Cliente Fidelidade</p>
        </Wrapper>

    );

};


export default HeaderAssinatura;