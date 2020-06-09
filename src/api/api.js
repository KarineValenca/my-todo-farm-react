import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://680495058efe.ngrok.io'
})

export default instance