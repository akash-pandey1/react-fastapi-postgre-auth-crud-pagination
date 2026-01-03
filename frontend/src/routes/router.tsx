import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import UserList from "../pages/UserList";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/users", element: <UserList /> },
        {path: "/profile", element: <Profile /> }
      ]
    },
    {
      element: <AuthLayout />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Signup /> }
      ]
    }
  ]);
  
  export default router;