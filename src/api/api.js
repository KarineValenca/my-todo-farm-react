import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://b5439d9fadf6.ngrok.io'
})

export default instance
