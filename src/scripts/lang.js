// ── LANGUAGE ──
window._lang = 'fr';

const TEXTS = {
  'h-badge':{ fr:'Ingénieure Data · IA · Full Stack', en:'Data Engineer · AI · Full Stack' },
  'h-title':{ fr:"Construire l'avenir,<br/>avec la technologie<br/>de demain", en:"Building the future,<br/>with the future<br/>technology" },
  'h-sub':{ fr:"Je transforme des données brutes en pipelines fiables, modèles intelligents et produits full-stack — de l'ingestion à l'insight.", en:"I transform raw data into reliable pipelines, intelligent models, and full-stack products — from ingestion to insight." },
  'h-b1':{ fr:'Voir mes projets', en:'Explore projects' },
  'h-b2':{ fr:'Mon parcours', en:'My journey' },
  'b1l':{ fr:'EN CE MOMENT', en:'NOW' },
  'b1t':{ fr:'Systèmes data bout en bout', en:'End-to-end data systems' },
  'b1b':{ fr:'Spécialisée en pipelines Big Data, modèles ML et applications full-stack — des sources brutes aux dashboards production.', en:'Specializing in Big Data pipelines, ML models, and full-stack apps — from raw sources to production dashboards.' },
  'b2l':{ fr:'EN EXPLORATION', en:'ON THE RADAR' },
  'b2t':{ fr:'Agents IA & pipelines LLM', en:'AI agents & LLM pipelines' },
  'b2b':{ fr:"Exploration des workflows IA agentiques, architectures RAG et systèmes d'automatisation intelligente.", en:'Exploring agentic AI workflows, RAG architectures, and intelligent automation systems.' },
  's-tag':{ fr:'HISTOIRE', en:'STORY' },
  's-title':{ fr:"Comment j'en suis arrivée là", en:'How I got here' },
  's1':{ fr:"Passionnée par les mathématiques et l'informatique depuis mon parcours à l'<strong>Université Sultan Moulay Slimane</strong>, j'ai rapidement découvert que ma vraie force était de donner du sens aux données.", en:'With a strong background in mathematics and CS at <strong>Sultan Moulay Slimane University</strong>, I quickly discovered my real strength: making sense of data.' },
  's2':{ fr:"Mes expériences chez <strong>Daher</strong>, <strong>Marsa Maroc</strong> et <strong>UGSEL</strong> m'ont appris à construire des pipelines robustes, réduire les erreurs de données de 15% à moins de 1%.", en:'My experience at <strong>Daher</strong>, <strong>Marsa Maroc</strong> and <strong>UGSEL</strong> taught me to build robust pipelines and reduce data error rates from 15% to under 1%.' },
  's3':{ fr:"Je vois l'IA comme une opportunité : combiner ingénierie data rigoureuse et IA pour créer des solutions à impact réel.", en:'I see AI as an opportunity: combining rigorous data engineering with AI to create real-impact solutions.' },
  's4':{ fr:'Actuellement en <strong>M1 Expert Informatique & SI à l\'EPSI Nantes</strong>, je cherche à développer des solutions data & IA ambitieuses.', en:'Currently studying <strong>M1 Expert Informatique & SI at EPSI Nantes</strong>, I am looking to build ambitious data & AI solutions.' },
  'st1':{ fr:"Années d'expérience", en:'Years of experience' },
  'st2':{ fr:"Taux d'erreur réduit", en:'Error rate reduced' },
  'st3':{ fr:'Participants gérés', en:'Participants managed' },
  'st4':{ fr:'Langues parlées', en:'Languages spoken' },
  'sv1':{ fr:'Gouvernance RGPD & qualité des données', en:'RGPD governance & data quality' },
  'sv2':{ fr:'Documentation technique & dictionnaire de données', en:'Technical documentation & data dictionary' },
  'sv3':{ fr:'Analyse métier & synthèse', en:'Business analysis & synthesis' },
  'sv4':{ fr:'Curiosité, organisation, adaptabilité', en:'Curiosity, organisation, adaptability' },
  'sk-tag':{ fr:'COMPÉTENCES', en:'SKILLS' },
  'sk-title':{ fr:'Mon arsenal technique', en:'My skillset' },
  'skl1':{ fr:'Data Engineering & Bases de données', en:'Data Engineering & Databases' },
  'skl2':{ fr:'IA & Machine Learning', en:'AI & Machine Learning' },
  'skl3':{ fr:'Visualisation & BI', en:'Visualization & BI' },
  'skl4':{ fr:'Full Stack & DevOps', en:'Full Stack & DevOps' },
  'skl5':{ fr:'Gouvernance & Qualité', en:'Governance & Quality' },
  'skl6':{ fr:'Collaboration & Outils', en:'Collaboration & Tools' },
  'v-tag':{ fr:'VALEURS', en:'VALUES' },
  'v-title':{ fr:'Ce qui me motive', en:'What drives me' },
  'v1t':{ fr:"Qualité des données d'abord", en:'Data quality first' },
  'v1d':{ fr:'Un pipeline mal conçu contamine tout le reste. Je conçois chaque système avec rigueur — RGPD, documentation, tests.', en:'A poorly designed pipeline corrupts everything downstream. I build each system with rigor — RGPD, docs, tests.' },
  'v2t':{ fr:'Vision produit orientée data', en:'Product-driven development' },
  'v2d':{ fr:"La donnée n'a de valeur que si elle aide à prendre de meilleures décisions.", en:'Data only has value when it drives better decisions.' },
  'v3t':{ fr:'IA comme levier, pas raccourci', en:'AI as a lever, not a shortcut' },
  'v3d':{ fr:"L'IA amplifie ce qu'on lui donne. Des données propres et des pipelines solides restent la fondation indispensable.", en:'AI amplifies what you give it. Clean data and solid pipelines remain the essential foundation.' },
  'c-tag':{ fr:'EN CE MOMENT', en:'CURRENTLY' },
  'c-title':{ fr:'Ce sur quoi je travaille', en:'What I am up to' },
  'c1t':{ fr:'Développeuse Full Stack Data — UGSEL', en:'Data Full Stack Developer — UGSEL' },
  'c1d':{ fr:'TournoUGSEL — outil hors-ligne pour 25 établissements, ~500 participants/an. 100% RGPD-compliant.', en:'TournoUGSEL — offline tool for 25 schools, ~500 participants/year. 100% RGPD-compliant.' },
  'c2t':{ fr:'M1 Expert Informatique & SI — EPSI Nantes', en:'M1 Expert Informatique & SI — EPSI Nantes' },
  'c2d':{ fr:'Big Data, AWS Cloud, ETL, ML, IA, RGPD. Alternance : 2 semaines entreprise / 1 semaine école.', en:'Big Data, AWS Cloud, ETL, ML, AI, RGPD. Work-study: 2 weeks company / 1 week school.' },
  'c3t':{ fr:'Exploration agents IA & architectures RAG', en:'Exploring AI agents & RAG architectures' },
  'c3d':{ fr:"Construction de pipelines LLM et systèmes d'automatisation data intelligents.", en:'Building LLM pipelines and intelligent data automation systems.' },
  'traj-tag':{ fr:'PARCOURS', en:'JOURNEY' },
  'traj-title':{ fr:'Naviguer dans mon parcours', en:'Navigate through my trajectory' },
  'p-tag':{ fr:'PROJETS', en:'PROJECTS' },
  'p-title':{ fr:'Travaux à venir.', en:'Projects coming soon.' },
  'p-sub':{ fr:'Data Analyst · Data Engineer · Data Scientist · Full Stack · IA bout en bout.', en:'Data Analyst · Data Engineer · Data Scientist · Full Stack · AI end-to-end.' },
  'p1c':{ fr:'Data Engineering', en:'Data Engineering' },
  'p1t':{ fr:'Pipeline bout en bout', en:'End-to-End Pipeline' },
  'p1d':{ fr:'Pipeline data complet — ingestion, transformation, orchestration. À venir.', en:'Complete data pipeline — ingestion, transformation, orchestration. Coming soon.' },
  'p2c':{ fr:'Machine Learning', en:'Machine Learning' },
  'p2t':{ fr:'Modèle ML en production', en:'ML Model in Production' },
  'p2d':{ fr:'Feature engineering, entraînement, évaluation et déploiement. À venir.', en:'Feature engineering, training, evaluation and deployment. Coming soon.' },
  'p3c':{ fr:'IA · Full Stack', en:'AI · Full Stack' },
  'p3t':{ fr:"App data propulsée par l'IA", en:'AI-Powered Data App' },
  'p3d':{ fr:'Application full-stack intégrant LLMs et pipelines data. À venir.', en:'Full-stack app integrating LLMs and data pipelines. Coming soon.' },
  'p-add':{ fr:'Plus de projets à venir — Data Analyst · Data Scientist · Full Stack', en:'More projects arriving — Data Analyst · Data Scientist · Full Stack' },
  'e-tag':{ fr:'EXPÉRIENCE', en:'EXPERIENCE' },
  'e-title':{ fr:'Mon expérience.', en:'My experience.' },
  'e1r':{ fr:'Développeuse Full Stack Data (Stage)', en:'Data Full Stack Developer (Internship)' },
  'e1b1':{ fr:'Conception et déploiement de TournoUGSEL — outil pour 25 établissements, ~500 participants/an', en:'Design and deployment of TournoUGSEL — tool for 25 schools, ~500 participants/year' },
  'e1b2':{ fr:'Scripts de nettoyage et validation de fichiers XLS/XLSX hétérogènes', en:'Cleaning and validation scripts for heterogeneous XLS/XLSX files' },
  'e1b3':{ fr:'Algorithme de constitution automatique des poules par niveau et zone géographique', en:'Automatic pool creation algorithm by level and geographic zone' },
  'e1b4':{ fr:'Dictionnaire de données pour aligner les équipes métier et technique', en:'Data dictionary to align business and technical teams' },
  'e2r':{ fr:'Administratrice Systèmes & Data Analyst (Stage)', en:'Systems Admin & Data Analyst (Internship)' },
  'e2b1':{ fr:'Suivi des systèmes de traitement des données portuaires', en:'Monitoring of port data processing systems' },
  'e2b2':{ fr:"Taux d'erreur ramené de 15% à moins de 1% via scripts Python", en:'Error rate reduced from 15% to under 1% via Python scripts' },
  'e2b3':{ fr:'Tableaux de bord Power BI utilisés chaque semaine par les équipes opérationnelles', en:'Power BI dashboards used weekly by operational teams' },
  'e3r':{ fr:'Développeuse Data & ML (Stage)', en:'Data & ML Developer (Internship)' },
  'e3b1':{ fr:'Modèle de prédiction des stocks à J+7 (Random Forest) intégré au SI logistique', en:'J+7 stock prediction model (Random Forest) integrated into the logistics IS' },
  'e3b2':{ fr:'Nettoyage et restructuration MySQL ; réécriture SQL pour meilleures performances', en:'MySQL cleaning and restructuring; SQL rewriting for better performance' },
  'e3b3':{ fr:'Restitution des résultats en tableaux de bord pour les responsables achats', en:'Dashboard results presented to purchasing managers' },
  'e4co':{ fr:'EPSI Nantes — Formation', en:'EPSI Nantes — Education' },
  'e4b2':{ fr:'Alternance : 2 semaines entreprise / 1 semaine école', en:'Work-study: 2 weeks company / 1 week school' },
  'e5r':{ fr:'Licence Mathématiques & Informatique', en:'Bachelor in Mathematics & Computer Science' },
  'cta-h':{ fr:'Construisons quelque chose ensemble', en:"Let us build something together" },
  'cta-p':{ fr:"Si vous avez un projet data ou IA en tête, je serais ravie d'en discuter.", en:'If you have a data or AI project in mind, I would love to hear from you.' },
  'cta-b1':{ fr:'Me contacter', en:'Get in touch' },
  'cta-b2':{ fr:'Voir mes projets', en:'View my work' },
  'co-tag':{ fr:'CONTACT', en:'CONTACT' },
  'co-h':{ fr:'Travaillons<br/>ensemble.', en:"Let's build<br/>something." },
  'co-sub':{ fr:'Ouverte aux opportunités en data engineering, IA et full-stack. Je réponds sous 24h.', en:'Open to data engineering, AI and full-stack opportunities. I respond within 24 hours.' },
  'co-tel':{ fr:'Téléphone', en:'Phone' },
  'co-nt':{ fr:"Prête à discuter d'une opportunité", en:'Ready to discuss an opportunity' },
  'co-nb':{ fr:'Contactez-moi directement par email ou LinkedIn — je réponds dans les 24 heures.', en:'Contact me directly by email or LinkedIn — I respond within 24 hours.' },
  'co-em':{ fr:'Écrire un email directement', en:'Send an email directly' },
  'co-li':{ fr:'Envoyer un message sur LinkedIn', en:'Send a message on LinkedIn' },
  'na-story':{ fr:'Histoire', en:'Story' },
  'na-skills':{ fr:'Compétences', en:'Skills' },
  'na-traj':{ fr:'Parcours', en:'Journey' },
  'na-proj':{ fr:'Projets', en:'Projects' },
  'na-contact':{ fr:'Me contacter', en:'Contact' },
};

function applyLang(){
  const l = window._lang;
  document.documentElement.lang = l;
  document.querySelectorAll('[data-key]').forEach(el => {
    const k = el.getAttribute('data-key');
    if(TEXTS[k]) el.innerHTML = TEXTS[k][l];
  });
  document.querySelectorAll('.nav-r button').forEach(b => {
    if(b.getAttribute('onclick') && b.getAttribute('onclick').includes('toggleLang'))
      b.textContent = l === 'fr' ? 'EN' : 'FR';
  });
  const mobBtns = document.querySelectorAll('.mobile-menu button');
  mobBtns.forEach(b => {
    if(b.textContent.startsWith('Changer') || b.textContent.startsWith('Switch'))
      b.textContent = l === 'fr' ? 'Switch language → EN' : 'Changer de langue → FR';
  });
  if(typeof renderPanel === 'function') renderPanel();
}

window.toggleLang = function(){
  window._lang = window._lang === 'fr' ? 'en' : 'fr';
  applyLang();
};

// init
applyLang();
