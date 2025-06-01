import { createSlice } from "@reduxjs/toolkit";

const UserDetails = createSlice({
  name: "user_Details",
  initialState: {
    userObj: {
      name: "",
      weight: "",
      height: "",
      age: "",
      cusines: "",
      dietary: "",
      allergies: "",
      goal: "",
      email: "",
    },
  },
  reducers: {
    setUserDetails: (state, action) => {
      // console.log(action.payload);
      const {
        name,
        weight,
        height,
        age,
        cusines,
        dietary,
        allergies,
        goal,
        email,
      } = action.payload;
      state.userObj = {
        name,
        weight,
        height,
        age,
        cusines,
        dietary,
        allergies,
        goal,
        email,
      };
    },
    resetUserDetails: (state) => {
      state.userObj = {
        name: "",
        weight: "",
        height: "",
        age: "",
        cusines: "",
        dietary: "",
        allergies: "",
        goal: "",
        email: "",
      };
      // console.log(state.userObj);
    },
  },
});

export const { setUserDetails, resetUserDetails } = UserDetails.actions;
export default UserDetails.reducer;
