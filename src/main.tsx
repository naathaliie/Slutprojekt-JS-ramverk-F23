import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./routes/HomePage/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.scss";
import RootPage from "./routes/RootPage/RootPage.tsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.tsx";
import SearchResultPage from "./routes/SearchResultPage/SearchResultPage.tsx";

//The router for all the paths
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/searchResult",
        element: <SearchResultPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
