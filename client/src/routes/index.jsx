import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../Pages/Login";
import MainLayout from "./MainLayout";
import ChatPage from "../Pages/ChatPage";
import RegisterPage from "../Pages/RegisterPage";
import Contact from "../Pages/Contact";
import Conversation from "../Pages/Conversation";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";
async function GuardNavigation() {
  //ini di taruh di loader login/register
  if (localStorage.access_token) {
    return redirect("/");
  }
  return null;
}

async function unGuardNavigation() {
  //ini taruh di loader mainlayout
  if (!localStorage.access_token) {
    return redirect("/login");
  }
  return null;
}
const router = createBrowserRouter([
  {
    path : '/',
    element : <MainLayout />,
    loader : unGuardNavigation,
    children : [{
      path : '',
      element : <Home />
    },{
      path : '/contact',
      element : <Contact />
    },{
      path : '/conversation',
      element : <Conversation />
    },{
      path : '/profile',
      element : <Profile />
    }]
  },
  {
    path: "/login",
    element: <Login />,
    loader : GuardNavigation
  },
    path:"/register",
    element:<Register/>,
    loader : GuardNavigation
  }
],
);

export default router;
