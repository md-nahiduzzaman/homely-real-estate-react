import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider.jsx";

import toast, { Toaster } from "react-hot-toast";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
      <Toaster />
    </FirebaseProvider>
  </React.StrictMode>
);
