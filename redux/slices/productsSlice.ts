import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
    id: string;
    name: string;
    quantity: number;
    images: string[];
};

const productsSlice = createSlice({
    name: 'products',
    initialState: [] as Product[],
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            return state.filter(product => product.id !== action.payload);
        },
    },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
