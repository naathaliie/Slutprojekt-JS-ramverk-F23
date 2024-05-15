import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./routes/HomePage/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.scss";
import RootPage from "./routes/RootPage/RootPage.tsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.tsx";
import SearchPage from "./routes/SearchPage/SearchPage.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import MyFavoritPage from "./routes/MyPage/MyfavoritsPage/MyFavoritPage.tsx";
import OtherPage from "./routes/MyPage/OtherPage/OtherPage.tsx";
import MyReadBooksPage from "./routes/MyPage/MyReadBooksPage/MyReadBooksPage.tsx";
import SearchedAuthorPage from "./routes/SearchPage/SearchResultPage/SearchedAuthorPage/SearchedAuthorPage.tsx";
import SearchedBookPage from "./routes/SearchPage/SearchResultPage/SearchedBookPage/SearchedBookPage.tsx";
import AddReviewPage from "./routes/MyPage/AddReviewPage/AddReviewPage.tsx";
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
      {
        path: "/searchPage/author/:foundId",
        element: <SearchedAuthorPage />,
      },
      {
        path: "/myPage/myFavorits",
        element: <MyFavoritPage />,
      },
      {
        path: "/myPage/myReadBooks",
        element: <MyReadBooksPage />,
        children: [
          {
            path: "/myPage/myReadBooks/addBook/:readBook",
            element: <AddReviewPage />,
          },
        ],
      },
      {
        path: "/myPage/other",
        element: <OtherPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
