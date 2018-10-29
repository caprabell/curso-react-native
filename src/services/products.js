import axios from 'axios';
import env from '../environments/env';

const getAll = async () => {
  const response = await axios.get(`${env.API_URL}/products`);
  return response.data.docs;
};

export {
  getAll,
};
