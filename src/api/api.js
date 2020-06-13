import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://ad8c843e21ac.ngrok.io'
})

export default instance