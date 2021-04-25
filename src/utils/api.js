import axios from 'axios';

const api = axios.create({
	baseURL: 'https://backendieee.herokuapp.com/',
});

export default api;
