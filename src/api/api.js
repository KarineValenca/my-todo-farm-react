import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://59bc97605e3a.ngrok.io'
})

export default instance
