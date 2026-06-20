import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Bootstrap 5 CSS + Icons (dùng CDN → paste vào index.html)
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
