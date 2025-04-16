"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type Props = {
  onSwitchToLogin: () => void;
};

export default function RegisterForm({ onSwitchToLogin }: Props) {
  const [storeName, setStoreName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // llamado a hook useRegister

    console.log("Registrando tienda:", { storeName, adminEmail, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-20 w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-5"
    >
      <h1 className="text-2xl font-semibold text-center text-primary mb-0">Registrar tienda</h1>
      <p className="text-sm font-light text-center text-muted">
        Ingrese los datos de su tienda y del administrador
      </p>

      {error && (
        <p className="text-red-600 bg-red-50 px-3 py-2 rounded text-sm">{error}</p>
      )}

      <Input
        label="Nombre de la tienda"
        type="text"
        placeholder="mi tienda virtual"
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
        required
      />

      <Input
        label="Correo del administrador"
        type="email"
        placeholder="usuario@correo.com"
        value={adminEmail}
        onChange={(e) => setAdminEmail(e.target.value)}
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

      <Input
        label="Confirmar contraseña"
        type="password"
        placeholder="••••••••"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        required
      />

      <Button type="submit">Crear cuenta</Button>

      <div className="text-sm font-light text-muted text-center mt-4">
        ¿Ya tienes una cuenta?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="hover:underline transition-colors"
        >
          Inicia sesión
        </button>
      </div>
    </form>
  );
}
