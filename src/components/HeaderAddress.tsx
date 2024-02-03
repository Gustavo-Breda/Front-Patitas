import styled from "styled-components";

import Logo from "../assets/Logo3.png"
import { ReactComponent as AddressSVG } from '../assets/LocalizacaoBadge.svg';
import { ReactComponent as LocalizacaoSVG } from '../assets/AddressBadge.svg';


const Wrapper = styled.div `
    width: 100%;
    margin-top: 40px;
    background-color: #154962;

    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ConteinerAddress = styled.div `
    padding: 10px;
    
    gap: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;

    & p {
        color: #F2F3F3;
        word-wrap: break-word;
        
        font-family: Verdana;
        font-weight: 700;
        font-size: 16px;
    }
`;

const HeaderAddress = () => {

    return (

        <Wrapper>
            <img src={Logo} alt="Logo da Patitas"/>
            <ConteinerAddress>
                <AddressSVG/>
                <p>Receber em <br/> rua Dionísio, 72- apt 402</p>
                <LocalizacaoSVG/>
            </ConteinerAddress>
        </Wrapper>

    );

};


export default HeaderAddress;