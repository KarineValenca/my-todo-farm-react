import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://08f8c5a3a181.ngrok.io'
})

export default instance
