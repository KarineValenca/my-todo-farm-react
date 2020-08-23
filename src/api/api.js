import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://todo-farm.herokuapp.com'
})

export default instance
