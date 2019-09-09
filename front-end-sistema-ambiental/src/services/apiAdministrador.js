import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';

const api =  axios.create({
        baseURL:'http://localhost:3332',
        headers: {'token':reactLocalStorage.get('token',undefined)}
    })    

export default api;