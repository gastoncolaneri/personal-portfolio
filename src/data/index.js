import encontraMiMascotaImg from "assets/encontra-mi-mascota.jpg";
import encontraMiMascotaImg2 from "assets/encontra-mi-mascota2.jpg";
import encontraMiMascotaImg3 from "assets/encontra-mi-mascota3.jpg";

import fitnessImg from "assets/fitness-style.jpg";
import fitnessImg2 from "assets/fitness-style2.jpg";
import fitnessImg3 from "assets/fitness-style3.jpg";

import wolfGamesImg from "assets/wolf-games.jpg";
import wolfGamesImg2 from "assets/wolf-games2.jpg";
import wolfGamesImg3 from "assets/wolf-games3.jpg";

import weatherAppImg from "assets/weather-query.jpg";
import weatherAppImg2 from "assets/weather-query2.jpg";
import weatherAppImg3 from "assets/weather-query3.jpg";

const personalData = ["Gastón Colaneri", 27, "Valencia, España"];
const portfolio = [
  {
    name: "Weather Query App",
    spanishDescription:
      "Es una aplicación móvil que permite hacer consultas a la api de API Weather para conocer el clima de las ciudades seleccionadas y guardalas para poder chequearlo en otro momento",
    englishDescription:
      "This is an mobile application that allows you to make queries to the Weather API in order to know the weather in the selected cities and save them so you can check it in another moment",
    image: [weatherAppImg, weatherAppImg2, weatherAppImg3],
    tools: ["React Native", "Expo CLI", "SQL Lite"],
    web: "https://drive.google.com/file/d/19Ojpn3_8_J4lvwXvSDjEyFMOpfjtYruf/view",
    isApp: true,
    github: "https://github.com/gastoncolaneri/Weather-Query-React-Native",
    cols: 1,
    rows: 2,
  },
  {
    name: "Encontrá mi mascota",
    spanishDescription:
      "Página web en la cual se pueden publicar búsquedas de mascotas perdidas, adoptar una mascota o publicitar un refugio",
    englishDescription:
      "Website where you can post searches for lost pets, adopt a pet, or advertise a shelter",
    image: [encontraMiMascotaImg, encontraMiMascotaImg2, encontraMiMascotaImg3],
    tools: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Python",
      "Django",
      "PostgreSQL",
    ],
    web: "https://encontratumascota.herokuapp.com/",
    isApp: false,
    github: "https://github.com/gastoncolaneri/WebMascotas",
    cols: 2,
    rows: 1,
  },
  {
    name: "Wolf Games",
    spanishDescription: "Página web para encontrar juegos gratuitos",
    englishDescription: "Website to find free games",
    image: [wolfGamesImg, wolfGamesImg2, wolfGamesImg3],
    tools: ["HTML", "CSS", "Materialize", "JavaScript"],
    web: "https://wolfgames.vercel.app/",
    isApp: false,
    github: "https://github.com/gastoncolaneri/wolf-games",
    cols: 1,
    rows: 1,
  },
  {
    name: "Fitness Style",
    spanishDescription:
      "Página web con temática relacionada al deporte, con información sobre ejercicios, alimentación saludable y gimnasios",
    englishDescription:
      "Website related to the topic sport with information on exercises, healthy foods, and gyms",
    image: [fitnessImg, fitnessImg2, fitnessImg3],
    isApp: false,
    tools: ["HTML", "CSS"],
    web: "https://fitnesstyle.vercel.app/",
    github: "https://github.com/gastoncolaneri/fitness-style",
    cols: 1,
    rows: 1,
  },
];

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
  subNavList: ["Conoceme", "Mis conocimientos", "Mis trabajos", "Contactame"],

  socialNetworks: {
    linkedin: "https://www.linkedin.com/in/cgastoncolaneri/",
    github: "https://github.com/gastoncolaneri",
  },
  personalData: {
    aboutData: personalData,
    address: {
      value: "Valencia, España (46025)",
      link: "https://www.google.es/maps/place/Benicalap,+Valencia/@39.4938117,-0.4000469,15z/data=!3m1!4b1!4m5!3m4!1s0xd6045f3bfd8b6db:0x7abd9a7a738d24fa!8m2!3d39.4935471!4d-0.3913172?hl=es",
    },
  },
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
  portfolio: portfolio,
  contactOptions: {
    email: {
      value: "colaneri.gaston@hotmail.com",
      link: "mailto:colaneri.gaston@hotmail.com",
    },
    phone: {
      value: "+34 722 18 52 76",
      link: "https://api.whatsapp.com/send?phone=34722185276",
    },
  },
};
