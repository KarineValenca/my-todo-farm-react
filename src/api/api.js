import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://662b8ad800a0.ngrok.io'
})

export default instance
