export interface ICidade {
    id:number;
    nome: string;
};

export interface IQuaryProps {
    page?: number | null;
    limit?: number | null;
    filter?: string | null;
}
  
  