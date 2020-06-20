import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://8ae3a61fbb87.ngrok.io'
})

export default instance
