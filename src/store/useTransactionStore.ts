import type { ITransaction } from "@/types/Transaction";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";
import { useBalanceStore } from "./useBalanceStore";

type TransactionStore = {
  transactions: ITransaction[];
  addTransaction: (t: Omit<ITransaction, "id">) => void;
  deleteTransaction: (id: string) => void;
  editTransaction: (t: ITransaction) => void;
};

const id = uuid();
const { addBalance, subtractBalance } = useBalanceStore.getState();

export const useTransactionStore = create<TransactionStore>()(
  persist(
    (set) => ({
      transactions: [],

      addTransaction: (transaction) => {
        if (transaction.type.toLowerCase() === "amount") {
          addBalance(transaction.amount);
        } else {
          subtractBalance(transaction.amount);
        }

        set((state) => ({
          transactions: [...state.transactions, { id, ...transaction }],
        }));
      },

      deleteTransaction: (id) =>
        set((state) => {
          const transaction = state.transactions.find((tr) => tr.id === id);

          if (transaction) {
            if (transaction.type.toLowerCase() === "income") {
              subtractBalance(transaction.amount);
            } else {
              addBalance(transaction.amount);
            }
          }

          return {
            transactions: state.transactions.filter((tr) => tr.id !== id),
          };
        }),

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
