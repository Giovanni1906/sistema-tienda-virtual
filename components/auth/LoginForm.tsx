import { useState } from "react";
import { useLogin } from "@/hooks/useLogin";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type Props = {
  onSwitchToRegister: () => void;
  onSwitchToRecover: () => void;
};

export default function LoginForm({
  onSwitchToRegister,
  onSwitchToRecover,
}: Props) {
  const { login, loading, error } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
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

      <h1 className="text-2xl font-semibold text-center text-primary mb-0">
        Sistema de tienda virtual
      </h1>
      <p className="text-sm font-light text-center text-muted">
        Ingrese su usuario y contraseña para iniciar sesión
      </p>

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

      <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm font-light text-muted mt-4">
      <button
          type="button"
          onClick={onSwitchToRecover}
          className="text-center sm:text-left hover:underline transition-colors cursor-pointer"
        >
          ¿Olvidaste tu contraseña?
        </button>

        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-center sm:text-left hover:underline transition-colors cursor-pointer"
        >
          ¿No tienes una cuenta?
        </button>
      </div>
    </form>
  );
}
