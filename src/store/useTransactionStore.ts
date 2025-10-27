import type { ITransaction } from "@/types/Transaction";
import { create } from "zustand";
import { v4 as uuid } from "uuid";

type TransactionStore = {
  transactions: ITransaction[];
  addTransaction: (t: Omit<ITransaction, "id">) => void;
  deleteTransaction: (id: string) => void;
  editTransaction: (t: ITransaction) => void;
};

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],
  addTransaction: (t) =>
    set((state) => ({
      transactions: [...state.transactions, { id: uuid(), ...t }],
    })),
  deleteTransaction: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((tr) => tr.id !== id),
    })),
  editTransaction: (t) =>
    set((state) => ({
      transactions: state.transactions.map((tr) => (tr.id === t.id ? t : tr)),
    })),
}));
