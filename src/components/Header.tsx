import styled from "styled-components";

import Logo from "../assets/Logo3.png"


const Wrapper = styled.div `
    width: 100%;
    margin-top: 40px;
    padding-bottom: 20px;
    background-color: #154962;

    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Header = () => {

    return (

        <Wrapper>
            <img src={Logo} alt="Logo da Patitas"/>
        </Wrapper>

    );

};


export default Header;