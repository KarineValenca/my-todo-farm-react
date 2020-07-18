import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://f52f18fa0d61.ngrok.io'
})

export default instance
