import axios from 'axios';
// let baseUrl = 'http://5.201.177.202:3600/';
let baseUrl = 'http://localhost:3600/';

const instance = axios.create({
    baseURL: baseUrl
});
export default instance;
