export interface Projet {
        slug: string;
        title: string;
        shortDescription: string;
        description: string;
        detailedDescription?: string;
        image: string;
        screenshots?: string[];
        technologies: string[];
        features: string[];
        challenges: string[];
        learnings?: string;
        liveUrl?: string;
        githubUrl?: string;
        duration?: string;
        type?: string;
        client?: string;
        status?: string;
      }
      
      export const projets: Projet[] = [
        {
          slug: "xafino",
          title: "XAFINO",
          shortDescription: "Plateforme moderne de gestion financière et paiements numériques.",
          description: "XAFINO est une application web moderne permettant la gestion de transactions financières, le suivi des paiements et la visualisation des statistiques financières dans une interface moderne et intuitive.",
          detailedDescription: "XAFINO représente une solution complète de gestion financière développée avec les technologies les plus modernes. Le projet met l'accent sur la sécurité des transactions, la performance et l'expérience utilisateur. L'architecture backend scalable permet de gérer des milliers de transactions simultanées tout en maintenant une latence minimale.",
          image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
          screenshots: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
          ],
          technologies: ["Next.js 14", "TypeScript", "TailwindCSS", "MongoDB", "Node.js", "Express", "JWT"],
          features: [
            "Authentification sécurisée avec JWT et refresh tokens",
            "Dashboard analytique en temps réel avec graphiques interactifs",
            "Gestion complète des paiements et transactions",
            "Interface responsive optimisée mobile-first",
            "Upload et traitement de documents sécurisés",
            "Notifications push en temps réel",
            "Export de données en PDF et Excel",
            "Système de recherche et filtrage avancé"
          ],
          challenges: [
            "Optimisation des performances pour gérer 10 000+ transactions simultanées",
            "Mise en place d'une architecture de sécurité multicouche pour protéger les données sensibles",
            "Développement d'une architecture backend scalable supportant la croissance",
            "Intégration de multiples passerelles de paiement avec gestion des échecs",
            "Implémentation d'un système de cache Redis pour réduire la latence de 70%"
          ],
          learnings: "Ce projet m'a permis d'approfondir mes compétences en architecture backend scalable, optimisation frontend avec Next.js 14, et gestion avancée de la sécurité des données financières. J'ai également acquis une expertise en intégration de systèmes de paiement et en conception d'APIs RESTful robustes.",
          liveUrl: "https://xafino.com",
          githubUrl: "https://github.com/username/xafino",
          duration: "4 mois",
          type: "Application Web",
          client: "Entreprise privée",
          status: "En production"
        },
        {
          slug: "clonair",
          title: "Clonair",
          shortDescription: "Application mobile de scan et recréation de posters avec IA.",
          description: "Clonair permet de scanner un poster existant et de le recréer avec vos propres informations grâce à l'intelligence artificielle.",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
          technologies: ["React Native", "TypeScript", "Tesseract.js", "OpenAI API", "jsPDF"],
          features: [
            "Scan de posters avec détection automatique",
            "Extraction de texte par OCR avancé",
            "Analyse IA pour comprendre la structure",
            "Recréation du poster avec nouvelles données",
            "Export en PDF haute qualité"
          ],
          challenges: [
            "Optimisation de l'OCR pour différents types de posters",
            "Intégration de l'IA pour l'analyse contextuelle",
            "Gestion de la performance sur appareils mobiles"
          ],
          learnings: "J'ai développé une expertise en traitement d'image mobile, intégration d'APIs d'IA et optimisation des performances React Native.",
          githubUrl: "https://github.com/username/clonair",
          duration: "3 mois",
          type: "Application Mobile",
          status: "En développement"
        },
        {
          slug: "izina",
          title: "Izina",
          shortDescription: "Application de découverte de prénoms africains.",
          description: "Izina est une PWA permettant de découvrir des prénoms traditionnels d'Afrique de l'Ouest avec leurs significations et origines.",
          image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
          technologies: ["React", "Spring Boot", "MongoDB", "Docker", "PWA"],
          features: [
            "Base de données de prénoms africains",
            "Filtres par pays, ethnie et genre",
            "Système de favoris et interactions",
            "Fonctionnement offline (PWA)",
            "Interface multilingue (FR/EN)"
          ],
          challenges: [
            "Architecture microservices avec Docker",
            "Optimisation pour usage offline",
            "Gestion de données culturelles sensibles"
          ],
          liveUrl: "https://izina.app",
          githubUrl: "https://github.com/username/izina",
          duration: "2 mois",
          type: "Progressive Web App",
          status: "En production"
        }
      ];