import axios from "./axios";
import history from "../history";

export default class Services {

    static baseUrl = 'http://localhost:3600/';

    static signIn(requestData) {
        axios.defaults.headers['content-Type'] = 'application/json';
        axios.defaults.headers['Accept'] = '/';
        axios.defaults.headers['Cache-Control'] = 'no-cache';
        axios.defaults.withCredentials = true;
        return axios.post(`/login`, {
            username: requestData.username,
            password: requestData.password,
        })
    }

    static getConfigList(requestData) {
        // 'content-Type': 'application/json',
        //     "Accept": "/",
        //     "Cache-Control": "no-cache",
        axios.defaults.headers['content-Type'] = 'application/json';
        axios.defaults.headers['Accept'] = '/';
        axios.defaults.headers['Cache-Control'] = 'no-cache';
        axios.defaults.withCredentials = true;
        // axios.defaults.headers['Cookie'] = localStorage.getItem('session');
        console.log('session: ', localStorage.getItem('session'))
        return axios.get(`/configs/list`, {
            params: requestData
        })
    }

    static async insertConfig(requestData) {
        axios.defaults.headers['Cookie'] = localStorage.getItem('session');
        return axios.post(`/configs/insert`, requestData)
    }

    static async deleteConfig(requestData) {
        axios.defaults.headers['Cookie'] = localStorage.getItem('session');
        return axios.post(`/configs/delete`, requestData)
    }

    static async editConfig(requestData) {
        axios.defaults.headers['Cookie'] = localStorage.getItem('session');
        return axios.post(`/configs/edit`, requestData)
    }

    static getRegionPriceList(requestData) {
        axios.defaults.headers['Cookie'] = localStorage.getItem('session');
        return axios.get(`/regionPrice/list`, {
            params: requestData
        })
    }

    static async insertRegionPrice(requestData) {
        axios.defaults.headers['Cookie'] = localStorage.getItem('session');
        return axios.post(`/regionPrice/insert`, requestData)
    }

    static async deleteRegionPrice(requestData) {
        axios.defaults.headers['Cookie'] = localStorage.getItem('session');
        return axios.post(`/regionPrice/delete`, requestData)
    }

    static async editRegionPrice(requestData) {
        axios.defaults.headers['Cookie'] = localStorage.getItem('session');
        return axios.post(`/regionPrice/edit`, requestData)
    }
}
