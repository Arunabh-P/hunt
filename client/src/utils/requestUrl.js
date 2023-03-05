import axios from 'axios';

const requestUrl = axios.create({
  baseURL: 'http://localhost:8800/api/',
  withCredentials: true,
});
export default requestUrl;
