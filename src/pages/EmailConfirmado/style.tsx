import styled from 'styled-components';
import BtnEmail from '../../components/BtnEmail';

export const EmailConfirmadoStyled = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 120px;
    background-color: #E6E8E9;

    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const EmailConfirmadoButton = styled(BtnEmail)`
    position: relative;
    top: -3.65%;
`;
