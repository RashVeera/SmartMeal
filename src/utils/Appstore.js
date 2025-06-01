import { configureStore } from "@reduxjs/toolkit";
import UserDetails from "./UserDetails";

const Appstore = configureStore({
  reducer: {
    user_Details: UserDetails,
  },
});

export default Appstore;
