import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://84ccdf6af24f.ngrok.io'
})

export default instance
