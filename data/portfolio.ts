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
  accent: "acid" | "pink" | "blue";
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
    company: "Julaje S.A.S. / Red ValleSalud",
    role: "Analista de Sistemas y Desarrollador de Software",
    period: "Abr. 2025 — Actualidad",
    summary:
      "Diseño y desarrollo soluciones que digitalizan procesos internos, conectan plataformas y mejoran la operación de equipos administrativos.",
    responsibilities: [
      "Desarrollo de aplicaciones empresariales en Zoho Creator y Deluge.",
      "Automatización con Python y Microsoft Power Automate.",
      "Integración de SharePoint, Outlook, Excel, PostgreSQL y servicios REST.",
      "Diseño de trazabilidad, reportes e interfaces internas.",
      "Pruebas funcionales, documentación técnica y mantenimiento continuo.",
    ],
    stack: [
      "Python",
      "Zoho Creator",
      "Deluge",
      "Power Automate",
      "PostgreSQL",
      "REST APIs",
      "Docker",
      "Git",
      "AI Agents",
    ],
  },
  {
    company: "CODESA S.A.S.",
    role: "Analista Funcional / Analista de Calidad de Software",
    period: "Jul. 2023 — Mar. 2025",
    summary:
      "Aseguré la calidad de flujos funcionales mediante pruebas, validación de datos, automatización y documentación de incidencias.",
    responsibilities: [
      "Diseño y ejecución de pruebas funcionales y automatizadas.",
      "Consultas SQL y Oracle para validación y auditoría de información.",
      "Documentación de evidencias, incidencias y casos de prueba.",
      "Seguimiento del ciclo de calidad con Jira y equipos de desarrollo.",
      "Trabajo bajo metodologías ágiles Scrum.",
    ],
    stack: ["QA", "Selenium", "SQL", "Oracle", "Jira", "Eclipse", "Scrum"],
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
    accent: "acid",
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
    accent: "pink",
  },
  {
    id: "esculapio",
    index: "03",
    label: "Integración de sistemas",
    title: "Integración Esculapio",
    problem:
      "Necesidad de consultar información externa para completar procesos internos.",
    solution:
      "Integración REST con transformación de JSON, validación de respuestas y consumo desde la aplicación interna.",
    result:
      "Consulta conectada al flujo de trabajo y menos pasos manuales.",
    role: "Integración y validación",
    stack: ["REST API", "JSON", "Zoho Creator", "Deluge", "Postman"],
    accent: "blue",
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
    accent: "acid",
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
    accent: "pink",
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
