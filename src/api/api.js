import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://aa13c38130fa.ngrok.io'
})

export default instance
