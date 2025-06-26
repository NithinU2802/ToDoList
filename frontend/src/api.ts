import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}`;

export const fetchTasks = () => axios.get(API_URL);
export const fetchTask = (id: number) => axios.get(`${API_URL}/${id}`);
export const createTask = (task: any) => axios.post(API_URL, task);
export const updateTask = (id: number, task: any) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id: number) => axios.delete(`${API_URL}/${id}`);