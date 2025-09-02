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
            src="/profile-photo.jpeg" 
            alt="Wilfried Ngankou" 
            size="lg" 
          />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 neon-text">
            Wilfried Ngankou
          </h1>
          <p className="text-2xl text-cyan-400 mb-6">Développeur Full Stack & Administrateur systèmes et réseau</p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            <span>📧 ngankouwilfried8@gmail.com</span>
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
                  <h3 className="text-xl font-bold text-white mb-2">Community Manager</h3>
                  <p className="text-cyan-400">Dufa - Cameroun</p>
                </div>
                <span className="text-gray-400">Octobre 2022 - fevrier 2023</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Gestion et animation de communautés en ligne</li>
                <li>• création de contenus stratégiques et optimisation de la présence digitale pour renforcer l’engagement et la notoriété de la marque</li>
                <li>• Analyse et reporting des performances des campagnes sociales,</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-2xl hover-glow transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Développeur Full Stack junior</h3>
                  <p className="text-cyan-400">TKM Gescreen</p>
                </div>
                <span className="text-gray-400">Juin 2023 - Juillet 2024</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Développement d'applications de gestion de stock JAVA Swing, MysqlServer</li>
                <li>• Conception et déploiement d’une infrastructure locale sécurisée pour le partage et la gestion de fichiers</li>
                <li>• Optimisation des performances et sécurité du site web</li>
                <li>• suivi des KPI et recommandations stratégiques pour optimiser l’impact digital de la marque</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-2xl hover-glow transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Développeur & Administrateur systèmes et reseau</h3>
                  <p className="text-cyan-400">MIMOSA</p>
                </div>
                <span className="text-gray-400">Août 2024 - présent</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Gestion d'infrastructure cloud multi-environnement</li>
                <li>• Gestion et maintenance des infrastructures réseau et systèmes</li>
                <li>• Déployer et configurer des serveurs Windows/Linux, Active Directory, services DNS/DHCP, sauvegardes et solutions de virtualisation</li>
                <li>• Mettre en place des politiques de sécurité, surveiller les incidents réseau, réaliser des audits et appliquer les correctifs pour protéger les données de l’entreprise</li>
                <li>• Fournir un support aux utilisateurs, résoudre les incidents et former le personnel aux bonnes pratiques IT</li>
                <li>• Concevoir et maintenir des scripts pour automatiser les tâches récurrentes et garantir la sauvegarde automatique des sessions et fichiers utilisateurs vers un serveur de sauvegarde centralisé.</li>
                <li>• Conception et déploiement d’un logiciel de gestion de présence</li>
                <li>• Développement d’un logiciel de suivi de livraison client automatisé pour le département logistique</li>
                <li>• Maintenance logicielle et matérielle</li>

              </ul>
            </div>

            {/* <div className="glass p-8 rounded-2xl hover-glow transition-all duration-300">
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
            </div> */}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">Compétences Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['Tailwind CSS', 'HTML', 'JavaScript','React', 'Next.js', 'TypeScript'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Django', 'PostgreSQL', 'SQLSERVER','Node.js' ].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gradient-to-r from-green-400/20 to-cyan-500/20 text-green-400 text-sm rounded-full border border-green-400/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">DevOps & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Docker'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gradient-to-r from-purple-400/20 to-pink-500/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Outils & Méthodes</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Agile', 'Scrum', 'VS Code', 'Visual studio', 'Netbeans IDE', 'PowerAMC', 'Argo UML','Astah UML'].map(skill => (
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
                <h3 className="text-xl font-bold text-white mb-2">BTS option Genie logiciel</h3>
                <p className="text-cyan-400">ISETAG</p>
              </div>
              <span className="text-gray-400">2022 - 2023</span>
            </div>
            <p className="text-gray-300">Spécialisation en développement Web et Administration systéme et réseau</p>
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">Langues</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="text-lg font-bold text-white mb-2">Français</h3>
              <p className="text-cyan-400">Soutenue</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <h3 className="text-lg font-bold text-white mb-2">Anglais</h3>
              <p className="text-cyan-400">Moyen</p>
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
