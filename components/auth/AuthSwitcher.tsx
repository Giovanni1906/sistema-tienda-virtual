"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import RecoverForm from "./RecoverForm";

type View = "login" | "register" | "recover";

export default function AuthSwitcher() {
  const [view, setView] = useState<View>("login");

  return (
    <div className="relative w-full max-w-md h-[540px] overflow-hidden">
      {/* Login */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out
        ${view === "login" ? "opacity-100 translate-x-0 z-20 pointer-events-auto" : "opacity-0 translate-x-full z-10 pointer-events-none"}`}
      >
        <LoginForm
          onSwitchToRegister={() => setView("register")}
          onSwitchToRecover={() => setView("recover")}
        />
      </div>

      {/* Register */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out
        ${view === "register" ? "opacity-100 translate-x-0 z-20 pointer-events-auto" : "opacity-0 translate-x-full z-10 pointer-events-none"}`}
      >
        <RegisterForm onSwitchToLogin={() => setView("login")} />
      </div>

      {/* Recover */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out
        ${view === "recover" ? "opacity-100 translate-x-0 z-20 pointer-events-auto" : "opacity-0 translate-x-full z-10 pointer-events-none"}`}
      >
        <RecoverForm onSwitchToLogin={() => setView("login")} />
      </div>
    </div>
  );
}
