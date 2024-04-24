import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Features/clientSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user, setUser] = useState({
      email:"",
      password:""
  })

  const inputHandler = async(event) => {
      const {name, value} = event.target
      setUser({
          ...user,
          [name]:value
      })
  }

  const loginUser = (event)=> {
    event.preventDefault()
    dispatch(login(user, navigate))
  }
  return (
    <div className="flex bg-orange-400 p-20 rounded-2xl mt-5">
      <form onSubmit={loginUser} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={inputHandler}
            value={user.email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg h-10"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={inputHandler}
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg h-10"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
