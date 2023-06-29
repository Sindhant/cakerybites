import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  productList: [],
  cartItem: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      // console.log(action);
      state.productList = [...action.payload];
    },
    addCartItem: (state, action) => {
      const check = state.cartItem.some(el=>el._id === action.payload._id)
      if(check){
        toast("Already  in Cart")
      }
      else{
        toast("Item Added to Cart ")
        const total = action.payload.price;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
      }
     
    },
    deleteCartItem: (state, action) => {
      toast("Item Deleted");
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      state.cartItem.splice(index, 1);
      console.log(index);
    },
    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      const qtyInc =++qty
      state.cartItem[index].qty = qtyInc;

      const price = state.cartItem[index].price
      const total = price *qtyInc
      state.cartItem[index].total = total
    },
    decreseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      if (qty > 1) {
        const qtyDec = --qty
        state.cartItem[index].qty = qtyDec;

        const price = state.cartItem[index].price
        const total = price *qtyDec
        state.cartItem[index].total = total
      }
    },
  },
});
export const { 
  setDataProduct,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreseQty,
} = productSlice.actions;

export default productSlice.reducer;
