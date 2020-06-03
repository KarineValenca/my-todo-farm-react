import axios from 'axios'

const instance = axios.create({
    baseURL: ' http://c04a3a11ed07.ngrok.io'
})

export default instance