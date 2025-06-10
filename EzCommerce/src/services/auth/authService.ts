import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "";

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

export async function login(email: string, senha: string) {
  const response = await api.post("/login", { email, senha });
  return response.data;
}

export async function register(userData: {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  cep: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
}) {
  const response = await api.post("/register", userData);
  return response.data;
}

export function logout() {
  localStorage.removeItem("token");
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem("token");
}
