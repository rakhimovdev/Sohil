// src/api/Api.js
import axios from "axios";

const Api = axios.create({
    baseURL: "https://sohil-backend-1.onrender.com"
});

export default Api;
