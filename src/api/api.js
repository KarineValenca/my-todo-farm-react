import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://820c250f8435.ngrok.io'
})

export default instance