import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import SignupPage from "./components/SignupPage.jsx";
import AddProperty from "./components/Add Property.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/LoginPage",
    element: <LoginPage />,
  },
  {
    path: "/SignupPage",
    element: <SignupPage />,
  },
  {
    path: "/AddProperty",
    element: <AddProperty />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <StyledEngineProvider injectFirst>
        {/* <App /> */}
      </StyledEngineProvider>
    </RouterProvider>
  </React.StrictMode>
);
