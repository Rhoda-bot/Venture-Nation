import axios from 'axios';

export const postRequest = async(data?: any, url?: any) => {
   const result = await axios.post(url, data)
   .then((response) => response)
   .catch((error) => error.response);
   return result;
}

export const getRequest = async(url: any) => {
   const result = await axios.get(url, {
      headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`,
         'Content-Type': 'multipart/json',
      }
   }).then((response) => response)
      .catch((error) => error.response)
   return result;
}