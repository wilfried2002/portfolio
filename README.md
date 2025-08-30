# Portfolio - Wilfried Ngankou

Portfolio professionnel développé avec Next.js 15, React 19 et Tailwind CSS 4.

## 🚀 Technologies utilisées

- **Framework** : Next.js 15.5.2
- **React** : 19.1.0
- **Styling** : Tailwind CSS 4
- **Language** : TypeScript
- **Build Tool** : Turbopack

## 📁 Structure du projet

```
portfolio/
├── components/          # Composants React réutilisables
│   ├── Header.tsx      # Navigation principale
│   ├── Hero.tsx        # Section d'accueil
│   ├── Section.tsx     # Composant de section générique
│   └── ProjectCard.tsx # Carte de projet
├── data/               # Données statiques
│   └── projects.ts     # Liste des projets
├── public/             # Assets statiques
│   └── projects/       # Images des projets
└── src/
    └── app/            # App Router Next.js
        ├── layout.tsx  # Layout principal
        ├── page.tsx    # Page d'accueil
        └── globals.css # Styles globaux
```

## 🎨 Fonctionnalités

- **Design moderne sombre** : Thème cyberpunk avec effets néon azure
- **Effets visuels avancés** : Animations, gradients, glassmorphism
- **Photo de profil dynamique** : Composant avec effets néon et particules
- **Boutons interactifs** : Effets hover et animations fluides
- **Cartes de projets dynamiques** : Transitions et effets de survol
- **Page CV complète** : Présentation professionnelle avec téléchargement
- **Design responsive** : Optimisé pour mobile, tablette et desktop
- **Navigation fluide** : Scroll smooth entre les sections
- **SEO optimisé** : Métadonnées complètes
- **Performance** : Optimisé avec Next.js et Turbopack

## 🛠️ Installation et développement

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📝 Scripts disponibles

- `npm run dev` : Lance le serveur de développement avec Turbopack
- `npm run build` : Build de production avec Turbopack
- `npm run start` : Lance le serveur de production
- `npm run lint` : Vérification du code avec ESLint

## 🎯 Sections du portfolio

1. **Hero** : Présentation avec photo de profil et call-to-action
2. **Projets** : Showcase des réalisations avec cartes dynamiques
3. **Compétences** : Technologies et domaines d'expertise
4. **Contact** : Informations de contact et réseaux sociaux
5. **CV** : Page dédiée avec téléchargement PDF

## 🌟 Nouvelles fonctionnalités

- **Thème sombre cyberpunk** : Design moderne avec effets néon azure
- **Photo de profil animée** : Composant avec effets de particules
- **Boutons dynamiques** : Effets hover et transitions fluides
- **Cartes de projets interactives** : Animations et effets de survol
- **Page CV professionnelle** : Présentation complète avec téléchargement
- **Effets visuels avancés** : Glassmorphism, gradients animés, néon

## 🔧 Personnalisation

### Modifier les projets
Éditez le fichier `data/projects.ts` pour ajouter, modifier ou supprimer des projets.

### Changer les informations personnelles
- Nom : Modifiez dans `components/Header.tsx` et `src/app/layout.tsx`
- Contact : Modifiez dans `src/app/page.tsx` (section contact)
- Compétences : Modifiez dans `src/app/page.tsx` (section compétences)

### Personnaliser le design
- Couleurs : Modifiez les classes Tailwind dans les composants
- Typographie : Ajustez dans `src/app/globals.css`
- Layout : Modifiez les composants dans `components/`

## 📱 Responsive Design

Le portfolio est entièrement responsive avec :
- **Mobile First** : Design optimisé pour les petits écrans
- **Breakpoints** : sm (640px), md (768px), lg (1024px)
- **Navigation mobile** : Menu hamburger pour les petits écrans

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Déploiement automatique à chaque push

### Autres plateformes
Le projet peut être déployé sur :
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation et de modification.

---

**Développé avec ❤️ par Wilfried Ngankou**
