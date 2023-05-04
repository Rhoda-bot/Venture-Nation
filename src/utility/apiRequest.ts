import axios from 'axios';

export const postRequest = async(data?: any, url?: any) => {
   const result = await axios.post(url, data)
   .then((response) => response)
   .catch((error) => error.response);
   return result;
}