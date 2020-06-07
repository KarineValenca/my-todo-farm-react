import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://7555722774c7.ngrok.io'
})

export default instance