import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = 'http://localhost:9000/product';




export const fetchProductById = createAsyncThunk(
    "Products/fetchProductByDate",
    async({id},{rejectWithValue})=>{
       console.log(id)
            try {
         
                const response = await axios.get(`${base_url}/getProduct/${id}`);
                  console.log(response.data);
                  return response.data.product
            } catch (error) {
          return rejectWithValue(error.response.data);
                
            }
    }
)

export const fetchProduct = createAsyncThunk(
    "Products/fetchProduct",
    async(_,{rejectWithValue})=>{
        try {
         
            const response = await axios.get(`${base_url}/getProducts`);
              console.log(response.data.productList);
              return response.data.productList
        } catch (error) {
      return rejectWithValue(error.response.data);
            
        }
    }
)
export const fetchProductByCategory = createAsyncThunk(
    'fetchProductByCategory',
    async ({Productcategory}, { rejectWithValue }) => {
      try {
        console.log(Productcategory)
        const response = await axios(`${base_url}/getProductsByCategory/${Productcategory}`);
     
        console.log(response.data.products);
       return response.data.products
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const ProductSlice = createSlice({
    name:"Products",
    initialState:{
        loading:false,
        CategoryProducts:[],
        allProducts:[],
        productId:[],
        error:null,

        
    },
    reducers: {
      
    },
    extraReducers:(builder)=>{
        builder
        
        .addCase(fetchProduct.pending,(state)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.loading= false;
            state.allProducts = action.payload
        })
        .addCase(fetchProduct.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;  
        })
        .addCase(fetchProductByCategory.pending,(state)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(fetchProductByCategory.fulfilled,(state,action)=>{
            state.loading= false;
            state.CategoryProducts = action.payload
        })
        .addCase(fetchProductByCategory.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;  
        })
        .addCase(fetchProductById.pending,(state)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(fetchProductById.fulfilled,(state,action)=>{
            state.loading= false;
            state.productId = action.payload
        })
        .addCase(fetchProductById.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;  
        })
    }
})

export default ProductSlice.reducer