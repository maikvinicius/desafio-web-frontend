import axios from 'axios'

export default Api = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1'
});