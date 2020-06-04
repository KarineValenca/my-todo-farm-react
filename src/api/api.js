import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://d521d4768677.ngrok.io'
})

export default instance