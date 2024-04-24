import {create} from "zustand";

interface GenerationState {
    isCartVisible: boolean;
    setIsCartVisible: (isCartVisible: boolean) => void;
}

export const useGenerationStoreCartVisibility = create<GenerationState>((set) => ({
    isCartVisible: false,
    setIsCartVisible: (isCartVisible) => set({isCartVisible}),
}));