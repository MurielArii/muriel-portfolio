export type Locale = "fr" | "en";

export const translations = {
  fr: {

    nav: {
      home: "Accueil",
      about: "À propos",
      stack: "Stack",
      projects: "Projets",
      education: "Formation",
      experience: "Expériences",
      contact: "Contact",
      changeTheme: "Changer le thème",
    },

    hero: {
      greeting: "Bonjour",
      greetingSuffix: ", je suis",
      role: "Développeuse Full Stack",
      description:
        "Je transforme des idées en expériences web modernes, performantes et élégantes.",
      downloadCV: "Télécharger CV",
      viewProjects: "Voir mes projets",
      contactMe: "Me contacter",
      profileAlt: "Photo de profil",
    },

    about: {
      label: "À propos",
      titleLine1: "Qui",
      titleLine2: "suis-je ?",
      role: "Full Stack",
      roleLabel: "Développeuse",
      follow: "Suivre",
      bio: "À travers chaque projet, j'ai appris à allier",
      bioHighlight: "rigueur technique et sensibilité au design",
      bioEnd:
        "— convaincue qu'un bon produit se ressent autant qu'il fonctionne.",
      viewProjects: "Voir mes projets",
      languagesLabel: "Langues parlées",
      languages: [
        { name: "Malagasy", level: "Langue maternelle" },
        { name: "Français", level: "Courant" },
        { name: "English", level: "Intermédiaire" },
      ],
    },

    stack: {
      label: "Compétences",
      titleLine1: "Stack",
      titleLine2: "technique",
      toolsDeployment: "Outils & Déploiement",
      databases: "Bases de données",
      realtime: "Temps réel",
      methodologies: "Méthodologies",
      environment: "Environnement",
    },

    projects: {
      label: "Projets",
      titleLine1: "Mes",
      titleLine2: "réalisations",
      private: "Privé",
      viewProject: "Voir",
      previewAlt: "Aperçu",
      descriptions: {
        TiaZaza:
          "Site vitrine 3D pour jeux d'enfants.",
        Portfolio:
          "Portfolio personnel développé avec Next.js — design cinématographique sombre avec animations CSS avancées.",
        Lanceur:
          "En-tête commune utilisée par toutes les plateformes MANAO — maintenance, ajout de nouvelles fonctionnalités.",
        "Assignment Problem":
          "Outil web de résolution du problème d'affectation optimale par algorithme hongrois.",
        Texteur:
          "Éditeur de texte collaboratif en temps réel avec WebSockets.",
        Menabe:
          "Site vitrine pour une association régionale avec gestion de contenu et actualités.",
      },
    },

    education: {
      label: "Formation",
      titleLine1: "Mon",
      titleLine2: "parcours",
      description:
        "Formée à l'École Nationale d'Informatique de Fianarantsoa — du baccalauréat au master.",
      inProgress: "En cours",
      diplomas: [
        {
          period: "2023 – 2025",
          title: "Master 2 — Diplôme de Master Professionnel en Informatique, Ingénieur",
          school: "Ecole Nationale d'Informatique, Fianarantsoa",
        },
        {
          period: "2020 – 2023",
          title: "Licence — Diplôme de Licence Professionnelle en Informatique",
          school: "Ecole Nationale d'Informatique, Fianarantsoa",
        },
        {
          period: "2018 – 2019",
          title: "Baccalauréat Scientifique — Série C",
          school: "SJC, Fianarantsoa",
        },
      ],
    },

    experience: {
      label: "Expériences",
      titleLine1: "Mes",
      titleLine2: "expériences",
      awardsLabel: "Distinctions",
      awardsTitleLine1: "Prix &",
      awardsTitleLine2: "récompenses",
      experiences: [
        {
          period: "Janv. 2025 – Mai 2026",
          title: "Développeur Fullstack",
          company: "Manao Logiciels, Fianarantsoa",
          description:
            "Développement fullstack d'applications web et temps réel.",
        },
        {
          period: "Juil. 2023 – Déc. 2023",
          title: "Développeur Web",
          company:
            "Ministère de la Communication et de la Culture, Antananarivo",
          description:
            "Développement et maintenance d'applications web internes.",
        },
        {
          period: "Juil. 2022 – Déc. 2022",
          title: "Développeur PHP",
          company: "Manao Logiciels, Fianarantsoa",
          description:
            "Développement et maintenance d'applications web internes.",
        },
      ],
      awards: [
        {
          period: "Juillet 2023",
          title: "Weekly Coding Challenge",
          place: "1st Place — Frontend Category · By TechZara",
        },
      ],
    },

    contact: {
      label: "Contact",
      titleLine1: "Me",
      titleLine2: "contacter",
      description:
        "Une opportunité, une collaboration ou juste un message — n'hésitez pas, je réponds.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Email",
      emailPlaceholder: "votre@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Votre message...",
      send: "Envoyer le message",
      sending: "Envoi en cours...",
      sent: "Message envoyé !",
      sentDescription: "Merci pour votre message, je vous répondrai rapidement.",
      error: "Erreur d'envoi",
      errorDescription: "Une erreur est survenue. Vous pouvez m'envoyer un email directement à :",
      mailSubject: "Message de",
      mailBodyName: "Nom",
      mailBodyEmail: "Email",
    },

    footer: {
      builtWith: "Built with",
    },
  },
  en: {

    nav: {
      home: "Home",
      about: "About",
      stack: "Stack",
      projects: "Projects",
      education: "Education",
      experience: "Experience",
      contact: "Contact",
      changeTheme: "Toggle theme",
    },

    hero: {
      greeting: "Hello",
      greetingSuffix: ", I am",
      role: "Full Stack Developer",
      description:
        "I turn ideas into modern, high-performance, and elegant web experiences.",
      downloadCV: "Download CV",
      viewProjects: "View my projects",
      contactMe: "Contact me",
      profileAlt: "Profile photo",
    },

    about: {
      label: "About",
      titleLine1: "Who",
      titleLine2: "am I?",
      role: "Full Stack",
      roleLabel: "Developer",
      follow: "Follow",
      bio: "Through each project, I learned to combine",
      bioHighlight: "technical rigor and design sensibility",
      bioEnd:
        "— convinced that a great product is felt as much as it works.",
      viewProjects: "View my projects",
      languagesLabel: "Languages spoken",
      languages: [
        { name: "Malagasy", level: "Native" },
        { name: "French", level: "Fluent" },
        { name: "English", level: "Intermediate" },
      ],
    },

    stack: {
      label: "Skills",
      titleLine1: "Tech",
      titleLine2: "Stack",
      toolsDeployment: "Tools & Deployment",
      databases: "Databases",
      realtime: "Real-time",
      methodologies: "Methodologies",
      environment: "Environment",
    },

    projects: {
      label: "Projects",
      titleLine1: "My",
      titleLine2: "work",
      private: "Private",
      viewProject: "View",
      previewAlt: "Preview",
      descriptions: {
        TiaZaza:
          "3D showcase website for children's games.",
        Portfolio:
          "Personal portfolio built with Next.js — cinematic dark design with advanced CSS animations.",
        Lanceur:
          "Shared header used by all MANAO platforms — maintenance, new features.",
        "Assignment Problem":
          "Web tool for solving the optimal assignment problem using the Hungarian algorithm.",
        Texteur:
          "Real-time collaborative text editor with WebSockets.",
        Menabe:
          "Showcase website for a regional association with content management and news.",
      },
    },

    education: {
      label: "Education",
      titleLine1: "My",
      titleLine2: "background",
      description:
        "Trained at the National School of Computer Science in Fianarantsoa — from high school to master's degree.",
      inProgress: "In progress",
      diplomas: [
        {
          period: "2023 – 2025",
          title: "Master's — Professional Master's Degree in Computer Science, Engineer",
          school: "National School of Computer Science, Fianarantsoa",
        },
        {
          period: "2020 – 2023",
          title: "Bachelor's — Professional Bachelor's Degree in Computer Science",
          school: "National School of Computer Science, Fianarantsoa",
        },
        {
          period: "2018 – 2019",
          title: "Scientific Baccalaureate — Series C",
          school: "SJC, Fianarantsoa",
        },
      ],
    },

    experience: {
      label: "Experience",
      titleLine1: "My",
      titleLine2: "experience",
      awardsLabel: "Awards",
      awardsTitleLine1: "Awards &",
      awardsTitleLine2: "achievements",
      experiences: [
        {
          period: "Jan. 2025 – May 2026",
          title: "Fullstack Developer",
          company: "Manao Logiciels, Fianarantsoa",
          description:
            "Fullstack development of web and real-time applications.",
        },
        {
          period: "Jul. 2023 – Dec. 2023",
          title: "Web Developer",
          company:
            "Ministry of Communication and Culture, Antananarivo",
          description:
            "Development and maintenance of internal web applications.",
        },
        {
          period: "Jul. 2022 – Dec. 2022",
          title: "PHP Developer",
          company: "Manao Logiciels, Fianarantsoa",
          description:
            "Development and maintenance of internal web applications.",
        },
      ],
      awards: [
        {
          period: "July 2023",
          title: "Weekly Coding Challenge",
          place: "1st Place — Frontend Category · By TechZara",
        },
      ],
    },

    contact: {
      label: "Contact",
      titleLine1: "Get in",
      titleLine2: "touch",
      description:
        "An opportunity, a collaboration or just a message — don't hesitate, I'll respond.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Your message...",
      send: "Send message",
      sending: "Sending...",
      sent: "Message sent!",
      sentDescription: "Thank you for your message, I'll get back to you soon.",
      error: "Sending error",
      errorDescription: "An error occurred. You can email me directly at:",
      mailSubject: "Message from",
      mailBodyName: "Name",
      mailBodyEmail: "Email",
    },

    footer: {
      builtWith: "Built with",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
