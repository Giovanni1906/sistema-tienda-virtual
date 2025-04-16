import { redirect } from "next/navigation";

export default function Home() {
  // verifica si el usuario está autenticado
  const isLoggedIn = false; 
  if (isLoggedIn) {
    redirect("/"); // o "/dashboard"
  } else {
    redirect("/login");
  }

  return null; // Nunca llega a mostrarse
}