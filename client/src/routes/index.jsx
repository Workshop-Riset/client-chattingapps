import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import MainLayout from "./MainLayout";
import ChatPage from "../Pages/ChatPage";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/chat",
    element:<ChatPage/>
  },
  {
    path:"/register",
    element:<Register/>
  },
],
);

export default router;
