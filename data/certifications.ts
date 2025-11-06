export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  image: string; // path under /public
  href?: string; // optional link to verify or PDF
}

export const certifications: Certification[] = [
  {
    title: "Cisco Certified Introduction to Cybersecurity",
    issuer: "Cisco network academy",
    date: "2025-11-06",
    image: "/certifications/Cisco cybersecurite badge.png",
    href: "",
  },
  {
    title: "Ethical Hacking cybersecurity",
    issuer: "cyber security academy",
    date: "En cours...",
    image: "/certifications/En cour1.png",
    href: "",
  },
  {
    title: "Comptia Security+",
    issuer: "cisco network academy",
    date: "En cours...",
    image: "/certifications/En cour2.png",
    href: "",
  },
];
