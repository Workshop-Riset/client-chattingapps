import { createSlice } from '@reduxjs/toolkit'
import axios from '../config/instance'


export const clientSlice = createSlice({
    name:"client",
    initialState:{
        list:[]
    },
    reducers:{
        setClient: (state, action) => {
            state.list = action.payload
        }
    }
})

export const {setClient} = clientSlice.actions

export const login = (user, navigate) => {
    return async (dispatch) => {
        try {
            const response = await axios({
                method:"post",
                url:"/login",
                data: "user"
            })

            console.log(response);
            localStorage.setItem("access_token", response.data.access_token)
        } catch (error) {
            console.log(error);
        }
    }
}

export default clientSlice.reducer