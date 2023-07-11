const { createSlice } = require("@reduxjs/toolkit");

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
      // Save updated cart data to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    remove(state, action) {
    return state.filter((item) => item.id !== action.payload);
      // Save updated cart data to localStorage
    //   localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
