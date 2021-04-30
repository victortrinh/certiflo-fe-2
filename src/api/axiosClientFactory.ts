import axios from 'axios';
import { env } from './env';

export const getAxiosClient = () => {
  const client = axios.create({
    baseURL: env.baseUrl,
  });

  return client;
};
