export interface Transaction {
  id: string;
  date: string;
  category: string;
  type: string;
  description: string;
  amount: string | number;
}
