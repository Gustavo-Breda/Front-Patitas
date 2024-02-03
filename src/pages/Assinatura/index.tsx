import { AssinaturaStyled, ConteinerBtn, Wrapper, BtnRegras, BannerConteiner, BannerButtonConteiner } from "./style";
import { Link } from "react-router-dom";

import HeaderAssinatura from "../../components/HeaderAssinatura";
import StatusBar from "../../components/StatusBar";
import Footer from "../../components/Footer";

import banner from '../../assets/BannerAssinatura.png'

import { ReactComponent as FreteSVG } from '../../assets/FreteBadge.svg'
import { ReactComponent as CartaoSVG } from '../../assets/CartaoBadge.svg'
import { ReactComponent as CoupomSVG } from '../../assets/CoupomBadge.svg'
import { ReactComponent as PremiosSVG } from '../../assets/PremiosBadge.svg'
import { ReactComponent as RegrasSVG } from '../../assets/RegrasBadge.svg'


export default function Assinatura () {

  return (

    <AssinaturaStyled>

      <StatusBar/>

      <HeaderAssinatura/>

      <Wrapper>
        <ConteinerBtn>
          <Link to='/assinatura'><FreteSVG/><p>Frete<br></br>Grátis</p></Link>
          <Link to='/assinatura/cartao'><CartaoSVG/><p>Cartão<br></br>Vacina</p></Link>
        </ConteinerBtn>

        <ConteinerBtn>
          <Link to='/assinatura'><CoupomSVG/><p>Prêmios</p></Link>
          <Link to='/assinatura/coupon'><PremiosSVG/><p>Coupons</p></Link>
        </ConteinerBtn>

        <BtnRegras>Regras de Fidelidade</BtnRegras>
      </Wrapper>

      <BannerButtonConteiner><RegrasSVG/></BannerButtonConteiner>
      <BannerConteiner><img src={banner} alt="Banner de gato brincando com um novelo de lâ"></img></BannerConteiner>

      <Footer/>

    </AssinaturaStyled>

  );

};
