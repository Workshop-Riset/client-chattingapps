import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import MainLayout from "./MainLayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);

export default router;
