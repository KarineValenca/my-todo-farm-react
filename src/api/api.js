import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://6c20b8dfa995.ngrok.io'
})

export default instance
