"use client";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import ProjectCard, { ProjectProps } from "../../components/ProjectCard";
import { projects } from "../../data/projects";


export default function HomePage() {
  return (
    <div className="gradient-bg min-h-screen">
      <Header />
      <Hero />

      <Section id="projets" title="Projets sélectionnés">
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((p: ProjectProps) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section id="competences" title="Compétences" className="gradient-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Administration systèmes (Windows, Linux, Active Directory, virtualisation)",
            "Administration réseau (VLAN, VPN, routeurs, firewalls, supervision)",
            "Sécurité informatique (politiques, gestion des accès, durcissement, détection d'intrusion)",
            "Cloud & Services (AWS, Azure, Docker, Ansible, CI/CD)",
            "Développement & Scripting (Bash, PowerShell, Python)",
            "Support & Supervision (dépannage, monitoring, documentation)"
          ].map((s: string, index: number) => (
            <div
              key={s}
              className="glass p-6 rounded-xl hover-glow transition-all duration-300 float-animation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full neon-glow"></div>
                <span className="text-gray-300 font-medium">{s}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" className="gradient-bg">
        <div className="text-center">
          <p className="text-gray-300 text-lg mb-8">Ouvert aux collaborations et opportunités.</p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="mailto:contact@exemple.com"
              className="group glass px-6 py-3 rounded-xl hover-glow transition-all duration-300 border border-gray-700"
            >
              <span className="text-cyan-400 group-hover:text-white transition-colors">contact@exemple.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ton-profil"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-xl font-bold hover-glow transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ton-github"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass px-6 py-3 rounded-xl hover-glow transition-all duration-300 border border-gray-700"
            >
              <span className="text-cyan-400 group-hover:text-white transition-colors">GitHub</span>
            </a>
          </div>
        </div>
      </Section>

      <footer className="mx-auto max-w-5xl px-4 py-8 text-center">
        <div className="glass rounded-xl p-6 border border-gray-700">
          <p className="text-gray-400">© {new Date().getFullYear()} Wilfried Ngankou. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
