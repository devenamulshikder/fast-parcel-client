import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import { Coverage, ErrorPage, Home, MyParcel, SendParcel } from "../pages";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardOverview from "../pages/dashboard/DashboardOverview";
import Payment from "../pages/dashboard/payment/Payment";

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
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    errorElement: <ErrorPage />,
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

  // dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardOverview />,
      },
      {
        path: "/dashboard/parcels",
        element: <MyParcel />,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
      },
    ],
  },
]);
