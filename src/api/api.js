import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://b72a0b8d4154.ngrok.io'
})

export default instance
