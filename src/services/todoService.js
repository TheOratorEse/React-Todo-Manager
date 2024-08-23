import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; //my Django api endpoint is being called here

export const fetchTodos = async () => {
  const response = await axios.get(`${API_URL}/todos/`);
  return response.data;
};

   // add function for users todo
export const addTodo = async (title) => {
  const response = await axios.post(`${API_URL}/todos/`, { title });
  return response.data;
};
   //update function for users todo
export const updateTodo = async (id, updates) => {
  const response = await axios.put(`${API_URL}/todos/${id}/`, updates);
  return response.data;
};
    //delete function for users todo
export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/todos/${id}/`);
};