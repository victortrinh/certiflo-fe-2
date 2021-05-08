import axios from 'axios';
import { env } from './env';

export const getAxiosClient = () =>
  axios.create({
    baseURL: env.baseUrl,
  });
