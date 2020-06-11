import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://0f697292cf45.ngrok.io'
})

export default instance