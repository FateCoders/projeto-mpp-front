export interface Order {
  id: number;
  status: string;
  valor: string;
  created_at: string;
  produto: {
    id: number;
    nome: string;
    imagem: string;
  };
}