import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://419e40f6961c.ngrok.io'
})

export default instance