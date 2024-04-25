import { useContext } from "react";
import {useNavigate} from "react-router-dom"
import { ContexStore } from "../Store/ContexStore";

export default function ConversationCard({online}){
  console.log(online,'<< conv card');
    const navigate = useNavigate()
    const data = useContext(ContexStore)
    
    return (
        <div className="card mb-2">
          <button>
        <div className="card-body d-flex align-items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydwl0wjsU6jBkjQJsDYudvTa8Kx0eLQyUcg&usqp=CAU"
            alt="Profile"
            className="rounded-circle mr-3"
            style={{ width: "50px", height: "50px", objectFit: "fill" }}
          />
          <div>
            <div className="card-title" style={{ fontWeight: "bold" }}>
              {online.userName?.username}
            </div>
            <div>
              <button type="button" className="btn btn-outline-primary" onClick={(e) => data.handlerAddFriends(online.userName.id, navigate, e)}>Add User</button>
            </div>
          </div>
        </div>
        </button>
      </div>
    )
}