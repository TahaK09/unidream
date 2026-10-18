import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";


let router = createBrowserRouter([
  {
    path: "/",
    Component: <Home />,
  },
]);

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
