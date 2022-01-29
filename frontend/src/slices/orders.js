import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  AllOrders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState: initialData,
  reducers: {
    addOrder(state, action) {},
  },
  extraReducers: (builder) => {},
});

export default ordersSlice.reducer;
