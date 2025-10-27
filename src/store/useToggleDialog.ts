import { create } from "zustand";

type ToggleDialogStore = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const useToggleDialog = create<ToggleDialogStore>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
}));
