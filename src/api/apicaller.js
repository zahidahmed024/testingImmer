import axios from 'axios';

let baseUrl = "http://jsonplaceholder.typicode.com/"

export const get = async (url) => {
    return await axios.get(`${baseUrl + url}`)
}
export const post = async (url, body) => {
    return await axios.post(`${baseUrl + url}`, body)
}
export const put = async (url, body) => {
    return await axios.put(`${baseUrl + url}`, body)
}
export const del = async (url, body) => {
    return await axios.delete(`${baseUrl + url}`, body)
}