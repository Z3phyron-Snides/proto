import { createBrowserRouter } from "react-router-dom";
//layouts
import Layout from "../common/layouts";
import ChatPage from "../common/layouts/chat.";
import Root from "../common/layouts/root";
import Auth from "../common/layouts/auth";

//pages
import Home from "../pages/home";
import Profile from "../pages/profile";
import Settings from "../pages/settings";
import General from "../pages/general";
import Privacy from "../pages/privacy";
import Security from "../pages/security";
import Chat from "../pages/chat";
import Register from "../pages/signUp";
import Login from "../pages/signIn";
import ForgotPassword from "../pages/forgotPassword";
import ResetPassword from "../pages/resetPassword";
import Post from "../pages/post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/feed/:id",
            element: <Post />,
          },
          {
            path: "/profile",
            element: <Profile />,
            children: [
              {
                path: "/profile/:id",
                element: <Profile />,
              },
            ],
          },
          {
            path: "/settings",
            element: <Settings />,
            children: [
              {
                path: "/settings/general",
                element: <General />,
              },
              {
                path: "/settings/privacy",
                element: <Privacy />,
              },
              {
                path: "/settings/security",
                element: <Security />,
              },
            ],
          },
        ],
      },
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "/auth/login",
            element: <Login />,
          },
          {
            path: "/auth/register",
            element: <Register />,
          },
          {
            path: "/auth/forgot-password",
            element: <ForgotPassword />,
          },
          {
            path: "/auth/reset-password",
            element: <ResetPassword />,
          },
        ],
      },
      {
        path: "/chat",
        element: <ChatPage />,
        children: [
          {
            path: "/chat/:id",
            element: <Chat />,
          },
        ],
      },
    ],
  },
]);

export default router;
