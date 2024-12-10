import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        userInfo: {}
    },
    reducers: {
        setAuthenticate: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated;
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload.userInfo;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setAuthenticate, setUserInfo } = authSlice.actions

export default authSlice.reducer;