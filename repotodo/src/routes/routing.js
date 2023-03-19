import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import HomePage from "../Pages/Home";
import ListPage from "../Pages/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/:owner/:repository/issues",
        element: <ListPage />,
      },
    ],
  },
]);

export default router;
