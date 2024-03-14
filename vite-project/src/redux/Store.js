import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";

const Store = configureStore({
reducer:{
    cartData: CartSlice,
    CategoryData: CategorySlice,
    SearchData: SearchSlice,
}

});
export default Store;