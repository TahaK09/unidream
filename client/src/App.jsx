import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}