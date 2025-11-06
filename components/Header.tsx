"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-700">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white neon-text">Wilfried Ngankou</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("projets")}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Projets
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("competences")}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Compétences
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => scrollToSection("certifications")}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Mes certifications
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <a
              href="/cv"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-2 rounded-lg font-medium hover-glow transition-all duration-300"
            >
              CV
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("projets")}
                className="text-left text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Projets
              </button>
              <button
                onClick={() => scrollToSection("competences")}
                className="text-left text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Compétences
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="text-left text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Mes certifications
              </button>
              <a
                href="/cv"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-2 rounded-lg font-medium text-center"
              >
                CV
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
