import { ProjectProps } from "../components/ProjectCard";
import { FaShippingFast, FaBus , FaCarSide, FaUsers } from "react-icons/fa";

export const projects: ProjectProps[] = [
  {
    title: "Suivi360",
    description: "Application de suivi de livraisons — reporting temps réel PDF/Excel, et géolocalisation des véhicules.",
    tags: ["Python", "Django", "Mysqllite"],
    href: "/indisponible",
    icon: FaShippingFast,
  },
  {
    title: "TravelSaaS",
    description: "Plateforme SaaS de réservation de billets avec back-office agence.",
    tags: ["Next.js", "ASP.NET", "SQL Server"],
    href: "/indisponible",
    icon: FaBus,
  },
  {
    title: "AutoMarket",
    description: "Marketplace de véhicules avec enchères, espace vendeur/acheteur.",
    tags: ["Python", "Django", "Mysqllite"],
    href: "/indisponible",
    icon: FaCarSide,
  },
  {
    title: "Gestion de Presences",
    description: "Application de pointage des présences des employés avec génération de rapports.",
    tags: ["Python", "Django", "Mysqllite"],
    href: "/indisponible",
    icon: FaUsers,
  },
];
