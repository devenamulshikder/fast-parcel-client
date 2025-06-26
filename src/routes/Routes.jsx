import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import { ErrorPage, Home } from "../pages";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../authentication/Login";
import Register from "../authentication/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
