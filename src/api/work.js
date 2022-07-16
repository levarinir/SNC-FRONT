import axios from 'axios';
import { API } from '../config';
import { toast } from 'react-toastify';

export const testApi = async (f, token) => {
  try {
    const headers = new Object();

    headers['Content-Type'] = 'application/json';
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return await axios.get(`${API}/work/f${f}`, { headers });
  } catch (err) {
    throw toast.error(err.response.data.err);
  }
};
