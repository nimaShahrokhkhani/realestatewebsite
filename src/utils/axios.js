import axios from 'axios';
// let baseUrl = 'http://gilanfile.ir:3600/';
// let baseUrl = 'http://localhost:3600/api/';
let baseUrl = 'https://gilanfile.ir/api/';

const instance = axios.create({
    baseURL: baseUrl
});
export default instance;
