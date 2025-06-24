import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

interface SingleOrderPayload {
  id_user_fk: number;
  id_produto_fk: number;
  pagamento: "pix" | "cartao";
  embalagem_presente: boolean;
  valor: number;
  descricao: string;
}

export async function placeOrder(payload: SingleOrderPayload) {
  const response = await api.post("/realizar-pedido", payload);
  return response.data;
}

export async function fetchOrdersByUserId(userId: number) {
  const response = await api.get(`/pedidos/usuario/${userId}`);
  return response.data;
}
