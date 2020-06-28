import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://98b64f0802e7.ngrok.io'
})

export default instance
