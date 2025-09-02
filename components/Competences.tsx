export default function Competences() {
  const skills = [
    {
      title: "Administration Systèmes",
      details:
        "Windows & Linux, Active Directory, gestion des utilisateurs, sauvegardes et restauration, virtualisation (VMware, Hyper-V, Proxmox).",
    },
    {
      title: "Administration Réseau",
      details:
        "Configuration routeurs, switches et firewalls, VLAN, VPN, surveillance réseau (Nagios, Zabbix, Wireshark).",
    },
    {
      title: "Sécurité Informatique",
      details:
        "Politiques de sécurité, gestion des accès, durcissement systèmes, détection et prévention d’intrusion.",
    },
    {
      title: "Cloud & Services",
      details:
        "Déploiement sur les serveurs Cloud Windows Server et Linux , automatisation , intégration CI/CD.",
    },
    {
      title: "Développement & Scripting",
      details:
        "Automatisation avec Bash, PowerShell et Python, création d’outils internes.",
    },
    {
      title: "Support & Supervision",
      details:
        "Dépannage utilisateurs, support technique N2/N3, documentation, monitoring en temps réel.",
    },
  ];

  return (
    <section id="competences" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          💻 Mes Compétences
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-700 text-sm">{skill.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
