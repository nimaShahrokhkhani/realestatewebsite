import axios from "./axios";
import history from "../history";

export default class Services {

    static baseUrl = 'http://localhost:3500/';

    static signIn(requestData) {
        return axios.post(`/login`, {
            username: requestData.username,
            password: requestData.password,
        })
    }

    static getConfigList(requestData) {
        return axios.get(`/configs/list`, {
            params: requestData
        })
    }

    static async insertConfig(requestData) {
        return axios.post(`/configs/insert`, requestData)
    }

    static async deleteConfig(requestData) {
        return axios.post(`/configs/delete`, requestData)
    }

    static async editConfig(requestData) {
        return axios.post(`/configs/edit`, requestData)
    }
}
