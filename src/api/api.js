import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://074cdc02d3a2.ngrok.io'
})

export default instance
