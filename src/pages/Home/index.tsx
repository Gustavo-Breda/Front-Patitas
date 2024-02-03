import { HomeStyled } from "./style";

import StatusBar from "../../components/StatusBar";
import HeaderAddress from "../../components/HeaderAddress";
import Footer from "../../components/Footer";

export default function Home () {

  return (

    <HomeStyled>

      <StatusBar/>
      <HeaderAddress/>
      <Footer/>

    </HomeStyled>

  );

};
