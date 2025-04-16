"use client";

import LoginBackground from "@/components/auth/LoginBackground";
import AuthSwitcher from "@/components/auth/AuthSwitcher";
import ThemeToggle from "@/components/ThemeToggle";

export default function AuthPage() {
  return (
    <main className="login-page min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <ThemeToggle />
      <LoginBackground />
      <AuthSwitcher />
    </main>
  );
}
