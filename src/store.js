import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});

// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./features/cart/cartSlice";

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer, // 👈 matches slice name
//   },
// });
