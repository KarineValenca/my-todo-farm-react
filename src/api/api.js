import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://abe123da0c31.ngrok.io'
})

export default instance
