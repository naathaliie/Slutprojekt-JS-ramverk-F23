import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./routes/HomePage/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.scss";
import RootPage from "./routes/RootPage/RootPage.tsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.tsx";
import SearchPage from "./routes/SearchPage/SearchPage.tsx";
import SearchContextProvider from "./context/SearchContext/SearchContextProvider.tsx";
import SearchedBookPage from "./routes/SearchPage/SearchResultPage/SearchedBookPage.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";

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
        path: "/searchPage",
        element: <SearchPage />,
        children: [],
      },
      {
        path: "/searchPage/book/:foundId",
        element: <SearchedBookPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <SearchContextProvider>
        <RouterProvider router={router} />
      </SearchContextProvider>
    </React.StrictMode>
  </Provider>
);
