import axios from "axios";
const baseUrl = '/api/data'

const authHeader = (token) => {
    return (
        {headers: { Authorization: `Bearer ${token}`}}
    )    
}

const getAll = (token) => {
    const request = axios.get(baseUrl, authHeader(token))
    return request.then(response => response.data)
}

const create = (newObject, token) => {
    const request =  axios.post(baseUrl, newObject, authHeader(token))
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response)
}

const modify = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default {getAll, create, remove, modify}