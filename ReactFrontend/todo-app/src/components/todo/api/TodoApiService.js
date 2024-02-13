import axios from 'axios'

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export const retrieveAllTodosByUsername
    = (username) => apiClient.get(`/users/${username}/todos`)

export const retrieveTodoApi
    = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)

export const deleteTodoById 
    = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)
