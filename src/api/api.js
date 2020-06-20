import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://be5509a160f7.ngrok.io'
})

export default instance
