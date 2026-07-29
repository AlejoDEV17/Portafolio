export type Project = {
  id: string;
  index: string;
  title: string;
  label: string;
  problem: string;
  solution: string;
  result: string;
  role: string;
  stack: string[];
  featured?: boolean;
  accent: "cyan" | "steel" | "blue";
  media?: {
    video: string;
    poster: string;
    duration: string;
  };
};

export const profile = {
  name: "Alejandro Lozano Restrepo",
  shortName: "Alejandro Lozano",
  role: "Analista de Sistemas y Desarrollador de Software",
  location: "Cali, Colombia",
  email: "calivallelozano@gmail.com",
  github: "https://github.com/AlejoDEV17",
  linkedin:
    "https://www.linkedin.com/in/alejandro-lozano-restrepo-44631a230",
  statement:
    "Diseño soluciones digitales, automatizo procesos y conecto sistemas para transformar operaciones empresariales.",
  about:
    "Desarrollador de Software y Analista de Sistemas con experiencia en aplicaciones empresariales, automatización de procesos, RPA, integración de APIs REST, bases de datos y aseguramiento de calidad. Construyo bots con Python, soluciones en Power Automate y Zoho Creator, integraciones entre sistemas y herramientas apoyadas en inteligencia artificial.",
  focus: [
    "Software Developer",
    "Automation Engineer",
    "RPA Developer",
    "QA Automation",
    "AI Solutions",
    "Backend Developer",
  ],
};

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const capabilities = [
  {
    id: "01",
    title: "Desarrollo",
    description: "Aplicaciones empresariales y servicios mantenibles.",
    items: [
      "Python",
      "Java",
      "Spring Boot",
      "Spring WebFlux",
      "JavaScript",
      "TypeScript",
      "Angular",
      "PHP",
    ],
  },
  {
    id: "02",
    title: "Automatización",
    description: "Flujos que reducen intervención manual y mejoran trazabilidad.",
    items: [
      "RPA",
      "Power Automate",
      "Bots en Python",
      "Playwright",
      "Selenium",
      "QA Automation",
    ],
  },
  {
    id: "03",
    title: "Backend + datos",
    description: "Integraciones seguras y datos listos para operar.",
    items: [
      "REST APIs",
      "Postman",
      "PostgreSQL",
      "SQL Server",
      "MySQL",
      "Oracle",
      "SQL",
    ],
  },
  {
    id: "04",
    title: "Plataformas",
    description: "Entrega, colaboración y soluciones low-code.",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "Azure DevOps",
      "Jira",
      "Zoho Creator",
      "Deluge",
      "Microsoft 365",
    ],
  },
  {
    id: "05",
    title: "Inteligencia artificial",
    description: "IA aplicada a tareas y decisiones operativas.",
    items: [
      "AI Agents",
      "LLMs",
      "Prompt Engineering",
      "Automatización inteligente",
    ],
  },
];

export const experience = [
  {
    company: "Julaje S.A.S. / Valle Salud I.P.S.",
    role: "Analista de Sistemas y Desarrollo de Software",
    period: "28 abr. 2025 — Actualidad",
    responsibilities: [
      "Desarrollo de aplicaciones utilizando Zoho Creator.",
      "Implementación de soluciones bajo orientación a objetos (OOP).",
      "Diseño y mantenimiento de módulos personalizados para gestión de procesos internos.",
      "Integración de sistemas y automatización de flujos de trabajo.",
      "Pruebas funcionales y documentación técnica.",
      "Colaboración con equipos multidisciplinarios para optimizar la eficiencia operativa.",
      "Implementación de sistemas de trazabilidad y control de versiones para seguimiento de estados y eventos de procesos internos.",
      "Optimización de interfaces y reportes con Deluge, HTML y CSS, mejorando la experiencia del usuario interno.",
      "Colaboración con áreas de gestión humana, contabilidad y dirección administrativa para digitalizar y automatizar tareas manuales.",
      "Documentación técnica, pruebas funcionales y mantenimiento continuo de las soluciones desplegadas.",
      "Manejo de bases de datos PostgreSQL.",
      "JavaScript.",
      "Python (OOP).",
      "Diseño, creación y mantenimiento de flujos automatizados mediante Microsoft Power Automate para optimizar procesos administrativos y operativos.",
      "Integración de Microsoft Power Automate con SharePoint Online, Excel, Outlook y demás herramientas de Microsoft 365.",
    ],
    stack: [
      "Zoho Creator",
      "Deluge",
      "HTML",
      "CSS",
      "JavaScript",
      "Python (OOP)",
      "Power Automate",
      "SharePoint Online",
      "Excel",
      "Outlook",
      "Microsoft 365",
      "PostgreSQL",
      "Control de versiones",
    ],
  },
  {
    company: "CODESA S.A.S.",
    role: "Analista Funcional (QA)",
    period: "Jul. 2023 — Mar. 2025",
    responsibilities: [
      "Manejo de bases de datos SQL y Oracle.",
      "Implementación de procesos de automatización QA mediante Eclipse IDE, creando y ejecutando scripts de prueba para validar funcionalidades y flujos del sistema.",
      "Diseño y desarrollo de queries SQL para realizar validaciones, auditorías de información y soporte en la integración de sistemas.",
      "Documentación de los resultados de las pruebas, registrando incidencias, evidencias y reportes de validación para el control de calidad del software.",
      "Diseño, elaboración y ejecución de casos de prueba funcionales, de integración, regresión y humo (Smoke Testing).",
      "Validación de requerimientos funcionales y criterios de aceptación.",
      "Análisis de historias de usuario y documentación funcional.",
      "Identificación, documentación y seguimiento de defectos mediante Jira.",
      "Validación de flujos críticos del negocio antes de despliegues a producción.",
      "Elaboración de evidencias y reportes de pruebas.",
      "Trabajo bajo metodologías ágiles Scrum.",
      "Experiencia en desarrollo y aseguramiento de la calidad de software, utilizando herramientas de gestión como Jira para el seguimiento de incidencias, tareas y control de versiones.",
      "Trabajo en equipo con el área de desarrollo.",
    ],
    stack: [
      "QA",
      "Eclipse IDE",
      "Automatización de pruebas",
      "SQL",
      "Oracle",
      "Jira",
      "Scrum",
      "Control de versiones",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "automation-core",
    index: "01",
    label: "Proyecto destacado",
    title: "Motor de automatización empresarial",
    problem:
      "Tareas repetitivas, datos repartidos entre plataformas y procesos dependientes de intervención manual.",
    solution:
      "Bots y flujos orquestados que procesan información, conectan sistemas y mantienen trazabilidad operativa.",
    result:
      "Menor intervención manual, procesos más consistentes y mejor visibilidad del estado de cada operación.",
    role: "Análisis, desarrollo e integración",
    stack: ["Python", "Power Automate", "REST APIs", "PostgreSQL"],
    featured: true,
    accent: "cyan",
  },
  {
    id: "evaluation-platform",
    index: "02",
    label: "Aplicación empresarial",
    title: "Plataforma de evaluaciones",
    problem:
      "Seguimiento fragmentado de autoevaluaciones, niveles, validaciones y estados.",
    solution:
      "Aplicación centralizada con reglas de negocio, estados y seguimiento del proceso.",
    result:
      "Información centralizada, validaciones consistentes y mayor trazabilidad.",
    role: "Desarrollo full-cycle",
    stack: ["Zoho Creator", "Deluge", "REST APIs", "Bases de datos"],
    accent: "steel",
  },
  {
    id: "esculapio",
    index: "03",
    label: "RPA / Automatización de glosas",
    title: "Integración Esculapio",
    problem:
      "Responder glosas manualmente exige recorrer el sistema, actualizar la respuesta y organizar cada soporte generado.",
    solution:
      "Automatización RPA para responder glosas en DbMédico/Esculapio, generar los informes PDF y guardarlos en Google Drive de escritorio según empresa, entidad, estado y factura.",
    result:
      "Un flujo estandarizado que ejecuta la respuesta, produce el soporte y mantiene los archivos clasificados.",
    role: "Análisis, desarrollo y automatización RPA",
    stack: ["Python", "RPA", "DbMédico", "Esculapio", "PDF", "Google Drive"],
    accent: "blue",
    media: {
      video: "/projects/esculapio-rpa.mp4",
      poster: "/projects/esculapio-rpa-poster.jpg",
      duration: "00:34",
    },
  },
  {
    id: "corporate-campus",
    index: "04",
    label: "Automatización de aprendizaje",
    title: "Campus corporativo Moodle",
    problem:
      "Gestión dispersa de usuarios, cursos, evaluaciones y datos de formación.",
    solution:
      "Flujos de gestión y sincronización apoyados en APIs y automatización.",
    result:
      "Seguimiento más claro y datos de formación conectados.",
    role: "Automatización e integración",
    stack: ["Moodle", "APIs", "Python", "Zoho Creator"],
    accent: "cyan",
  },
  {
    id: "microsoft-flows",
    index: "05",
    label: "Low-code automation",
    title: "Flujos Microsoft 365",
    problem:
      "Aprobaciones, notificaciones y actualizaciones repetitivas entre herramientas.",
    solution:
      "Flujos automáticos, programados y manuales conectando el ecosistema Microsoft.",
    result:
      "Procesos conectados y seguimiento operativo más oportuno.",
    role: "Diseño e implementación",
    stack: ["Power Automate", "SharePoint", "Outlook", "Excel"],
    accent: "steel",
  },
  {
    id: "qa-automation",
    index: "06",
    label: "Quality engineering",
    title: "Automatización de pruebas",
    problem:
      "Validación repetitiva de funcionalidades, flujos e integraciones.",
    solution:
      "Escenarios automatizados y validaciones de APIs y datos como apoyo al ciclo QA.",
    result:
      "Validaciones repetibles, evidencia más clara y detección temprana de incidencias.",
    role: "QA y automatización",
    stack: ["Selenium", "Playwright", "Postman", "SQL"],
    accent: "blue",
  },
];

export const impact = [
  {
    title: "Optimización",
    text: "Tareas repetitivas convertidas en flujos consistentes.",
  },
  {
    title: "Integración",
    text: "Plataformas y datos conectados mediante APIs.",
  },
  {
    title: "Trazabilidad",
    text: "Estados, evidencias y cambios visibles durante el proceso.",
  },
  {
    title: "Centralización",
    text: "Información operativa disponible en un mismo sistema.",
  },
];

export const education = [
  {
    degree: "Ingeniería de Sistemas",
    institution: "Institución Universitaria Antonio José Camacho",
    status: "En curso",
  },
  {
    degree: "Técnico en Programación de Software",
    institution: "Servicio Nacional de Aprendizaje — SENA",
    status: "Completado",
  },
];
