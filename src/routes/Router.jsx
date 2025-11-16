import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";

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
            // সব JSON একসাথে ফেচ করো
            const [howWorkRes, mainServiceRes] = await Promise.all([
              fetch("/howWork.json"),
              fetch("/mainService.json")
            ]);

            // JSON পার্স করো
            const howWork = await howWorkRes.json();
            const mainService = await mainServiceRes.json();

            // একটা অবজেক্ট রিটার্ন করো
            return { howWork, mainService };
          } catch (error) {
            console.error("Loader error:", error);
            return { howWork: [], mainService: [] };
          }
        },
      },
    ],
  },
]);
