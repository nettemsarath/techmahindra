import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  productsList: [
    {
      Name: "product1",
      Types: ["downloadable", "subscription-based", "delivery based"],
      ImageLink: "image1",
      Price: "250",
    },
    {
      Name: "product2",
      Types: ["downloadable", "subscription-based", "delivery based"],
      ImageLink: "image2",
      Price: "500",
    },
    {
      Name: "product3",
      Types: ["downloadable", "subscription-based", "delivery based"],
      ImageLink: "image3",
      Price: "750",
    },
    {
      Name: "product4",
      Types: ["downloadable", "subscription-based", "delivery based"],
      ImageLink: "image4",
      Price: "1000",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialData,
  reducers: {},
  extraReducers: (builder) => {},
});

export default productsSlice.reducer;
