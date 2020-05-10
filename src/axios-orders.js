import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-7e598.firebaseio.com/'
})

export default instance