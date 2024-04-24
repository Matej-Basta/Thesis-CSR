import {create} from "zustand";
import ProductType from "../types/ProductInterface";

export interface CartItemType extends ProductType {
    quantity: number;
}

interface GenerationState {
    cart: CartItemType[];
    setCart: (cart: CartItemType[]) => void;
}


export const useGenerationStoreCart = create<GenerationState>((set) => ({
    cart: [],
    setCart: (cart) => set({cart}),
}));