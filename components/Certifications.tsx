"use client";

import React, { useState } from "react";
import type { Certification } from "../data/certifications";

interface Props {
  items: Certification[];
}

export default function Certifications({ items }: Props) {
  const [active, setActive] = useState<Certification | null>(null);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((c) => (
          <button
            key={c.title}
            onClick={() => setActive(c)}
            className="glass p-4 rounded-xl hover:scale-[1.02] transition-transform duration-200 text-left"
            aria-label={`Voir la certification ${c.title}`}
          >
            <div className="w-full h-40 bg-gray-800 rounded-md overflow-hidden flex items-center justify-center mb-4">
              {/* Use a plain img so the contributor can drop images in public/ without extra config */}
              <img
                src={c.image}
                alt={c.title}
                className="object-contain max-h-full max-w-full"
              />
            </div>
            <h3 className="text-white font-semibold text-lg">{c.title}</h3>
            <p className="text-gray-300 text-sm">{c.issuer} {c.date ? `• ${c.date}` : ""}</p>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setActive(null)}
          />

          <div className="relative z-10 max-w-4xl w-full bg-[#0b1020] rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{active.title}</h3>
                <p className="text-gray-300 text-sm">{active.issuer} {active.date ? `• ${active.date}` : ""}</p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="text-gray-400 hover:text-white"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            <div className="w-full h-[60vh] flex items-center justify-center bg-gray-900 rounded">
              <img
                src={active.image}
                alt={active.title}
                className="object-contain max-h-full max-w-full"
              />
            </div>

            {active.href && (
              <div className="mt-4 text-right">
                <a
                  href={active.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-2 rounded font-semibold"
                >
                  Voir la preuve
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
