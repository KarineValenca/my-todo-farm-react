import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://2c9602c08cfc.ngrok.io'
})

export default instance
