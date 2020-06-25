import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://d0f266ae1412.ngrok.io'
})

export default instance
