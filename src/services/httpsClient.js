import axios from "axios";
import CryptoJS from 'crypto-js';

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.timeout = 1000 * 30;


const encryptPayload = (payload, secretKey, iv) => {
  const key = CryptoJS.enc.Base64.parse(secretKey);
  const ivParsed = CryptoJS.enc.Base64.parse(iv);
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(payload), key, { iv: ivParsed }).toString();
  return ciphertext;
};

const decryptPayload = (ciphertext, secretKey, iv) => {
  const key = CryptoJS.enc.Base64.parse(secretKey);
  const ivParsed = CryptoJS.enc.Base64.parse(iv);
  const decrypted = CryptoJS.AES.decrypt(ciphertext?.encryptedData, key, { iv: ivParsed }).toString(CryptoJS.enc.Utf8);
  return JSON.parse(decrypted);
};

// request interceptor
instance.interceptors.request.use(
  (config) => {
    try {
      // Check for maintenanceData condition
      if (config?.method && typeof config.method === 'string' && config.method.toUpperCase() !== "GET") {
        const encryptedPayload = encryptPayload(config.data, process.env.REACT_APP_SECRET_KEY, process.env.REACT_APP_IV);
        config.data = { encryptedData: encryptedPayload };
      } else {
        config.data = config.data; // Retain original data if no encryption needed
      }
    } catch (error) {
      console.error('Error in request interceptor:', error);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);


// response interceptor
instance.interceptors.response.use(
  (response) => {
    const responseData = response.data['data'];
    let decryptedResponseData = responseData;
    if (responseData) {
      decryptedResponseData = decryptPayload(responseData, process.env.REACT_APP_SECRET_KEY, process.env.REACT_APP_IV);
    } else {
      decryptedResponseData = responseData;
    }
    const responseDataDecrypt = {
      data: {
        data: decryptedResponseData,
        status:response.data['status'],
        message:response.data['message']
      },
      
    };
    return responseDataDecrypt;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      // console.log(error.response)
      // localStorage.clear();
      // window.location.reload();
    }
    return Promise.reject(error);
  },
);

export default instance;