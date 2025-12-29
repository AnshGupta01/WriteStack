import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice
        // May add more slices here in the future for posts, for example.
    }
});

export default store;