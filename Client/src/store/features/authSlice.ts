import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string;
  userId: string; 
}

const initialState: AuthState = {
  email: "",
  userId: "", 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<AuthState>) {
      state.email = action.payload.email;
      state.userId = action.payload.userId;
    },
    clearUserData(state) {
      state.email = "";
      state.userId = ""; 
    },
  },
});

export const { setUserData, clearUserData } = authSlice.actions;
export default authSlice.reducer;