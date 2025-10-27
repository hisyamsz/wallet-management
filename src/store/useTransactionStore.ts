import type { ITransaction } from "@/types/Transaction";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";

type TransactionStore = {
  transactions: ITransaction[];
  addTransaction: (t: Omit<ITransaction, "id">) => void;
  deleteTransaction: (id: string) => void;
  editTransaction: (t: ITransaction) => void;
};

export const useTransactionStore = create<TransactionStore>()(
  persist(
    (set) => ({
      transactions: [],

      addTransaction: (transaction) =>
        set((state) => ({
          transactions: [...state.transactions, { id: uuid(), ...transaction }],
        })),

      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((tr) => tr.id !== id),
        })),

      editTransaction: (updatedTransaction) =>
        set((state) => ({
          transactions: state.transactions.map((tr) => (tr.id === updatedTransaction.id ? updatedTransaction : tr)),
        })),

      clearTransactions: () => set({ transactions: [] }),
    }),
    {
      name: "transaction-storage",
      partialize: (state) => ({ transactions: state.transactions }),
    },
  ),
);
