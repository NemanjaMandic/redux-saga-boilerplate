import Network from "./network";

const BASE_URL = `https://api.github.com`;

export const getUsersAPI = () => Network.get(`${BASE_URL}/users`);
