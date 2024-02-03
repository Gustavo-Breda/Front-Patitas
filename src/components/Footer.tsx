import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as AssinaturaSVG } from '../assets/AssinaturaBadge.svg';
import { ReactComponent as PesquisarSVG } from '../assets/PesquisarBadge.svg';
import { ReactComponent as PerfilSVG } from '../assets/PerfilBadge.svg';
import { ReactComponent as HomeSVG } from '../assets/HomeBadge.svg';
import { ReactComponent as VecSVG } from '../assets/VecBadge.svg';


interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
}

const Wrapper = styled.div `
    background-color: #154962;
    position: fixed;
    bottom: 0%;
    width: 100%;
    height: 62px;

    display: flex;
    align-items: center;
    justify-content: space-around;
`

function CustomLink ( { to, children }: CustomLinkProps ) {
    
    const ResolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: ResolvedPath.pathname, end: false })

    if (isActive) {
        return (
            <Link style={ { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' } } to={to}>{children}<VecSVG/></Link>
        )
    }
    return (
        <Link style={ { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' } } to={to}>{children}</Link>
    )

}

const Footer = () => {
    
    return (

        <Wrapper>
            <CustomLink to='/home'><HomeSVG/></CustomLink>
            <CustomLink to='/pesquisar'><PesquisarSVG/></CustomLink>
            <CustomLink to='/assinatura'><AssinaturaSVG/></CustomLink>
            <CustomLink to='/perfil'><PerfilSVG/></CustomLink>
        </Wrapper>
        
    );

};

export default Footer;