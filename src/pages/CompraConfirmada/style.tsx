import styled from 'styled-components';
import BtnEmail from '../../components/BtnEmail';
<link href='https://fonts.google.com/specimen/Cherry+Bomb+One' rel='stylesheet'></link>

export const CompraConfirmadaStyled = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 120px;
    background-color: #E6E8E9;

    display: flex;
    align-items: center;
    flex-direction: column;

    & p {
        color: #EDA61A;
        word-wrap: break-word;
        text-shadow: 1px 2px 5px black;

        font-size: 20px;
        font-family: "Cherry Bomb One", system-ui;
        
        font-weight: 400;
    }
`;

export const CompraConfirmadaButton = styled(BtnEmail)`
    position: relative;
`;
