import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Coverage from "../pages/coverage/Coverage";
import AboutUs from "../pages/about-us/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/rider/Rider";
import SendPercel from "../pages/send-percel/SendPercel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyPercels from "../pages/dashboard/myPercels/MyPercels";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentSuccess from "../pages/dashboard/payment/PaymentSuccess";
import PaymentCancelled from "../pages/dashboard/payment/PaymentCancelled";
import ApproveRider from "../pages/rider/ApproveRider";
import UserManagement from "../pages/dashboard/userManagement/UserManagement";
import ErrorPage from "../ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: async () => {
          try {
            const [howWorkRes, mainServiceRes] = await Promise.all([
              fetch("/howWork.json"),
              fetch("/mainService.json")
            ]);

            const howWork = await howWorkRes.json();
            const mainService = await mainServiceRes.json();

            return { howWork, mainService };
          } catch (error) {
            console.error("Loader error:", error);
            return { howWork: [], mainService: [] };
          }
        },
      },

      {
        path: "/rider",
        element: <PrivateRoute><Rider></Rider></PrivateRoute>,
        loader: () => fetch("/serviceCenters.json").then(res => res.json())
      },
      {
        path: "/send-percel",
        element: <PrivateRoute><SendPercel></SendPercel></PrivateRoute>,
        loader: () => fetch("/serviceCenters.json").then(res => res.json())
      },
      {
        path: "/coverage",
        element: <Coverage></Coverage>,
        loader: () => fetch("/serviceCenters.json").then(res => res.json())
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: 'my-parcels',
        element: <MyPercels></MyPercels>
      },
      {
        path: 'payment/:parcelId',
        element: <Payment></Payment>
      },
      {
        path: 'payment-success',
        element: <PaymentSuccess></PaymentSuccess>
      },
      {
        path: 'payment-cancelled',
        element: <PaymentCancelled></PaymentCancelled>
      },
      {
        path: 'approve-rider',
        element: <ApproveRider></ApproveRider>
      },
      {
        path: 'users-management',
        element: <UserManagement></UserManagement>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
]);
