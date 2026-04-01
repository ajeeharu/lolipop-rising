// src/routes/index.tsx
import { Routes, Route } from "react-router";
import React from "react";
import { AuthProvider } from "react-oidc-context";
import { MainLayout } from "../components/layouts/MainLayout";
import { Login } from "../pages/LogIn";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_fGtvowy25",
  client_id: "29fsokkcv74dil3kl926v01fcg",
  redirect_uri: "https://web-server.main.jp/study_space/react-test/frontend/dist/",
  response_type: "code",
  scope: "phone openid email",
};

export const AppRoutes = () => {
  return (
    <AuthProvider {...cognitoAuthConfig}>
      <Routes>
        {/* 「メインのレイアウト」を使うグループ */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Login />} />
          {/* 他の通常のページ */}
        </Route>
      </Routes>
    </AuthProvider>
  )
};