import { LoginProps } from "../../pages/Login/index"
import { CadastroProps } from "../../pages/Cadastro/index"
import api from "../../api";

export default {

    async createUser (cadastro: CadastroProps) {
        try {
            const response = await api.post('/usuario', cadastro);
            return response;
        } catch (e) {
            console.log(e);
        }
    },

    async getAllUsers () {
        try {
            const response = await api.get('/usuario');
            return response;
        } catch (e) {
            console.log(e);
        }
    },

    async loginUser (login: LoginProps) {
        try {
            const response = await api.post('/login', login);
            return response;
        } catch (e) {
            console.log(e);
        }
    }

};