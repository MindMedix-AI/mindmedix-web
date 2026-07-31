export type Locale = 'it' | 'en'

export const translations = {
  it: {
    nav: {
      challenge: 'Sfida',
      solution: 'Soluzione',
      platform: 'Piattaforma',
      impact: 'Impatto',
      about: 'Chi siamo',
      founder: 'Team',
      blog: 'Blog',
      contact: 'Contatti',
      requestPilot: 'Richiedi Pilot',
      liveDemo: 'Demo Live',
    },
    demo: {
      title: 'MindMedix AI — Demo Live',
      description: 'Esplora il motore predittivo di MindMedix AI. Visualizza i livelli di rischio per reparto, prova il modello in tempo reale e scopri come prevediamo le crisi 3 settimane prima.',
    },
    hero: {
      label: 'Institutional Workforce Intelligence',
      headline: 'Rilevamento Preventivo delle Crisi Operative con 3 settimane di anticipo.',
      headlineHighlight: '',
      subheadline: 'Intelligence predittiva per sistemi ospedalieri europei. Validata su 34 reparti reali con un Recall del 97% sulle carenze di personale. Conforme GDPR Art. 89 e pronta per l\'EU AI Act.',
      authority: 'Dataset validato · Ospedali Italiani · No Clinical AI · Privacy Standard Enterprise',
      ctaPilot: 'Pianifica Consultazione Strategica',
      ctaPartners: 'Infrastruttura e Metodologia →',
      ctaDemo: 'Prova la Demo Live →',
      location: 'Sede Legale: Ancona, Italia · Healthcare Operations AI',
    },
    proofBar: {
      stats: [
        { value: '97%', label: 'Crisis recall', sublabel: 'Crisi rilevate in anticipo' },
        { value: '97.1%', label: 'Accuratezza complessiva', sublabel: 'LOWO cross-validation · 10 fold' },
        { value: '34', label: 'Reparti reali', sublabel: 'Dataset Ceschia et al. 2023' },
        { value: '€2.400', label: 'Risparmio per crisi', sublabel: 'Agendo 3 settimane prima' },
      ],
    },
    whoWeServe: {
      label: 'A chi ci rivolgiamo',
      title: 'MindMedix AI è progettato per',
      items: [
        'Direttori Sanitari e Amministratori Ospedalieri',
        'Responsabili delle Risorse Umane e Operativi',
        'Sistemi Sanitari e Autorità Regionali',
        'Partner Strategici per l\'Innovazione Sanitaria',
      ],
    },
    problem: {
      label: 'La Sfida Istituzionale',
      title: 'I sistemi sanitari affrontano un deficit di risorse strutturale senza precedenti',
      intro: 'Gli ospedali e le istituzioni sanitarie in tutta Europa affrontano sfide sistemiche che minacciano la stabilità operativa. Non si tratta di fluttuazioni temporanee, ma di una crisi di personale strutturale.',
      challenges: [
        { title: 'Deficit infermieristico: 175.000 unità', description: 'La carenza strutturale in Italia ha raggiunto livelli critici, mettendo a rischio la continuità assistenziale (Legge di Bilancio 2026).' },
        { title: '€2,4 miliardi di impatto finanziario', description: 'Il costo dello straordinario di emergenza non programmato grava pesantemente sui bilanci ospedalieri, costando 4 volte più della gestione programmata.' },
        { title: 'Tensioni contrattuali e burnout', description: 'Oltre il 59% del personale riporta stress cronico. Il secondo sciopero nazionale del 17 aprile 2026 sottolinea l\'urgenza di intervenire con strumenti di protezione della forza lavoro.' },
        { title: 'Assenza di Intelligence Predittiva', description: 'La maggior parte degli ospedali opera in modalità reattiva, scoprendo le crisi quando sono già in corso — con costi umani ed economici altissimi.' },
      ],
      sources: 'Fonti: Legge di Bilancio 2026, ANAAO-ASSOMED 2024, ISTAT 2025, Fp Cgil/Cisl/Uil Fpl marzo 2026',
    },
    solution: {
      label: 'La Soluzione Istituzionale',
      title: 'Un livello di intelligenza strategica per la continuità operativa',
      intro: 'MindMedix AI integra un layer di intelligenza predittiva sopra i vostri sistemi HR esistenti, fornendo ai direttori sanitari gli strumenti per proteggere la forza lavoro e ottimizzare i costi.',
      features: [
        { title: 'Modelli Predittivi (97% Recall)', description: 'Analizziamo i pattern storici di 34 ospedali italiani per rilevare carenze 3 settimane prima che accadano con precisione matematica.' },
        { title: 'Intelligence Decisionale (Semafori)', description: 'Nessun dato complesso. Un sistema intuitivo a semaforo indica dove intervenire, permettendo decisioni board-level rapide e basate sui fatti.' },
        { title: 'Ottimizzazione Costi Operativi', description: 'Riduciamo la dipendenza da agenzie e straordinari di emergenza, portando un risparmio medio di €2.400 per ogni crisi prevenuta.' },
        { title: 'Architettura Privacy-First', description: 'Zero dati sensibili. Solo metadati operativi anonimizzati. Conforme GDPR Art. 89 e pronta per le nuove normative europee sull\'IA.' },
      ],
      dashboardTitle: 'Intelligence Operativa - Preview',
      dashboardMetrics: ['Continuità Assistenziale', 'Resilienza Forza Lavoro', 'Protezione Budget'],
      realStatCards: [
        { value: '97%', label: 'Recall Crisi', sublabel: 'Rilevamento affidabile e validato' },
        { value: '97.1%', label: 'Accuratezza LOWO', sublabel: 'Validazione Leave-One-Ward-Out' },
        { value: '3 Settimane', label: 'Anticipo Operativo', sublabel: 'Tempo per agire preventivamente' },
        { value: '€2.400', label: 'Valore per Crisi', sublabel: 'Risparmio diretto su costi emergenza' },
      ],
    },
    howItWorks: {
      label: 'Piattaforma',
      title: 'Come funziona',
      intro: 'Una pipeline trasparente dai tuoi dati a decisioni operative migliori—sicura, conforme e centrata sull\'uomo.',
      steps: [
        { title: 'Export CSV dal vostro Zucchetti o TeamSystem', description: 'Nessuna integrazione IT complessa. Nella fase pilot: un semplice export CSV settimanale dal vostro sistema HR esistente. Zero API, zero installazioni.' },
        { title: 'Il modello gira in 48 ore', description: 'XGBoost addestrato su 34 reparti reali di ospedali italiani analizza i pattern storici. Validato con Leave-One-Ward-Out: simula il deployment su un ospedale mai visto prima.' },
        { title: 'Report PDF automatico per reparto', description: 'Ogni settimana: livello di rischio per ogni reparto, segnali che hanno attivato l\'alert, personale interno disponibile, impatto finanziario. Pronto per essere portato in riunione.' },
        { title: 'Human-in-the-loop — sempre', description: 'L\'AI segnala. Il direttore decide. Nessuna modifica autonoma ai turni. Nessun accesso a cartelle cliniche. Solo supporto decisionale operativo.' },
      ],
      securityTitle: 'Sicurezza enterprise',
      securityDesc: 'Costruito in Europa. Privacy first. Conforme GDPR. Non dispositivo medico. AI etica.',
      badges: ['Conforme GDPR', 'Residenza Dati', 'Human-in-the-loop', 'SOC 2 Ready'],
    },
    value: {
      label: 'Impatto',
      title: 'Perché gli ospedali scelgono MindMedix AI',
      intro: 'Risultati misurabili — validati su dati reali.',
      values: [
        { title: 'Ridurre i Costi degli Straordinari', description: 'Il personale proattivo riduce gli straordinari di emergenza e le spese per agenzie.' },
        { title: 'Prevenire le Crisi di Personale', description: 'Rilevamento anticipato di carenze e burnout prima che impattino le cure.' },
        { title: 'Migliorare la Pianificazione', description: 'Pianificazione turni basata sui dati che rispetta capacità e preferenze.' },
        { title: 'Aumentare la Stabilità', description: 'Operazioni prevedibili migliorano i risultati per personale e pazienti.' },
        { title: 'Decisioni Basate sui Dati', description: 'Passa dalla gestione reattiva degli incendi alla gestione strategica della forza lavoro.' },
      ],
    },
    trust: {
      label: 'Fiducia e Posizionamento',
      title: 'Pronto per l\'enterprise. Fidato dalle istituzioni.',
      intro: 'MindMedix AI è costruito per istituzioni sanitarie che richiedono rigore, conformità e responsabilità.',
      pillars: [
        { title: 'Costruito in Europa', description: 'Progettato e sviluppato in Italia per standard e normative sanitarie europee.' },
        { title: 'Privacy-first', description: 'I tuoi dati restano tuoi. Nessuna condivisione con terzi. Architettura costruita per la fiducia istituzionale.' },
        { title: 'Conforme GDPR', description: 'Conformità by design. Residenza dati, consenso e trasparenza al centro.' },
        { title: 'AI Human-in-the-Loop', description: 'L\'AI supporta le decisioni; gli umani restano al comando. Nessuna modifica autonoma della forza lavoro.' },
        { title: 'Non un dispositivo medico', description: 'Solo intelligenza operativa. Non diagnosticiamo, trattiamo o sostituiamo il giudizio clinico.' },
        { title: 'AI Etica', description: 'Trasparente, verificabile e allineata con l\'etica sanitaria e i valori istituzionali.' },
      ],
    },
    about: {
      label: 'Chi siamo',
      title: 'AI sanitaria europea per l\'intelligenza operativa',
      founderBlock: {
        label: 'Una parola dal fondatore',
        text: 'MindMedix AI nasce dalla necessità di stabilizzare le operazioni ospedaliere europee attraverso dati certi, non congetture. Come Founder & CEO, la mia missione è fornire ai leader sanitari gli strumenti predittivi necessari per proteggere la loro risorsa più preziosa: il personale. Non stiamo costruendo solo tecnologia, ma un\'infrastruttura di fiducia per il futuro della sanità.',
        founderName: 'Sassi Hamdi',
        founderRole: 'Founder & CEO',
      },
      teamBlock: {
        title: 'Team & Advisory Board',
        subtitle: 'Competenze cliniche ed ingegneristiche per la stabilità operativa degli ospedali.',
        members: [
          {
            name: 'Dr. Pietro Coletta',
            role: 'Clinical Advisor',
            image: '/images/doctor.jpeg',
            linkedin: 'https://www.linkedin.com/in/pietro-coletta-a9279960/',
            bio: 'Chirurgo attivo presso Villa Igea (Ancona) con una profonda conoscenza delle dinamiche degli ospedali privati. Pietro vanta un\'esperienza clinica diretta nella gestione del burnout e delle carenze di personale, guidando la validazione medica dei modelli predittivi e supportando l\'accesso ai network ospedalieri nella regione Marche.'
          },
          {
            name: 'Asma Taba',
            role: 'Data Analyst Engineer',
            image: '/images/asma.jpeg',
            linkedin: 'https://www.linkedin.com/in/asma-taba/',
            bio: 'Specialista in modellazione dei dati della forza lavoro sanitaria e ottimizzazione di pipeline ML. Asma si occupa di advanced feature engineering su serie temporali complesse ad alta frequenza per potenziare e ottimizzare il motore predittivo.'
          }
        ]
      },
      p1: 'MindMedix AI è una piattaforma di workforce intelligence per ospedali europei. Aiutiamo i sistemi sanitari a prevedere carenze di personale e rischi di burnout con 3 settimane di anticipo, utilizzando dati operativi anonimizzati.',
      p2: 'Sotto la guida di Sassi Hamdi, il nostro team unisce eccellenza tecnica in sistemi AI enterprise con il rigoroso rispetto delle normative europee sulla privacy.',
      p3: 'La nostra visione è un sistema sanitario dove la tecnologia anticipa le crisi operative, permettendo ai direttori sanitari di agire prima che il burnout impatti la qualità delle cure.',
      location: 'Sede Legale',
      locationValue: 'Ancona, Italia',
      stage: 'Stato',
      stageValue: 'Validato su 34 ospedali italiani · Pilot Disponibili',
      founded: 'Fondato',
      foundedValue: 'Gennaio 2026',
      focus: 'Settore',
      focusValue: 'Hospital Operations (No Clinical AI)',
    },
    faq: {
      label: 'Domande Frequenti',
      title: 'Tutto quello che c\'è da sapere su MindMedix AI',
      items: [
        {
          question: 'Cos\'è MindMedix AI?',
          answer: 'MindMedix AI è una piattaforma di workforce intelligence progettata specificamente per gli ospedali europei. Utilizza algoritmi predittivi per anticipare carenze di personale e rischi di burnout, permettendo una gestione proattiva delle risorse umane.'
        },
        {
          question: 'Chi ha fondato MindMedix AI?',
          answer: 'MindMedix AI è stata fondata da Sassi Hamdi, attuale Founder & CEO, esperto in sistemi di intelligenza operativa per la sanità. Sassi Hamdi guida la missione di rendere gli ospedali europei più resilienti.'
        },
        {
          question: 'Qual è il problema principale che risolve?',
          answer: 'Risolviamo la crisi strutturale della forza lavoro sanitaria. Prevediamo carenze di personale e burnout con 3 settimane di anticipo con un Recall del 97%, riducendo i costi di emergenza e lo stress del personale.'
        },
        {
          question: 'MindMedix AI è un\'IA clinica?',
          answer: 'No. MindMedix AI è categoricamente un\'IA OPERATIVA. Non analizziamo cartelle cliniche e non forniamo diagnosi. Ci occupiamo esclusivamente dell\'eccellenza dei processi e della forza lavoro.'
        },
        {
          question: 'Chi è Sassi Hamdi?',
          answer: 'Sassi Hamdi è il Founder & CEO di MindMedix AI. Ingegnere e builder di sistemi enterprise, ha creato MindMedix AI per trasformare i dati operativi ospedalieri in guardrail predittivi per i direttori sanitari.'
        },
        {
          question: 'Utilizzate dati dei pazienti?',
          answer: 'No. Il sistema utilizza solo metadati operativi anonimizzati. Non abbiamo accesso ai dati clinici. Operiamo in piena conformità con il GDPR Articolo 89.'
        },
        {
          question: 'Dove ha sede MindMedix AI?',
          answer: 'MindMedix AI ha sede legale e operativa ad Ancona, Italia, e opera nel contesto del sistema sanitario europeo.'
        },
        {
          question: 'Come posso contattare Sassi Hamdi o il team?',
          answer: 'È possibile fissare una chiamata direttamente tramite la pagina del Fondatore o contattare il team istituzionale all\'indirizzo contact@mindmedixai.health.'
        }
      ]
    },
    contact: {
      label: 'Contatti',
      title: 'Collabora con MindMedix AI',
      intro: 'Collaboriamo con ospedali, sistemi sanitari, partner strategici e stakeholder istituzionali che esplorano l\'intelligenza operativa predittiva.',
      whoTitle: 'Con chi lavoriamo',
      who: [
        'Ospedali interessati a programmi pilota',
        'Istituzioni e sistemi sanitari',
        'Partner strategici e tecnologici',
        'Investitori e istituzioni pubbliche',
      ],
      form: {
        name: 'Nome',
        namePlaceholder: 'Il tuo nome',
        email: 'Email',
        emailPlaceholder: 'nome@organizzazione.com',
        organization: 'Organizzazione',
        organizationPlaceholder: 'Ospedale, istituzione o azienda',
        interest: 'Area di interesse',
        interestOptions: {
          pilot: 'Programma pilota ospedaliero',
          partnership: 'Partnership strategica',
          investment: 'Investimento / Finanziamento',
          paper: 'Richiesta Paper di Validazione',
          other: 'Richiesta generale',
        },
        message: 'Messaggio',
        messagePlaceholder: 'Descrivi il tuo interesse o proposta...',
        submit: 'Invia richiesta',
        submitting: 'Invio in corso...',
        error: 'Si è verificato un errore. Riprova o scrivici direttamente a contact@mindmedixai.health.',
      },
      thankYou: 'Messaggio inviato',
      thankYouDesc: 'Grazie per aver contattato MindMedix AI. Il nostro team esaminerà la tua richiesta e ti contatterà a breve.',
      emailLabel: 'Email istituzionale',
    },
    footer: {
      links: { challenge: 'Sfida', solution: 'Soluzione', platform: 'Piattaforma', impact: 'Impatto', blog: 'Blog', contact: 'Contatti', privacy: 'Privacy', terms: 'Termini', founder: 'Team' },
      copyright: '© {year} MindMedix AI. Tutti i diritti riservati.',
      authorityLine: 'MindMedix AI è una piattaforma di workforce intelligence per ospedali europei, fondata da Sassi Hamdi. Sede Legale: Ancona, Italia.',
      founderLink: 'Guidato da Sassi Hamdi, Founder & CEO'
    },
    legal: {
      backToHome: 'Torna alla home',
      privacyNote: 'Inviando accetti la nostra',
      privacyPolicy: 'Informativa sulla Privacy',
      andThe: 'e i nostri',
      terms: 'Termini e Condizioni',
    },
  },
  en: {
    nav: {
      challenge: 'Challenge',
      solution: 'Solution',
      platform: 'Platform',
      impact: 'Impact',
      about: 'About',
      founder: 'Team',
      blog: 'Blog',
      contact: 'Contact',
      requestPilot: 'Request Pilot',
      liveDemo: 'Live Demo',
    },
    demo: {
      title: 'MindMedix AI — Live Demo',
      description: 'Explore the MindMedix AI prediction engine. View per-ward risk levels, try the model in real time, and see how we predict staffing crises 3 weeks in advance.',
    },
    hero: {
      label: 'Institutional Workforce Intelligence',
      headline: 'Predictive Operational Crisis Management for European Hospitals.',
      headlineHighlight: '',
      subheadline: 'Advanced workforce intelligence for healthcare leaders. Validated on 34 real Italian wards with 97% Recall on staffing shortages. GDPR Art. 89 compliant and EU AI Act ready.',
      authority: 'Validated Dataset · Italian Hospitals · No Clinical AI · Enterprise Privacy Standard',
      ctaPilot: 'Schedule Strategic Consultation',
      ctaPartners: 'Infrastructure & Methodology →',
      ctaDemo: 'Try Live Demo →',
      location: 'HQ: Ancona, Italy · Healthcare Operations AI',
    },
    proofBar: {
      stats: [
        { value: '97%', label: 'Crisis recall', sublabel: 'Staffing crises detected early' },
        { value: '97.1%', label: 'Overall Accuracy', sublabel: 'LOWO cross-validation · 10 folds' },
        { value: '34', label: 'Real Hospital Wards', sublabel: 'Dataset Ceschia et al. 2023' },
        { value: '€2,400', label: 'Savings per crisis', sublabel: 'By acting 3 weeks in advance' },
      ],
    },
    whoWeServe: {
      label: 'Who MindMedix AI is for',
      title: 'Designed for',
      items: [
        'Hospital Directors & Administrators',
        'Workforce and Operations Managers',
        'Healthcare Systems & Regional Authorities',
        'Strategic Healthcare Innovation Partners',
      ],
    },
    problem: {
      label: 'Institutional Challenge',
      title: 'Healthcare systems face a structural resource deficit without precedent',
      intro: 'Hospitals and healthcare institutions across Europe face systemic challenges threatening operational stability. These are not temporary shifts, but a structural workforce crisis.',
      challenges: [
        { title: 'Nursing Deficit: 175,000 units', description: 'The structural shortage in Italy has reached critical levels, risking assistance continuity (2026 Budget Law).' },
        { title: '€2.4 Billion Financial Impact', description: 'The cost of unplanned emergency overtime weighs heavily on hospital budgets, costing 4x more than programmed management.' },
        { title: 'Contractual Tension & Burnout', description: 'Over 59% of staff report chronic stress. The second national strike on April 17, 2026, highlights the urgency for workforce protection tools.' },
        { title: 'Lack of Predictive Intelligence', description: 'Most hospitals operate reactively, discovering crises while they are already underway — with high human and economic costs.' },
      ],
      sources: 'Sources: 2026 Budget Law, ANAAO-ASSOMED 2024, ISTAT 2025, Fp Cgil/Cisl/Uil Fpl March 2026',
    },
    solution: {
      label: 'Institutional Solution',
      title: 'A Strategic Intelligence Layer for Operational Continuity',
      intro: 'MindMedix AI integrates a predictive intelligence layer atop your existing HR systems, providing hospital directors the tools to protect their workforce and optimize costs.',
      features: [
        { title: 'Predictive Modeling (97% Recall)', description: 'We analyze historical patterns from 34 Italian hospitals to detect shortages 3 weeks before they happen with mathematical precision.' },
        { title: 'Decision Intelligence (Traffic Lights)', description: 'No complex data dumps. An intuitive traffic light system indicates where to intervene, enabling rapid, fact-based board-level decisions.' },
        { title: 'Operational Cost Optimization', description: 'We reduce reliance on external agencies and emergency overtime, bringing average savings of €2,400 for every prevented crisis.' },
        { title: 'Privacy-First Architecture', description: 'Zero sensitive patient data. Anonymized operational metadata only. GDPR Art. 89 compliant and ready for EU AI Act.' },
      ],
      dashboardTitle: 'Operational Intelligence - Preview',
      dashboardMetrics: ['Assistance Continuity', 'Workforce Resilience', 'Budget Protection'],
      realStatCards: [
        { value: '97%', label: 'Crisis Recall', sublabel: 'Reliable and validated detection' },
        { value: '97.1%', label: 'LOWO Accuracy', sublabel: 'Leave-One-Ward-Out validation' },
        { value: '3 Weeks', label: 'Operational Advance', sublabel: 'Time to act preemptively' },
        { value: '€2,400', label: 'Value per Crisis', sublabel: 'Direct savings on emergency costs' },
      ],
    },
    howItWorks: {
      label: 'Platform',
      title: 'How it works',
      intro: 'A transparent pipeline from your data to better operational decisions—secure, compliant, and human-centered.',
      steps: [
        { title: 'CSV Export from Zucchetti or TeamSystem', description: 'No complex IT integration. In the pilot phase: a simple weekly CSV export from your existing HR system. Zero APIs, zero installations.' },
        { title: 'Model runs in 48 hours', description: 'XGBoost trained on 34 real Italian hospital wards analyzes historical patterns. Validated with Leave-One-Ward-Out: simulates deployment on a never-before-seen hospital.' },
        { title: 'Automatic PDF Report per ward', description: 'Every week: risk level for each ward, signals that triggered the alert, available internal staff, financial impact. Ready for the meeting.' },
        { title: 'Human-in-the-loop — always', description: 'The AI flags. The director decides. No autonomous shift changes. No access to medical records. Operational decision support only.' },
      ],
      securityTitle: 'Enterprise-grade security',
      securityDesc: 'Built in Europe. Privacy-first. GDPR-aware. Not a medical device. Ethical AI.',
      badges: ['GDPR Compliant', 'Data Residency', 'Human-in-the-loop', 'SOC 2 Ready'],
    },
    value: {
      label: 'Impact',
      title: 'Why hospitals choose MindMedix AI',
      intro: 'Measurable results — validated on real data.',
      values: [
        { title: 'Reduce Overtime Costs', description: 'Proactive staffing reduces emergency overtime and agency spend.' },
        { title: 'Prevent Staffing Crises', description: 'Early detection of shortages and burnout before they impact care.' },
        { title: 'Improve Planning', description: 'Data-driven scheduling that respects capacity and preferences.' },
        { title: 'Increase Stability', description: 'Predictable operations improve both staff and patient outcomes.' },
        { title: 'Data-Driven Decisions', description: 'Move from reactive firefighting to strategic workforce management.' },
      ],
    },
    trust: {
      label: 'Trust & Positioning',
      title: 'Enterprise-ready. Institutionally trusted.',
      intro: 'MindMedix AI is built for healthcare institutions that demand rigor, compliance, and accountability.',
      pillars: [
        { title: 'Built in Europe', description: 'Designed and developed in Italy for European healthcare standards and regulations.' },
        { title: 'Privacy-first', description: 'Your data stays yours. No third-party sharing. Architecture built for institutional trust.' },
        { title: 'GDPR-aware', description: 'Compliance by design. Data residency, consent, and transparency at the core.' },
        { title: 'Human-in-the-loop AI', description: 'AI supports decisions; humans remain in control. No autonomous workforce changes.' },
        { title: 'Not a medical device', description: 'Operational intelligence only. We do not diagnose, treat, or replace clinical judgment.' },
        { title: 'Ethical AI', description: 'Transparent, auditable, and aligned with healthcare ethics and institutional values.' },
      ],
    },
    about: {
      label: 'About Us',
      title: 'European healthcare AI for operational intelligence',
      founderBlock: {
        label: 'A word from the founder',
        text: 'MindMedix AI was born from the need to stabilize European hospital operations through factual data, not guesswork. As Founder & CEO, my mission is to provide healthcare leaders with the predictive tools needed to protect their most valuable asset: their staff. We are not just building technology, but an infrastructure of trust for the future of healthcare.',
        founderName: 'Sassi Hamdi',
        founderRole: 'Founder & CEO',
      },
      teamBlock: {
        title: 'Team & Advisory Board',
        subtitle: 'Uniting clinical expertise and data engineering to protect the healthcare workforce.',
        members: [
          {
            name: 'Dr. Pietro Coletta',
            role: 'Clinical Advisor',
            image: '/images/doctor.jpeg',
            linkedin: 'https://www.linkedin.com/in/pietro-coletta-a9279960/',
            bio: 'Practicing surgeon at Villa Igea (Ancona) with deep expertise in private hospital operations. Pietro brings first-hand clinical experience with staffing crises and burnout, driving the medical validation and regional hospital network integration of our predictive models.'
          },
          {
            name: 'Asma Taba',
            role: 'Data Analyst Engineer',
            image: '/images/asma.jpeg',
            linkedin: 'https://www.linkedin.com/in/asma-taba/',
            bio: 'Specialist in healthcare workforce data modeling and machine learning pipeline design. Asma conducts advanced feature engineering on high-frequency healthcare time-series data to optimize and power our predictive operational intelligence engine.'
          }
        ]
      },
      p1: 'MindMedix AI is a workforce intelligence platform for European hospitals. We help healthcare systems anticipate staffing shortages and burnout risks 3 weeks in advance, using anonymized operational data.',
      p2: 'Under the leadership of Sassi Hamdi, our team combines technical excellence in enterprise AI systems with a strict commitment to European privacy regulations.',
      p3: 'Our vision is a healthcare system where technology anticipates operational crises, allowing hospital directors to act before burnout impacts the quality of care.',
      location: 'Official Headquarters',
      locationValue: 'Ancona, Italy',
      stage: 'Status',
      stageValue: 'Validated on 34 Italian hospitals · Pilots Available',
      founded: 'Founded',
      foundedValue: 'January 2026',
      focus: 'Sector',
      focusValue: 'Hospital Operations (No Clinical AI)',
    },
    faq: {
      label: 'Frequently Asked Questions',
      title: 'Everything you need to know about MindMedix AI',
      items: [
        {
          question: 'What is MindMedix AI?',
          answer: 'MindMedix AI is a workforce intelligence platform designed specifically for European hospitals. It uses predictive algorithms to anticipate staffing shortages and burnout risks, enabling proactive human resource management.'
        },
        {
          question: 'Who founded MindMedix AI?',
          answer: 'MindMedix AI was founded by Sassi Hamdi, current Founder & CEO and expert in healthcare operational intelligence. Sassi Hamdi leads the mission to make European hospitals more resilient.'
        },
        {
          question: 'What problem does MindMedix AI solve?',
          answer: 'We solve the structural healthcare workforce crisis. We predict staffing shortages and burnout 3 weeks in advance with 97% Recall, reducing emergency costs and staff stress.'
        },
        {
          question: 'Is MindMedix AI a clinical AI?',
          answer: 'No. MindMedix AI is categorically an OPERATIONAL AI. We do not analyze patient records or provide diagnoses. Our focus is strictly on process excellence and workforce resilience.'
        },
        {
          question: 'Who is Sassi Hamdi?',
          answer: 'Sassi Hamdi is the Founder & CEO of MindMedix AI. An engineer and enterprise systems builder, he created MindMedix AI to transform hospital operational data into predictive guardrails for healthcare leaders.'
        },
        {
          question: 'Do you use patient data?',
          answer: 'No. The system uses only anonymized operational metadata. We have no access to clinical data. We operate in full compliance with GDPR Article 89.'
        },
        {
          question: 'Where is MindMedix AI based?',
          answer: 'MindMedix AI is headquartered in Ancona, Italy, operating within the European healthcare system context.'
        },
        {
          question: 'How can I contact Sassi Hamdi or the team?',
          answer: 'You can schedule a call directly through the Founder page or contact the institutional team at contact@mindmedixai.health.'
        }
      ]
    },
    contact: {
      label: 'Partner with MindMedix AI',
      title: 'Collaborate with us',
      intro: 'We collaborate with hospitals, healthcare systems, strategic partners, and institutional stakeholders exploring predictive operational intelligence.',
      whoTitle: 'Who we work with',
      who: [
        'Hospitals interested in pilot programs',
        'Healthcare institutions and health systems',
        'Strategic and technology partners',
        'Investors and public institutions',
      ],
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'name@organization.com',
        organization: 'Organization',
        organizationPlaceholder: 'Hospital, institution, or company',
        interest: 'I am interested in',
        interestOptions: {
          pilot: 'Hospital pilot program',
          partnership: 'Strategic partnership',
          investment: 'Investment / Funding',
          paper: 'Validation Paper Request',
          other: 'General inquiry',
        },
        message: 'Message',
        messagePlaceholder: 'Tell us about your interest or proposal...',
        submit: 'Send Request',
        submitting: 'Sending...',
        error: 'Something went wrong. Please try again or email us at contact@mindmedixai.health.',
      },
      thankYou: 'Message Sent',
      thankYouDesc: 'Thank you for contacting MindMedix AI. Our team will review your inquiry and be in touch shortly.',
      emailLabel: 'Institutional contact',
    },
    footer: {
      links: { challenge: 'Challenge', solution: 'Solution', platform: 'Platform', impact: 'Impact', blog: 'Blog', contact: 'Contact', privacy: 'Privacy', terms: 'Terms', founder: 'Team' },
      copyright: '© {year} MindMedix AI. All rights reserved.',
      authorityLine: 'MindMedix AI is a workforce intelligence platform for European hospitals, founded by Sassi Hamdi. HQ: Ancona, Italy.',
      founderLink: 'Led by Sassi Hamdi, Founder & CEO'
    },
    legal: {
      backToHome: 'Back to home',
      privacyNote: 'By submitting you agree to our',
      privacyPolicy: 'Privacy Policy',
      andThe: 'and our',
      terms: 'Terms and Conditions',
    },
  },
} as const
