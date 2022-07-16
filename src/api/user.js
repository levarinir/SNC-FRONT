import axios from 'axios';
import { API } from '../config';
import { toast } from 'react-toastify';

export const loadUser = async (token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return await axios.get(`${API}/user/auth`, { headers });
  } catch (err) {
    console.log(err);
  }
};

export const signout = () => {
  localStorage.removeItem('token');
};

export const signup = async (body) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    return await axios.post(`${API}/user/signup`, body, { headers });
  } catch (err) {
    throw toast.error(err.response.data.err);
  }
};

export const signin = async (body) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    return await axios.post(`${API}/user/signin`, body, { headers });
  } catch (err) {
    console.log(err);
    throw toast.error(err.response.data.err);
  }
};
