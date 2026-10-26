import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./home/index.jsx";
import Testimonials from "./testimonials/index.jsx";
import Header from "./components/custom/header.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}