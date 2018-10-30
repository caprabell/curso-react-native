import axios from 'axios';
import env from '../environments/env';

const getAll = async (page = 1) => {
  const response = await axios.get(`${env.API_URL}/products?page=${page}`);
  return response;
};

export default getAll;
