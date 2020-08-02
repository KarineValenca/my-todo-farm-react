import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://2e9d7f259b70.ngrok.io'
})

export default instance
