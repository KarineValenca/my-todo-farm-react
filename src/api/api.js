import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://b65ecac6c532.ngrok.io'
})

export default instance