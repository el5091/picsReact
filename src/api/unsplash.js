import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID At8Qp36lKgH3rQsSzhT9REBZUXeScMBAOyNztfwL9zM'
    }
});