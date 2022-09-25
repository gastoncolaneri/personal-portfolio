const personalData = ["Gastón Colaneri", 27, "Valencia, España"];

export const englishData = {
  navList: [
    { title: "Home", id: "home" },
    { title: "About me", id: "about" },
    { title: "Resume", id: "resume" },
    { title: "Portfolio", id: "portfolio" },
    { title: "Contact", id: "contact" },
  ],
  subNavList: ["Know me more", "Summary", "My work", "Get in touch"],
  socialNetworks: {
    linkedin: "https://www.linkedin.com/in/cgastoncolaneri/?locale=en_US",
    github: "https://github.com/gastoncolaneri",
  },
  personalData: personalData,
  personalDataLabel: ["Name", "Age", "From"],
  resumeDownloadLink: {
    link: "https://drive.google.com/file/d/1slN4M3R9QAMlnWDQVVytYvJD50jZLo9f/view?usp=sharing",
    label: "Resume Colaneri, Gaston.pdf",
  },
};

export const spanishData = {
  navList: [
    { title: "Inicio", id: "home" },
    { title: "Sobre mi", id: "about" },
    { title: "Curriculum", id: "resume" },
    { title: "Proyectos", id: "portfolio" },
    { title: "Contacto", id: "contact" },
  ],
  subNavList: [
    "Conoceme",
    "Mis conocimientos",
    "Mis trabajos",
    "Ponete en contacto",
  ],

  socialNetworks: {
    linkedin: "https://www.linkedin.com/in/cgastoncolaneri/",
    github: "https://github.com/gastoncolaneri",
  },
  personalData: personalData,
  personalDataLabel: ["Nombre", "Edad", "De"],
  resumeDownloadLink: {
    link: "https://drive.google.com/file/d/1L7PEHuBqKsbqiIHETOYrfCuMgQXjgvP-/view?usp=sharing",
    label: "CV Colaneri, Gaston.pdf",
  },
  education: [
    {
      name: "Coding Bootcamp",
      place: "NUCBA",
      url: "https://nucba.com.ar/codingbootcamp",
      dates: { start: "Abr 2021", end: "Abr 2022" },
    },
    {
      name: "Especialización en Desarrollo Mobile",
      place: "Codo a codo & IBM",
      url: "https://www.youtube.com/watch?v=dctIjpbxMnM&ab_channel=CodoaCodo",
      dates: { start: "Sep 2014", end: "Dic 2019" },
    },
    {
      name: "Desarrollo web Full Stack con Java",
      place: "PoloTIC Misiones",
      url: "https://polotic.misiones.gob.ar/",
      dates: { start: "Mar 2021", end: "Jul 2021" },
    },
    {
      name: "Full Stack - Python",
      place: "Codo a codo 4.0",
      url: "https://www.buenosaires.gob.ar/educacion/codocodo/el-programa",
      dates: { start: "Ago 2020", end: "Dic 2020" },
    },
    {
      name: "Licenciatura en Comercio Internacional",
      place: "Universidad Nacional de la Matanza",
      url: "https://www.unlam.edu.ar/",
      dates: { start: "Abr 2014", end: "Jul 2019" },
    },
  ],
  jobs: [
    {
      name: "Desarrollador de Software",
      place: "Pasiona",
      url: "https://pasiona.com/",
      description:
        "Desarrollo Frontend utilizando React.  Testing con Jest y React Testing Library.  Otras herramientas utilizadas: Redux - GraphQL - Postman - VS code - Azure DevOps",
      dates: { start: "Sep 2022", end: "Actualidad" },
    },
    {
      name: "Desarrollador Frontend",
      place: "Gedesco Services Spain",
      url: "https://www.gedesco.es/",
      description:
        "Desarrollo web utilizando React.  Otras herramientas utilizadas: TypeScript - PrimeReact - VS Code -SourceTree",
      dates: { start: "Feb 2022", end: "Sep 2022" },
    },
    {
      name: "Desarrollador de Software",
      place: "Epidata",
      url: "https://epidata.net/",
      description:
        "Desarrollo web utilizando React y Svelte  Desarrollo mobile utilizando React Native.  Otras herramientas utilizadas: Material UI - Gitlab - VS Code",
      dates: { start: "Jun 2021", end: "Feb 2022" },
    },
    {
      name: "Business Operations Analyst",
      place: "Accenture Service Center SRL",
      url: "https://www.accenture.com/ar-es",
      description:
        "Desarrollo e implementación de automatizaciones utilizando Python y sus librerías.  Ejecución de operaciones corporativas dentro del área de impuestos internacionales.  Elaboración de reportes y análisis de manera mensual, trimestral y anual.  Contacto con agentes externos tanto dentro como fuera de la compañía.",
      dates: { start: "Nov 2019", end: "Jun 2021" },
    },
    {
      name: "Ejecutivo de cuentas",
      place: "TeleCentro",
      url: "https://www.telecentro.com.ar/",
      description:
        "Contacto a profesionales y empresas vía mail o telefónicamente, para ofrecerles el servicio que brinda la compañía. Gestión de la venta de productos de la empresa Papelera Tucumán.  Confección de reportes, análisis y propuesta de ideas para generar un incremento en las ventas del sector.",
      dates: { start: "Abr 2015", end: "Oct 2019" },
    },
  ],
  skills: [
    { name: "React", number: 80 },
    { name: "React Native", number: 70 },
    { name: "JavaScript", number: 80 },
    { name: "Redux", number: 60 },
    { name: "TypeScript ", number: 70 },
    { name: "Jest", number: 50 },
    { name: "Git - Github - Gitlab", number: 70 },
    { name: "Python", number: 60 },
  ],
};
