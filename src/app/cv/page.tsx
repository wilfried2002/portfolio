"use client";

import Link from "next/link";
import ProfilePhoto from "../../../components/ProfilePhoto";

export default function CVPage() {
  const handleDownloadCV = () => {
    // Simuler le téléchargement du CV
    const link = document.createElement('a');
    link.href = '/cv-wilfried-ngankou.pdf'; // Placeholder - vous devrez ajouter votre vrai CV
    link.download = 'CV-Wilfried-Ngankou.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="gradient-bg min-h-screen">
      {/* Header */}
      <header className="glass border-b border-gray-700">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-bold text-white neon-text hover:text-cyan-400 transition-colors">
              ← Retour au portfolio
            </Link>
            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-xl font-bold hover-glow transition-all duration-300 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Télécharger CV</span>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <ProfilePhoto 
            src="/profile-photo.jpg" 
            alt="Wilfried Ngankou" 
            size="lg" 
          />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 neon-text">
            Wilfried Ngankou
          </h1>
          <p className="text-2xl text-cyan-400 mb-6">Développeur Full Stack & Administrateur systèmes et réseau</p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            <span>📧 contact@exemple.com</span>
            <span>📱 +237 672518012 / 657166435</span>
            <span>📍 Cameroun</span>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">Expérience Professionnelle</h2>
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl hover-glow transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Développeur Full Stack Senior</h3>
                  <p className="text-cyan-400">TechCorp Solutions</p>
                </div>
                <span className="text-gray-400">2022 - Présent</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Développement d'applications web avec React/Next.js et Node.js</li>
                <li>• Mise en place d'infrastructure cloud AWS et CI/CD</li>
                <li>• Optimisation des performances et sécurité des applications</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-2xl hover-glow transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">DevOps Engineer</h3>
                  <p className="text-cyan-400">CloudTech Industries</p>
                </div>
                <span className="text-gray-400">2020 - 2022</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Gestion d'infrastructure cloud multi-environnement</li>
                <li>• Automatisation des déploiements avec Docker et Kubernetes</li>
                <li>• Monitoring et alerting avec Prometheus et Grafana</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-2xl hover-glow transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Développeur Web</h3>
                  <p className="text-cyan-400">Digital Solutions</p>
                </div>
                <span className="text-gray-400">2018 - 2020</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Développement frontend avec React et TypeScript</li>
                <li>• Création d'APIs RESTful avec Express.js</li>
                <li>• Intégration de bases de données PostgreSQL et MongoDB</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">Compétences Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'GraphQL'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Redis'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gradient-to-r from-green-400/20 to-cyan-500/20 text-green-400 text-sm rounded-full border border-green-400/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">DevOps & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Ansible'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gradient-to-r from-purple-400/20 to-pink-500/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Outils & Méthodes</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Agile', 'Scrum', 'Jira', 'Postman', 'VS Code'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gradient-to-r from-orange-400/20 to-red-500/20 text-orange-400 text-sm rounded-full border border-orange-400/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">Formation</h2>
          <div className="glass p-8 rounded-2xl hover-glow transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Master en Informatique</h3>
                <p className="text-cyan-400">Université de Paris</p>
              </div>
              <span className="text-gray-400">2016 - 2018</span>
            </div>
            <p className="text-gray-300">Spécialisation en développement web et systèmes distribués</p>
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">Langues</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="text-lg font-bold text-white mb-2">Français</h3>
              <p className="text-cyan-400">Langue maternelle</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="text-lg font-bold text-white mb-2">Anglais</h3>
              <p className="text-cyan-400">Courant (TOEIC 950)</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="text-lg font-bold text-white mb-2">Espagnol</h3>
              <p className="text-cyan-400">Intermédiaire</p>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="text-center">
          <div className="glass p-12 rounded-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">Télécharger mon CV</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Vous pouvez télécharger mon CV complet au format PDF pour une consultation hors ligne ou pour l'envoyer à vos recruteurs.
            </p>
            <button
              onClick={handleDownloadCV}
              className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-xl font-bold hover-glow transition-all duration-300 flex items-center space-x-3 mx-auto"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Télécharger CV (PDF)</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
