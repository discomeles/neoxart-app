import axios from "axios";
const baseUrl = '/api'

const login = (userObject) => {
    const request = axios.post(`${baseUrl}/login`, userObject)
    return request.then(response => response)
}

const register = (userObject) => {
    const request = axios.post(`${baseUrl}/register`, userObject)
    return request.then(response => response)
}

export default {login, register}