const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function loginUser(email: string, password: string) {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data.error || "Error desconocido");
    }
  
    return data.token;
  }
  