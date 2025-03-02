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

const fetchAllUserAPI = () => {
    const URL_BACKEND = '/api/v1/user';


    const res = axios.get(URL_BACKEND)
    return res;
}

export {
    createUserAPI,
    updateUserApi,
    fetchAllUserAPI
}