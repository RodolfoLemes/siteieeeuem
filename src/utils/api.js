import axios from 'axios'
const https = require('https');

const api = axios.create({
    baseURL: 'https://backendieee.herokuapp.com/',
    httpsAgent: new https.Agent({  
        rejectUnauthorized: false
    })
})

export default api