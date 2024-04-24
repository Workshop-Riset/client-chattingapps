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

export const sendMessage = (message, user) => {
    return async (dispatch) => {
        try {
            console.log(user, `<< slice <<< send message dari yang login `);
            const response = await axios({
                method: "post",
                url: `/conversations/${user.conversationId}/messages/${user.receiverId}`,
                data: { message },
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("access_token"),
                },
            });

            if (response.data) {
                // If data is present in the response, handle it accordingly
                console.log("Data received from server:", response.data);
            } else {
                console.log("No data received from server");
            }

            // Emit event to notify server about the new message
            socket.emit("newMessage", localStorage.getItem("access_token"));

            // Optionally, you can dispatch an action or handle the response data here
        } catch (error) {
            console.error("Error in sendMessage:", error);
            // Optionally, dispatch an action or show an error message to the user
        }
    };
};

export const myConversation = (conversationId) => {
    return async (dispatch) => {
        try {
            const {data} = await axios({
                method:"get",
                url:`/conversations/${conversationId}/messages`,  // ini masih hardcode :conversationId
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