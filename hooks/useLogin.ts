import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/api/auth";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError("");

    try {
      const token = await loginUser(email, password);
      localStorage.setItem("token", token);
      router.push("/"); // Redirigir al home o dashboard
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
