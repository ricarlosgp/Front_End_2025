import axios from "axios";

export const api = axios.create({
  baseURL: "https://back-end-2025.onrender.com",
});


// antes do deploy do back_end: baseURL: "http://localhost:3334",