/* eslint-disable prettier/prettier */
import axios from 'axios';

export const setToken = async (data) => {
  const {password, username} = data;
  try {
    axios.defaults.headers.common.Authorization = 'Basic VVNFUkRBU0g6';
    const response = await axios.post('https://api-stag.collact.com.br/v1/token', {
      grantType: 'password',
      password,
      username,
    });
    console.log(response,'Response');
  } catch (err) {
    console.log(err);
  }
}