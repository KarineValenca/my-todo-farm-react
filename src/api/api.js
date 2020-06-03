import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://436c69f502cd.ngrok.io'
})

export default instance