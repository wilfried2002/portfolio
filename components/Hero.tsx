"use client";

import ProfilePhoto from "./ProfilePhoto";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 gradient-bg min-h-screen flex items-center">
      <div className="mx-auto max-w-5xl text-center w-full">
        {/* Profile Photo */}
        <ProfilePhoto 
          src="/profile-photo.jpg" 
          alt="Wilfried Ngankou" 
          size="lg" 
        />
        
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Développeur Full Stack &
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent neon-text">
              Administrateur systèmes et reseau
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Spécialisé dans le développement d'applications web modernes et l'infrastructure cloud. 
            Je transforme vos idées en solutions robustes et évolutives.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={() => {
              const element = document.getElementById("projets");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-xl font-bold hover-glow transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Voir mes projets</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-bold hover-glow transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Me contacter</span>
            <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="glass p-8 rounded-2xl hover-glow transition-all duration-300 float-animation">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 neon-glow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-white mb-4 text-xl">Développement Web</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Applications Python/Django React/Next.js, APIs RESTful,Laravel, bases de données relationnelles et NoSQL.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl hover-glow transition-all duration-300 float-animation" style={{ animationDelay: '0.5s' }}>
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-xl flex items-center justify-center mb-6 neon-glow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="font-bold text-white mb-4 text-xl">DevOps & Cloud</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              AWS, Azure, Docker, Kubernetes, CI/CD, monitoring et infrastructure as code.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl hover-glow transition-all duration-300 float-animation" style={{ animationDelay: '1s' }}>
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 neon-glow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-bold text-white mb-4 text-xl">Sécurité</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sécurisation des applications, gestion des accès, audit de sécurité et conformité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
