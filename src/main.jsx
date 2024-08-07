import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Error.jsx";
import VideoDetail from "./Components/VideoDetail.jsx";
import SearchFeed from "./Components/SearchFeed.jsx";
import Channel from "./Components/Channel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/video/:id",
    element: <VideoDetail />,
  },
  {
    path: "/search/:searchTerm",
    element: <SearchFeed />,
  },
  {
    path: "/channel/:id",
    element: <Channel />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
