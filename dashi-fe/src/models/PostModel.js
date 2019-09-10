import axios from 'axios';
import { API_URL } from '../constants';

const endPoint = `${API_URL}/posts`;

class PostModel {
    static index = () => {
        const response = axios.get(`${endPoint}`, { withCredentials: true });
        return response;
    };

    static show = (post) => {
        const response = axios.get(`${endPoint}/${post._id}`, { withCredentials: true });
        return response;
    };

    static create = (post) => {
        const response = axios.post(endPoint, post, { withCredentials: true });
        return response;
    };

    static update = (post) => {
        const response = axios.put(`${endPoint}/${post._id}`, post, { withCredentials: true });
        return response;
    };

    static destroy = (post) => {
        const response = axios.delete(`${endPoint}/${post._id}`, { withCredentials: true });
        return response;
    };
};

export default PostModel;
