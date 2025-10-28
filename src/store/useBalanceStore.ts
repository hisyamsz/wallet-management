import { create } from "zustand";
import { persist } from "zustand/middleware";

type BalanceStore = {
  balance: number;
  setBalance: (value: number) => void;
  addBalance: (amount: number) => void;
  subtractBalance: (amount: number) => void;
};

export const useBalanceStore = create<BalanceStore>()(
  persist(
    (set) => ({
      balance: 0,
      setBalance: (value) => set(() => ({ balance: value })),
      addBalance: (value) => set((state) => ({ balance: state.balance + value })),
      subtractBalance: (value) => set((state) => ({ balance: state.balance - value })),
    }),
    { name: "balance-store", partialize: (state) => ({ balance: state.balance }) },
  ),
);
