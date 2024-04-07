import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Home from "./pages/Home.jsx";
import Projects from "./pages/projects/Projects.jsx";
import { Work } from "./pages/work/Work.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="work" element={<Work />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
