// src/routes/index.tsx
import { Routes, Route } from "react-router";
import { MainLayout } from "../components/layouts/MainLayout";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* 「メインのレイアウト」を使うグループ */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* 他の通常のページ */}
      </Route>

      {/* もし「ヘッダー・フッターがない画面（ログイン画面など）」
          を作りたい場合は、ここ（MainLayoutの外）に追加できる */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
};