// import axios from "axios";
import axios from './axios.customize';

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = '/api/v1/user';
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone,
    }

    const res = axios.post(URL_BACKEND, data)
    return res;
}

const updateUserApi = () => {

}

export {
    createUserAPI,
    updateUserApi,
}