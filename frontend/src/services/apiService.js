// src/services/apiService.js
import axios from 'axios';

// Create a base axios instance
const apiClient = axios.create({
  baseURL: 'https://your-api-base-url.com/api', // Replace with your backend API base URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example GET method
export const getData = async (endpoint, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    // Handle error appropriately here
    console.error('GET Request Error:', error);
    throw error;
  }
};

// Example POST method
export const postData = async (endpoint, payload) => {
  try {
    // const response = await apiClient.post(endpoint, payload); create another file to place dummy data object
    return response.data;
  } catch (error) {
    // Handle error appropriately here
    console.error('POST Request Error:', error);
    throw error;
  }
};

// You can add PUT, DELETE similarly
