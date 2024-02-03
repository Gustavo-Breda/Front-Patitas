import { CartaoStyled } from "./style";

import HeaderAssinatura from "../../../components/HeaderAssinatura";
import StatusBar from "../../../components/StatusBar";
import Footer from "../../../components/Footer";

import BtnVoltar from "../../../components/BtnVoltar";


export default function Cartao () {

  return (

    <CartaoStyled>

      <StatusBar/>

      <HeaderAssinatura style={{ color:'#E97B0C' }}/>
      <BtnVoltar style={{ color:'#E97B0C' }} path={ "/assinatura" }/>

      <Footer/>

    </CartaoStyled>

  );

};
