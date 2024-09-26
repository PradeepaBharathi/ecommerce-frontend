
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = 'https://ecommerce-backend-quap.onrender.com/cart';

export const fetchCartItems = createAsyncThunk(
    "Cart/fetchCartItems",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}/getcartproducts`);
            console.log(response.data.items)
            return response.data.items; 
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const addToCart = createAsyncThunk(
    "Cart/addToCart",
    async ({ productId, quantity }, { rejectWithValue }) => { 
        try {
            console.log(quantity)
            const response = await axios.post(`${base_url}/add`, { productId, quantity });
            return response.data.cartItem;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchQuantity = createAsyncThunk(
    "Cart/fetchQuantity",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${base_url}/getcartproducts`);
            const quantities = response.data.items.map(item => item.quantity);
            console.log(quantities);
            return quantities; 
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const removeFromCart = createAsyncThunk(
    "Cart/removeFromCart",
    async (itemId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`${base_url}/cart/remove/${itemId}`);
            return response.data; 
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const updateCartItemQuantity = createAsyncThunk(
    "Cart/updateCartItemQuantity",
    async ({ itemId, quantity }, { rejectWithValue }) => {
        try {
            console.log(itemId)
            const response = await axios.put(`${base_url}/update/${itemId}`, { quantity });
            return response.data.cartItem; 
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const CartSlice = createSlice({
    name: "Cart",
    initialState: {
        loading: false,
        cartItems: [],
        cartQuantity:[],
        error: null,
    },
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        resetCartState: (state) => {
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.loading = false;
                state.cartItems = action.payload;
             
            })
            .addCase(fetchCartItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchQuantity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchQuantity.fulfilled, (state, action) => {
                state.loading = false;
                state.cartQuantity = action.payload;
             
            })
            .addCase(fetchQuantity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                if (state.cartItems) {
                    state.cartItems.push(action.payload);
                  }
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(removeFromCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.itemId);
            })
            .addCase(removeFromCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateCartItemQuantity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.cartItems.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.cartItems[index] = action.payload; 
                }
            })
            .addCase(updateCartItemQuantity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});


export const { clearCart } = CartSlice.actions;
export default CartSlice.reducer;
