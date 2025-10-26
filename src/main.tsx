import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/dashboard.tsx";
import { HelmetProvider } from "react-helmet-async";
import TransactionPage from "./pages/transactions.tsx";

const router = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
  { path: "/transactions", element: <TransactionPage /> },
  { path: "/reports", element: <div>Hi</div> },
  { path: "/settings", element: <div>Hi</div> },
]);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </HelmetProvider>,
);
