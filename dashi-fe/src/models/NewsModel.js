import axios from 'axios';
import { API_URL } from '../constants';

const endPoint = `${API_URL}/news`;

class NewsModel {
    static index = () => {
        const response = axios.get(`${endPoint}`, { withCredentials: true });
        return response;
    };

    static show = (name) => {
        const response = axios.get(`${endPoint}/${name}`, { withCredentials: true });
        return response;
    };
};

export default NewsModel;
