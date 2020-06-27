import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://f3ece87af7d5.ngrok.io'
})

export default instance
