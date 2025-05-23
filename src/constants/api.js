// src/constants/api.js

const BASE_URL = "https://certificate-dunia-api.vercel.app/api";

export const API_ENDPOINTS = {
  CREATE_CERTIFICATE: `${BASE_URL}/certificates`,
  SEND_CERTIFICATE_LINK: (id) => `${BASE_URL}/certificates/${id}/send`,
};

export default API_ENDPOINTS;
