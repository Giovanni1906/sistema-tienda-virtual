import { useState } from "react";
import { useLogin } from "@/hooks/useLogin";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type Props = {
  onSwitchToLogin: () => void;
};

export default function RecoverForm({ onSwitchToLogin }: Props) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría el envío del email para recuperación
    console.log("Recuperar cuenta:", email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-20 w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-5"
    >
      <h1 className="text-2xl font-semibold text-center text-primary mb-0">
        Recuperar contraseña
      </h1>
      <p className="text-sm font-light text-center text-muted">
        Ingrese el email asociado a su cuenta
      </p>

      <Input
        label="Correo electrónico"
        type="email"
        placeholder="usuario@correo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Button type="submit">Enviar enlace de recuperación</Button>

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
