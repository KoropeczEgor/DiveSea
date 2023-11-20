import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../Pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
