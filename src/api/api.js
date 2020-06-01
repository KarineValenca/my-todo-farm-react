import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://382dd341e571.ngrok.io'
})

export default instance