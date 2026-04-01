import { create } from "zustand";

export const useStore = create((set) => ({
  output: null,
  setOutput: (data) => set({ output: data }),
}));