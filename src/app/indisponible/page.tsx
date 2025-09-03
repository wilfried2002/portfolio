"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function IndisponiblePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique après 5 secondes vers la page d'accueil
    const timer = setTimeout(() => {
      router.push("/"); // change "/" par l'URL souhaitée
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Page temporairement indisponible</h1>
      <p className="text-lg mb-6 text-center">
        Ce projet n est pas encore disponible. Vous allez être redirigé vers la page d accueil dans quelques secondes.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-bold hover:bg-cyan-500 transition"
      >
        Aller à l accueil
      </a>
    </div>
  );
}
