import React, { Suspense } from "react";
import { AuthProvider, useAuth } from "./context/auth-context";
import LoginForm from "./component/login-form";
import Header from "./component/header";

const MusicLibrary = React.lazy(() => import("musicLibrary/Library"));

function Authed() {
  const { role } = useAuth();
  if (!role) return <LoginForm />;

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Suspense fallback={<div className="p-6">Loading Library…</div>}>
          <MusicLibrary />
        </Suspense>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Authed />
    </AuthProvider>
  );
}
