import { createContext, useState } from "react";
import axios from "../config/instance";
export const ContexStore = createContext("default value");

export default function ContexProvider({ children }) {
    const [friends, setFriends] = useState([])
    const fetchFriends = async() => {
        try {
            const {data} = await axios({
                url : '/friends',
                method : 'get',
                headers : {
                    Authorization : `Bearer ${localStorage.access_token}`
                }
            })
            setFriends(data)
        } catch (error) {
            console.log(error);
        }
    }

  return <ContexStore.Provider value={{friends, fetchFriends}}>{children}</ContexStore.Provider>;
}
