import { createContext, useState } from "react";
import axios from "../config/instance";
import Swal from 'sweetalert2'

export const ContexStore = createContext("default value");

export default function ContexProvider({ children }) {
  const [friends, setFriends] = useState([]);
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState({});
  const [onlineUsers, setOnlineUsers] = useState([]);

  const [sendMSg, setSendMsg] = useState({
    message: "",
  });
  const fetchConversation = async () => {
    try {
      const { data } = await axios({
        url: "/conversations",
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setConversation(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerSendMsg = async (conversationId, receiverId, e) => {
    try {
      e.preventDefault();
      const { data } = await axios({
        url: `/conversations/${conversationId}/messages/${receiverId}`,
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
        data: sendMSg,
        method: "post",
      });
      fetchMessage(conversationId);
      setSendMsg({ message: "" });
      console.log(data, "<<<<< masuk mang");
    } catch (error) {
      console.log(error);
    }
  };

  const handlerAddFriends = async (idFriend, navigate, e) => {
    try {
      e.preventDefault()
      const {data} = await axios({
        url : `users/${idFriend}/add-friend`,
        method : 'post',
        headers : {Authorization : `Bearer ${localStorage.access_token}`,
      }
    })
    Swal.fire({
      title: 'Success Add Friend!',
      text: data.message,
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    navigate('/friends')
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
  const fetchMessage = async (conversationId) => {
    try {
      const { data } = await axios({
        url: `/conversations/${conversationId}/messages`,
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setMessage(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchFriends = async () => {
    try {
      const { data } = await axios({
        url: "/friends",
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setFriends(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContexStore.Provider
      value={{
        friends,
        fetchFriends,
        conversation,
        fetchConversation,
        fetchMessage,
        message,
        handlerSendMsg,
        sendMSg,
        setSendMsg,
        setOnlineUsers,
        onlineUsers,
        handlerAddFriends
      }}
    >
      {children}
    </ContexStore.Provider>
  );
}
