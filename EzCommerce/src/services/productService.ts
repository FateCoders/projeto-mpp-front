import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function fetchProducts() {
  const response = await api.get("/produtos");
  return response.data.data || response.data;
}

export async function fetchProductById(id: string | number) {
  const response = await api.get(`/produtos/${id}`);
  return response.data;
}