import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
    //aqui fica o endereço se hospedar a pagina em algum lugar
});

export default api;