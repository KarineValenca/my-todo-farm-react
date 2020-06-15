import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://fa3260df798f.ngrok.io'
})

export default instance