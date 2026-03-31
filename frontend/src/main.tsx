// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // v7では 'react-router' からインポート
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* 他のルートをここに追加 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);