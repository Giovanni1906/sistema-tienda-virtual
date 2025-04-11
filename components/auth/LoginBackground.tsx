export default function LoginBackground() {
    return (
      <>
        {/* CAPA OSCURA ENCIMA */}
        <div className="absolute inset-0 bg-black" />

        {/* VIDEO DE FONDO */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="/videos/login-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
  

      </>
    );
  }
  