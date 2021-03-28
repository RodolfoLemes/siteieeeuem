import axios from 'axios';

const api = axios.create({
	baseURL: 'https://seel-backend.herokuapp.com/',
});

export default api;
