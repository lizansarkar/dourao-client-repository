import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Coverage from "../pages/coverage/Coverage";

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
        path: "/coverage",
        element: <Coverage></Coverage>,
        loader: () => fetch("/serviceCenters.json").then(res => res.json())
      },
    ],
  },
]);
