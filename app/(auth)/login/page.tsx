"use client";

import Input from "@/components/ui/Input";
import LoginBackground from "@/components/auth/LoginBackground";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { useLogin } from "@/hooks/useLogin";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <main className="login-page min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <LoginBackground />
      <form
        onSubmit={handleSubmit}
        className="relative z-20 w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-5"
      >
        
        <div className="flex justify-center">
        <img
            src="/logo.png"
            alt="Logo de la tienda"
            className="w-24 h-auto mb-2 animate-fade-in"
        />
        </div>

        <h1 className="text-2xl font-semibold text-center text-primary mb-0">Sistema de tienda virtual</h1>
        <p className="text-sm font-light text-center text-muted">Ingrese su usuario y contraseña para iniciar sesión</p>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">
            {error}
          </p>
        )}

        <Input
          label="Correo electrónico"
          type="email"
          placeholder="usuario@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Contraseña"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Ingresando..." : "Ingresar"}
        </Button>
      </form>
    </main>
  );
}
