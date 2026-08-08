import axios from "axios";

const BASE_URL = "https://user-management-api-uutq.onrender.com/users";

// GET - Fetch all users
export const fetchUsers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// GET - Fetch single user by ID
export const fetchUserById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// POST - Create a new user
export const createUser = async (user) => {
  const response = await axios.post(BASE_URL, user);
  return response.data;
};

// PUT - Update existing user
export const updateUser = async (id, user) => {
  const response = await axios.put(`${BASE_URL}/${id}`, user);
  return response.data;
};

// DELETE - Delete user
export const deleteUser = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};