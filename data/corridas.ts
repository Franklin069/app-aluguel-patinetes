export type Corrida = {
  id: string;
  data: string;
  valor: string;
  distancia: string;
  status: "Concluída" | "Cancelada";
};

export const corridas: Corrida[] = [
  { id: "1", data: "15 de maio de 2024", valor: "R$ 5,80", distancia: "2.5 km", status: "Concluída" },
  { id: "2", data: "14 de maio de 2024", valor: "R$ 7,20", distancia: "3.1 km", status: "Concluída" },
  { id: "3", data: "12 de maio de 2024", valor: "R$ 3,50", distancia: "1.2 km", status: "Concluída" },
  { id: "4", data: "10 de maio de 2024", valor: "", distancia: "", status: "Cancelada" },
  { id: "5", data: "08 de maio de 2024", valor: "R$ 9,10", distancia: "4.5 km", status: "Concluída" },
];
