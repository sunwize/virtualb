import * as axios from 'axios';

export default class Network {
    static post(url, params) {
        return axios.post(process.env.VUE_APP_API_URL + '/api' + url, params);
    }

    static get(url) {
        return axios.get(process.env.VUE_APP_API_URL + '/api' + url);
    }
}
