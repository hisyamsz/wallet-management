import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/dashboard.tsx";

const router = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
  { path: "/transactions", element: <div>Hi</div> },
  { path: "/reports", element: <div>Hi</div> },
  { path: "/settings", element: <div>Hi</div> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
