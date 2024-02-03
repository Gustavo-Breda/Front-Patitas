import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as VoltarSVG } from '../assets/VoltarBadge.svg'


interface VoltarProps {
    path: string;
    style?: React.CSSProperties;
}
  
const BtnVoltarStyled = styled(Link) `
    width: 90%;

    gap: 10px;
    display: flex;
    align-items: center;
    text-decoration: none;

    & div {
        background: #D9D9D9;
        border-radius: 999999px;
        margin-bottom: -1px;
        height: 90%;
    }

    & p {
        color: #154962;
        margin: 0;
        word-wrap: break-word;

        font-size: 16px;
        font-weight: 400;
        font-family: Verdana;
    }
`;

const BtnVoltar: React.FC<VoltarProps> = ( {path, style} ) => (

    <BtnVoltarStyled to={path} >
        <div><VoltarSVG/></div>
        <p style={style}>Voltar</p>
    </BtnVoltarStyled>

);

export default BtnVoltar;