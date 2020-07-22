import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://c98b7bc55d11.ngrok.io'
})

export default instance
