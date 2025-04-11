import { redirect } from "next/navigation";

export default function Home() {
  // Aquí deberías verificar si el usuario está autenticado
  const isLoggedIn = false; // Reemplaza esto con tu lógica real

  if (isLoggedIn) {
    redirect("/"); // o "/dashboard"
  } else {
    redirect("/login");
  }

  return null; // Nunca llega a mostrarse
}
