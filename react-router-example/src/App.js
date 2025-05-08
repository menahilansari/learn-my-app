import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/Login";
import SignupPage from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
