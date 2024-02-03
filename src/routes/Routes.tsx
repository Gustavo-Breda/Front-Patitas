import { Route, BrowserRouter, Routes } from "react-router-dom";

import Start from "../pages/Start";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

import Home from "../pages/Home";
import Pesquisar from "../pages/Pesquisar";

import Assinatura from "../pages/Assinatura";
import Coupon from "../pages/Assinatura/Coupon";
import Cartao from "../pages/Assinatura/Cartao";

import Perfil from "../pages/Perfil";

import ConfirmeEmail from "../pages/ConfirmeEmail";
import EmailConfirmado from "../pages/EmailConfirmado";
import CompraConfirmada from "../pages/CompraConfirmada";

const Router = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route element={ <Start/> } path="/"/>
                <Route element={ <Login/> } path="/login"/>
                <Route element={ <Cadastro/> } path="/cadastro"/>

                <Route element={ <Home/> } path="/home"/>
                <Route element={ <Perfil/> } path="/perfil"/>
                <Route element={ <Pesquisar/> } path="/pesquisar"/>

                <Route element={ <Assinatura/> } path="/assinatura"/>
                <Route element={ <Cartao/> } path="/assinatura/cartao"/>
                <Route element={ <Coupon/> } path="/assinatura/coupon"/>
                
                <Route element={ <ConfirmeEmail/> } path="/confirme-email"/>
                <Route element={ <EmailConfirmado/> } path="/email-confirmado"/>
                <Route element={ <CompraConfirmada/> } path="/compra-confirmada"/>

                <Route element={ <Login/> } path="*"/>
            </Routes>
        </BrowserRouter>

    );

};

export default Router;