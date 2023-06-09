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
export const patchRequestAvatar = async(url: any, data?: any) => {
   const result = await axios.patch(url, data, {
      headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`,
         'Content-Type': 'multipart/form-data',
      }
   }).then((response) => response)
      .catch((error) => error.response)
   return result;
}
export const patchRequest = async(url: any, data?: any) => {
   const result = await axios.patch(url, data, {
      headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`,
         'Content-Type': 'application/json',
      }
   }).then((response) => response)
      .catch((error) => error.response)
   return result;
}

export const logoutRequest = async(url:any) => {
   const result = await axios.post(url, {
      headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`,
         'Content-Type': 'application/json',
      }
   }).then((response) => response)
      .catch((error) => error.response)
   return result;
}
export const postRequest2 = async(url:any, data:any) => {
   const result = await axios.post(url, data, {
      headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`,
         'Content-Type': 'application/json',
      }
   }).then((response) => response)
      .catch((error) => error.response)
   return result;
}