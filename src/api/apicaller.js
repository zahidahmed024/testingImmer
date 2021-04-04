import axios from 'axios';

let baseUrl = "http://jsonplaceholder.typicode.com/"

export const get = async (url) => {
    // return
    try {
        let response = await axios.get(`${baseUrl + url}`)
        return response
    } catch (error) {
        console.log('error->>>', error)
        console.log('error response->>>', error.response)
        console.log('error response->>>', error.response.status)
        console.log('error response->>>', error.response.data)
    }
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