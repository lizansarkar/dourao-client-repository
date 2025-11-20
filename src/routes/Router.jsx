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
        element: <PrivateRoute><Rider></Rider></PrivateRoute>
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
  }
]);
