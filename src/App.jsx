import React, { useState, useEffect } from 'react';
import Header from './pages/Header.jsx'
import Hero from './pages/Hero.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

const CONTENT = {
  en: {
    navItems: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    header: {
      menuAria: 'Toggle navigation menu',
      languageAria: 'Switch language',
    },
    hero: {
      badge: 'Full-stack & AI Engineer',
      title: 'A whole new world of possibilities',
      intro:
        "Hi, I'm Elizabeth, a Software Engineering and Digital Transformation master’s student from Esigelec College of Engineering in France. I build things that work, vibe, and spark curiosity.",
      stats: [
        { value: '2+ years', label: 'crafting interfaces' },
        { value: '9 launches', label: 'shipped with care' },
        { value: 'Paris, FR', label: 'Available remotely and in-person' },
      ],
      primaryCta: 'Explore my work',
      secondaryCta: "Let's collaborate",
    },
    about: {
      eyebrow: 'Behind the pixels',
      title: 'The "why" behind the interfaces I build',
      description:
        'I create interesting applications that are both useful and delightful. My mission is to make the internet feel just a bit friendlier and cooler for users.',
      cards: [
        {
          title: 'What I am interested in',
          items: ['Full-stack development', 'Agentic AI', 'Generative AI', 'Pixel-perfect implementation'],
        },
        {
          title: 'Playful sparks',
          items: ['Joyful, accessible interfaces', 'Micro-interactions that guide', 'Responsive layouts that just fit'],
        },
        {
          title: 'Beyond the screen',
          items: ['Digital art + sci-fi fan', 'Music enthusiast', 'Always learning something new (and laughing)'],
        },
      ],
    },
    skills: {
      eyebrow: 'Core strengths',
      title: 'Skills that power my projects',
      description:
        'My toolkit blends engineering fundamentals, modern frameworks, and strong collaboration skills to build products that are both useful and delightful.',
      groups: [
        {
          title: 'Languages',
          items: ['TypeScript', 'Python', 'JavaScript', 'C#', 'SQL', 'Java', 'HTML/CSS', 'PHP'],
        },
        {
          title: 'Frameworks & Tools',
          items: ['ASP.NET', 'FastAPI', 'Celery', 'Redis', 'Bootstrap', 'Git', 'Docker', 'MongoDB', 'Tailwind CSS'],
        },
        {
          title: 'Libraries',
          items: ['React', 'FAISS', 'Pandas', 'Streamlit', 'MySQL', 'MariaDB', 'SQLAlchemy'],
        },
        {
          title: 'Soft Skills',
          items: ['Team collaboration', 'Adaptability', 'Problem-solving', 'Communication', 'Attention to detail', 'Fast learning'],
        },
        {
          title: 'Spoken Languages',
          items: ['English (fluent)', 'French'],
        },
        {
          title: 'Certifications',
          items: [
            'Python - Kaggle',
            'GenAI Intensive - Google (Kaggle)',
            "Stanford University Code in Place",
            'AI-Assisted Coding with GitHub Copilot',
          ],
        },
      ],
    },
    experience: {
      eyebrow: 'Professional experience',
      title: 'Experience shaping real-world products',
      description:
        'I have been building and shipping production-ready products across personal initiatives and collaborative projects, with a focus on backend reliability and intuitive interfaces.',
      roles: [
        {
          title: 'Full-Stack Intern',
          org: 'International Association of Universities (IAU)',
          period: '2026 - Present',
          location: 'Paris, FR ',
            highlights: [
              'Developed a data inbound application for the IAU to manage data inflow from various sources', 
              'Designed and developed full-stack features using React/TypeScript (frontend) and FastAPI (backend), delivering internal web modules that reduced manual data-processing workflows by an estimated 40%, freeing staff time for higher-value tasks.',
              'Engineered end-to-end features for the data ingestion platform, and integrated Redis with Celery for broker + result storage in a containerized dev/prod topology.',
          ],
        },
      ],
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Projects that mix creativity with solid engineering',
      description:
        "A little collection of projects I’ve had fun building, mixing creative interfaces with solid, scalable tech behind the scenes.",
      featuredPill: 'Featured build',
      viewProject: 'View project',
      list: [
        {
          title: 'Promptify',
          description:
            'Music assistant where users input prompts by vibe/mood to generate playlists, with save-to-Spotify integration.',
          tech: ['Streamlit', 'Gemini API', 'Spotify API', 'Python', 'RAG'],
          link: '#',
        },
        {
          title: 'Aurea',
          description:
            'A mental wellness app that enables users to securely log, organize, and revisit mood entries with notes, tags, images, and Spotify context.',
          tech: ['React', 'Firebase', 'Cloud Firestore', 'Tailwind CSS', 'JavaScript'],
          link: 'https://github.com/Shadowina/Aurea',
        },
        {
          title: 'Bookhaven',
          description: 'Online library management system using HTML, CSS, PHP, Bootstrap, and MariaDB.',
          tech: ['PHP', 'HTML/CSS', 'Bootstrap', 'MariaDB'],
          link: 'https://github.com/Shadowina/Book-Haven',
        },
        {
          title: 'EzzyTickets',
          description: 'Event ticketing platform built with ASP.NET and MariaDB for seamless event management.',
          tech: ['ASP.NET', 'MariaDB', 'C#'],
          link: 'https://github.com/Shadowina/ezzyTickets-aspnet-mvc-application-ecommerce-',
        },
      ],
    },
    contact: {
      badge: 'Open for new collaborations',
      title: "Let's turn ideas into joyful launches",
      description:
        "Tell me about your world, products, platforms, experiments. I'll bring the strategy, engineering craft, and a dose of playfulness to match.",
      startConversation: 'Start a conversation',
      resumeDownload: 'Download resume',
      quickLinksTitle: 'Quick links',
      detailsTitle: 'Details',
      quickLinks: {
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
      meta: ['Replies within 24 hours', 'Based in Paris, FR (CET)'],
      note: "Let's grab a virtual coffee, or meet in Paris if you're nearby.",
      footer: 'Crafted with joy & curiosity.',
    },
  },
  fr: {
    navItems: [
      { id: 'home', label: 'Accueil' },
      { id: 'about', label: 'A propos' },
      { id: 'skills', label: 'Competences' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projets' },
      { id: 'contact', label: 'Contact' },
    ],
    header: {
      menuAria: 'Afficher le menu de navigation',
      languageAria: 'Changer la langue',
    },
    hero: {
      badge: 'Developpeuse full-stack et backend',
      title: 'Construire des experiences numeriques vivantes',
      intro:
        "Bonjour, moi c'est Elizabeth. Je cree des produits utiles, harmonieux et stimulants. Je soigne chaque detail pour que l'utilisateur profite simplement de l'experience.",
      stats: [
        { value: '2+ ans', label: "de creation d'interfaces" },
        { value: '9 lancements', label: 'livres avec soin' },
        { value: 'Paris, FR', label: 'Disponible a distance' },
      ],
      primaryCta: 'Voir mes projets',
      secondaryCta: 'Collaborons ensemble',
    },
    about: {
      eyebrow: 'Derriere les pixels',
      title: 'Le "pourquoi" des interfaces que je conçois',
      description:
        "Je construis avec empathie, car chaque clic ou geste vient d'une personne qui veut accomplir quelque chose. Ma mission: rendre le web plus fluide, plus humain et plus agreable.",
      cards: [
        {
          title: 'Ce que je suis interessée par',
          items: ['Developpement full-stack', 'Agentic AI', 'Generative AI', 'Implementation pixel-parfaite'],
        },
        {
          title: 'Etincelles creatives',
          items: ['Interfaces accessibles et engageantes', 'Micro-interactions qui guident', 'Mises en page responsive naturelles'],
        },
        {
          title: "Au-dela de l'ecran",
          items: ['Passionnee de digital art et sci-fi', 'Grande amatrice de musique', "Toujours en train d'apprendre et de sourire"],
        },
      ],
    },
    skills: {
      eyebrow: 'Forces principales',
      title: 'Competences qui alimentent mes projets',
      description:
        "Mon arsenal combine fondamentaux d'ingenierie, frameworks modernes et solides qualites humaines pour creer des produits utiles et plaisants.",
      groups: [
        {
          title: 'Langages',
          items: ['TypeScript', 'Python', 'JavaScript', 'C#', 'SQL', 'Java', 'HTML/CSS', 'PHP'],
        },
        {
          title: 'Frameworks et Outils',
          items: ['ASP.NET', 'FastAPI', 'Celery', 'Redis', 'Bootstrap', 'Git', 'Docker', 'MongoDB', 'Tailwind CSS'],
        },
        {
          title: 'Bibliotheques',
          items: ['React', 'FAISS', 'Pandas', 'Streamlit', 'MySQL', 'MariaDB', 'SQLAlchemy'],
        },
        {
          title: 'Soft Skills',
          items: ['Collaboration en equipe', 'Adaptabilite', 'Resolution de problemes', 'Communication', "Sens du detail", 'Apprentissage rapide'],
        },
        {
          title: 'Langues parlees',
          items: ['Anglais (courant)', 'Francais'],
        },
        {
          title: 'Certifications',
          items: [
            'Python - Kaggle',
            'GenAI Intensive - Google (Kaggle)',
            "Stanford University Code in Place",
            'AI-Assisted Coding with GitHub Copilot',
          ],
        },
      ],
    },
    experience: {
      eyebrow: 'Experience professionnelle',
      title: 'Experience dans la creation de produits concrets',
      description:
        "Je conçois et livre des produits prets pour la production a travers des initiatives personnelles et des collaborations, avec une attention forte a la fiabilite backend et a l'experience utilisateur.",
      roles: [
        {
          title: 'Developpeuse Full-Stack',
          org: 'IAU - International Association of Universities',
          period: 'Aujourd hui',
          location: 'Paris, FR ',
          highlights: [
            'Développé une application d’ingestion de données pour l’IAU afin de gérer les flux de données provenant de diverses sources',
            'Conçu et développé des fonctionnalités full-stack utilisant React/TypeScript (frontend) et FastAPI (backend), livrant des modules web internes qui réduisent les workflows de traitement de données manuel par 40%, libérant le temps des collaborateurs pour des tâches plus valorisantes.',
            'Conçu des fonctionnalités de bout en bout pour la plateforme d’ingestion de données et intégré Redis avec Celery pour la gestion du broker et du stockage des résultats dans une architecture conteneurisée de développement et de production.',
          ],
        }
      ],
    },
    projects: {
      eyebrow: 'Projets selectionnes',
      title: "Des projets qui melangent creativite et ingenierie solide",
      description:
        "Un apercu des produits que j'ai eu plaisir a concevoir: chacun associe une interface expressive a une architecture fiable et evolutive.",
      featuredPill: 'Projet phare',
      viewProject: 'Voir le projet',
      list: [
        {
          title: 'Promptify',
          description:
            "Assistant musical ou les utilisateurs decrivent une ambiance pour generer des playlists, avec integration d'enregistrement sur Spotify.",
          tech: ['Streamlit', 'Gemini API', 'Spotify API', 'Python', 'RAG'],
          link: '#',
        },
        {
          title: 'Aurea',
          description:
            "Application de bien-etre mental permettant de consigner, organiser et revisiter des entrees d'humeur avec notes, tags, images et contexte Spotify.",
          tech: ['React', 'Firebase', 'Cloud Firestore', 'Tailwind CSS', 'JavaScript'],
          link: 'https://github.com/Shadowina/Aurea',
        },
        {
          title: 'Bookhaven',
          description: 'Systeme de gestion de bibliotheque en ligne avec HTML, CSS, PHP, Bootstrap et MariaDB.',
          tech: ['PHP', 'HTML/CSS', 'Bootstrap', 'MariaDB'],
          link: 'https://github.com/Shadowina/Book-Haven',
        },
        {
          title: 'EzzyTickets',
          description: "Plateforme de billetterie evenementielle construite avec ASP.NET et MariaDB pour une gestion fluide des evenements.",
          tech: ['ASP.NET', 'MariaDB', 'C#'],
          link: 'https://github.com/Shadowina/ezzyTickets-aspnet-mvc-application-ecommerce-',
        },
      ],
    },
    contact: {
      badge: 'Ouverte a de nouvelles collaborations',
      title: 'Transformons des idees en lancements memorables',
      description:
        "Parlez-moi de votre univers, de vos produits ou de vos experiments. J'apporte la strategie, la rigueur technique et une touche de creativite.",
      startConversation: 'Demarrer une conversation',
      resumeDownload: 'Telecharger le CV',
      quickLinksTitle: 'Liens rapides',
      detailsTitle: 'Details',
      quickLinks: {
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
      meta: ['Reponse sous 24 heures', 'Basee a Paris, FR (CET)'],
      note: 'Partageons un cafe virtuel, ou rencontrons-nous a Paris si vous etes proche.',
      footer: 'Concu avec joie et curiosite.',
    },
  },
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('portfolio-language')
    if (savedLanguage === 'en' || savedLanguage === 'fr') return savedLanguage

    const browserLanguage = navigator.language?.toLowerCase() || ''
    return browserLanguage.startsWith('fr') ? 'fr' : 'en'
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
  }, [language])

  const content = CONTENT[language]
  
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header 
        isScrolled={isScrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        language={language}
        setLanguage={setLanguage}
        navItems={content.navItems}
        labels={content.header}
      />
      <Hero content={content.hero} />
      <About content={content.about} />
      <Skills skills={content.skills.groups} content={content.skills} />
      <Experience content={content.experience} />
      <Projects projects={content.projects.list} content={content.projects} />
      <Contact content={content.contact} />
    </div>
  )
}

export default App
