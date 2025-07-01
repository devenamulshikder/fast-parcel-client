import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import { Coverage, ErrorPage, Home, SendParcel } from "../pages";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "/coverage",

        element: (
          <PrivateRoute>
            <Coverage />
          </PrivateRoute>
        ),
        loader: () => fetch("/serviceCenter.json"),
      },
      {
        path: "/sendParcel",
        element:<PrivateRoute>
          <SendParcel/>
        </PrivateRoute>
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
