import axios from 'axios';
// let baseUrl = 'http://gilanfile.ir:3600/';
// let baseUrl = 'http://localhost:3600/';
let baseUrl = 'http://api.gilanfile.ir/';

const instance = axios.create({
    baseURL: baseUrl
});
export default instance;
