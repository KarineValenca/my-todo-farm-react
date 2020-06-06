import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://e6bdaf28def0.ngrok.io'
})

export default instance