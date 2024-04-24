import { createSlice } from '@reduxjs/toolkit'
import axios from '../config/instance'
import Swal from 'sweetalert2'
import socket from '../socket'


export const clientSlice = createSlice({
    name:"client",
    initialState:{
        list:[],
        message:{},
    },
    reducers:{
        setClient: (state, action) => {
            state.list = action.payload
        },
        setMessage: (state, action) => {
            state.list = action.payload
        },
    }
})

export const {setClient, setMessage} = clientSlice.actions

export const login = (user, navigate) => {
    return async (dispatch) => {
        console.log(user,`<<< udah masuk slice`);
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
            localStorage.setItem("access_token", response.data.accessToken)
            
            navigate("/chat")
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
    }
}

export const sendMessage = (message) => {
    return async (dispatch) => {
        try {
            const {data} = await axios({
                method:"post",
                url:"/conversations/1/messages/15",// ini masih hardcode juga
                data:{message},
                headers:{
                    Authorization:"Bearer " + localStorage.getItem("access_token")
                }
            })

            //socket.emit supaya server tahu kaapn kasih tau kesemuanya

            socket.emit("newMessage")

            console.log(data,`pesan di slice`);

        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
    }
}

export const myConversation = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios({
                method:"get",
                url:"/conversations/1/messages",  // ini masih hardcode :conversationId
                headers: {
                    Authorization:"Bearer " + localStorage.getItem("access_token")
                }
            })

            // console.log(data,`<<< cakapanan ku di slice`);
            dispatch(setClient(data.message))
        } catch (error) {
            console.log(error);
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