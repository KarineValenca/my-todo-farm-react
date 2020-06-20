import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://276c25424495.ngrok.io'
})

export default instance
