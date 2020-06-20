import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://ca8ec4bb5705.ngrok.io'
})

export default instance
