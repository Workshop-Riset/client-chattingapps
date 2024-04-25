import { createSlice } from '@reduxjs/toolkit'
import axios from '../config/instance'
import Swal from 'sweetalert2'

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
        // console.log(user,`<<< udah masuk slice`);
        try {
            const response = await axios({
                method:"post",
                url:"/login",
                data: user
            })
            Swal.fire({
                title: 'Success Login!',
                text: "Success Login",
                icon: 'success',
                confirmButtonText: 'Ok'
              })
            // console.log(response);
            // dispatch(setClient())
            localStorage.setItem("access_token", response.data.accessToken)
            
            navigate("/")
        } catch (error) {
            console.log(error, '<<<<<<<');
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
    }
}

export default clientSlice.reducer