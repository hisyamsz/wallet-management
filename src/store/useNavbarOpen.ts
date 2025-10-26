import { create } from "zustand";

type UseNavType = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const useNavOpen = create<UseNavType>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
