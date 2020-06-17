import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://55940e2a06fe.ngrok.io'
})

export default instance