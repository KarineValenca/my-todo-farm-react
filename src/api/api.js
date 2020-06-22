import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://ad5436a2272f.ngrok.io'
})

export default instance
