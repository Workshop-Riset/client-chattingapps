import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import MainLayout from "./MainLayout";
import ChatPage from "../Pages/ChatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
]);

export default router;
