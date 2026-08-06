import { assetPath } from "@/data/site";

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
  media?:
    | {
        type: "workflow";
        steps: {
          label: string;
          title: string;
          description: string;
        }[];
        impact: string;
        notice: string;
        facts: {
          label: string;
          value: string;
        }[];
      }
    | {
        type: "gallery";
        images: {
          src: string;
          label: string;
          alt: string;
        }[];
        facts: {
          label: string;
          value: string;
        }[];
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
    "Desarrollador de Software y Analista de Sistemas con experiencia en aplicaciones empresariales, automatización de procesos, integración de APIs REST, bases de datos y aseguramiento de calidad. Desarrollo soluciones con Java, Python, Angular, Django, Zoho Creator, n8n, Apache Airflow y Power Automate.",
  focus: [
    "Software Developer",
    "Automation Engineer",
    "RPA Developer",
    "QA Automation",
    "Integration Developer",
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
    description: "Aplicaciones web, empresariales y servicios backend.",
    items: [
      "Java",
      "Spring Boot",
      "Spring WebFlux",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Next.js",
      "Vue.js",
      "Django",
      ".NET",
      "C#",
      "C++",
    ],
  },
  {
    id: "02",
    title: "Automatización",
    description: "Flujos que reducen intervención manual y mejoran trazabilidad.",
    items: [
      "n8n",
      "Apache Airflow",
      "Power Automate",
      "SharePoint Online",
      "Excel",
      "Outlook",
      "Microsoft 365",
      "Docker",
      "Zoho Creator",
      "Deluge",
      "Low-code / No-code",
    ],
  },
  {
    id: "03",
    title: "Backend + datos",
    description: "Integraciones seguras y datos listos para operar.",
    items: [
      "Python",
      "Django",
      "Arquitectura cliente-servidor",
      "REST APIs",
      "OOP",
      "JSON",
      "PostgreSQL",
      "SQL Server",
      "Oracle",
      "SQL",
    ],
  },
  {
    id: "04",
    title: "Calidad de software",
    description: "Pruebas, validación de datos y control de calidad.",
    items: [
      "Selenium WebDriver",
      "Eclipse IDE",
      "Postman",
      "Jira",
      "Pruebas funcionales",
      "Pruebas de integración",
      "Pruebas de regresión",
      "Pruebas de aceptación",
      "Validación de datos",
      "Git",
      "Scrum",
      "Kanban",
    ],
  },
  {
    id: "05",
    title: "Habilidades profesionales",
    description: "Organización, comunicación y mejora continua.",
    items: [
      "Trabajo en equipo",
      "Proactividad",
      "Comunicación",
      "Iniciativa propia",
      "Responsabilidad",
      "Capacidad de organización",
      "Pensamiento lógico",
      "Planificación del trabajo",
      "Atención a los detalles",
    ],
  },
];

export const experience = [
  {
    company: "CODESA S.A.S",
    role: "Analista funcional (QA)",
    period: "Julio 2023 — Marzo 2025",
    responsibilities: [
      "Diseño, ejecución y documentación de pruebas funcionales, de integración, regresión, aceptación y validación de datos, garantizando la calidad y estabilidad de las aplicaciones.",
      "Automatización de pruebas mediante Selenium WebDriver y Eclipse IDE, desarrollando scripts para validar funcionalidades, formularios, procesos críticos y flujos completos del sistema.",
      "Elaboración de casos de prueba, escenarios, matrices de validación, planes de prueba y criterios de aceptación de acuerdo con los requerimientos funcionales.",
      "Gestión de incidencias, historias de usuario, tareas, evidencias y seguimiento de errores mediante Jira, trabajando conjuntamente con los equipos de desarrollo.",
      "Diseño y ejecución de consultas SQL avanzadas utilizando filtros, cruces de información, JOIN, subconsultas, funciones de agregación y validaciones entre diferentes tablas.",
      "Validación de integridad, consistencia y trazabilidad de los datos almacenados en bases de datos.",
      "Análisis de grandes volúmenes de información para identificar inconsistencias, registros duplicados, diferencias en procesos y posibles causas de errores.",
      "Ejecución de auditorías de información mediante consultas SQL, comparando resultados entre aplicaciones, bases de datos, archivos y servicios integrados.",
      "Validación de procesos de integración entre sistemas, verificando la correcta transmisión, transformación y almacenamiento de los datos.",
      "Pruebas de API REST mediante Postman, validando endpoints, parámetros, métodos HTTP, autenticación, códigos de respuesta y estructuras JSON.",
      "Elaboración de reportes de ejecución con resultados de pruebas aprobadas, fallidas, bloqueadas y pendientes de corrección.",
      "Análisis de causa raíz de incidencias mediante revisión funcional, consultas en bases de datos, validación de logs y reproducción controlada de errores.",
      "Participación activa en ceremonias de metodologías ágiles Scrum, incluyendo planificación, reuniones diarias, refinamiento, revisión y retrospectivas.",
      "Trabajo colaborativo con desarrolladores, líderes funcionales y usuarios para garantizar el cumplimiento de los requerimientos y la entrega de soluciones de calidad.",
      "Apoyo en la mejora continua de los procesos de pruebas, automatización, documentación y control de calidad del software.",
    ],
    stack: [
      "QA",
      "Selenium WebDriver",
      "Eclipse IDE",
      "SQL",
      "Oracle",
      "Postman",
      "Jira",
      "Scrum",
    ],
  },
  {
    company: "JULAJE S.A.S – VALLE SALUD I.P.S",
    role: "Analista de sistemas y Desarrollo de software",
    period: "Abril 28 - 2025 — Actualidad",
    responsibilities: [
      "Desarrollo, implementación y mantenimiento de aplicaciones empresariales utilizando Zoho Creator y Deluge.",
      "Creación y mantenimiento de automatizaciones en n8n, integrando API, bases de datos, correos electrónicos, archivos y servicios empresariales.",
      "Diseño de flujos en n8n con validaciones, condiciones, procesamiento de información y manejo de errores.",
      "Despliegue de soluciones contenerizadas en diferentes ambientes, facilitando su portabilidad, estabilidad y mantenimiento.",
      "Implementación de sistemas de trazabilidad y control de versiones para seguimiento de estados y eventos de procesos internos.",
      "Consumo e integración de API REST, manejo de endpoints, estructuras JSON, servicios externos y autenticación mediante tokens.",
      "Diseño, configuración y ejecución de flujos de trabajo mediante Apache Airflow, incluyendo la creación y despliegue de DAGs para programar, controlar y monitorear procesos automatizados.",
      "Colaboración con áreas de gestión humana, contabilidad y dirección administrativa para digitalizar y automatizar tareas manuales.",
      "Desarrollo de soluciones aplicando principios de programación orientada a objetos (OOP) con Python, JavaScript y C++.",
    ],
    stack: [
      "Zoho Creator",
      "Deluge",
      "n8n",
      "Docker",
      "REST APIs",
      "JSON",
      "Apache Airflow",
      "Python",
      "JavaScript",
      "C++",
      "OOP",
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
      "El proceso pasó de requerir horas de trabajo manual a resolverse en minutos, reduciendo tareas repetitivas para los analistas de glosas y manteniendo los soportes clasificados.",
    role: "Análisis, desarrollo y automatización RPA",
    stack: ["Python", "RPA", "DbMédico", "Esculapio", "PDF", "Google Drive"],
    accent: "blue",
    media: {
      type: "workflow",
      steps: [
        {
          label: "Entrada",
          title: "Glosa identificada",
          description: "El flujo detecta y prepara el caso asignado.",
        },
        {
          label: "Ejecución",
          title: "Respuesta automatizada",
          description: "El bot procesa la respuesta dentro del sistema.",
        },
        {
          label: "Documento",
          title: "Informe PDF",
          description: "Se genera automáticamente el soporte del proceso.",
        },
        {
          label: "Archivo",
          title: "Drive clasificado",
          description: "El resultado se organiza por empresa, entidad y factura.",
        },
      ],
      impact:
        "El bot reduce de horas a minutos la ejecución de tareas repetitivas y permite que los analistas de glosas concentren su tiempo en excepciones y casos que requieren revisión humana.",
      notice:
        "La demostración audiovisual no se publica porque el flujo opera sobre una aplicación interna y puede exponer información médica, personal, de facturación y lógica operativa. Este esquema presenta el alcance técnico respetando las políticas de confidencialidad y protección de datos.",
      facts: [
        { label: "Entrada", value: "Glosa" },
        { label: "Proceso", value: "Respuesta + PDF" },
        { label: "Impacto", value: "Horas → minutos" },
      ],
    },
  },
  {
    id: "corporate-campus",
    index: "04",
    label: "Plataforma corporativa de aprendizaje",
    title: "Campus corporativo Moodle",
    problem:
      "El campus de terceros generaba costos recurrentes y limitaba la personalización, el seguimiento de colaboradores y la integración con los sistemas internos.",
    solution:
      "Diseñé e implementé un campus propio en Moodle, integrado con Zoho Creator para sincronizar colaboradores, gestionar usuarios, asignar cursos y centralizar los estados de capacitación.",
    result:
      "Se eliminaron los costos de licenciamiento del campus anterior y se redujo el trabajo manual, con mayor control de avances, evaluaciones y certificaciones en una plataforma escalable.",
    role: "Diseño, implementación e integración",
    stack: [
      "Moodle",
      "Zoho Creator",
      "APIs",
      "Automatización",
      "Gestión de usuarios",
    ],
    accent: "cyan",
    media: {
      type: "gallery",
      images: [
        {
          src: assetPath("/projects/campus-acceso-protegido.png"),
          label: "Acceso",
          alt: "Pantalla de acceso del Campus ValleSalud",
        },
        {
          src: assetPath("/projects/campus-bienvenida.png"),
          label: "Bienvenida",
          alt: "Mensaje de bienvenida del Campus ValleSalud",
        },
        {
          src: assetPath("/projects/campus-cursos.png"),
          label: "Cursos",
          alt: "Catálogo de cursos disponibles en el Campus ValleSalud",
        },
      ],
      facts: [
        { label: "Integración", value: "Moodle + Zoho" },
        { label: "Gestión", value: "Usuarios sincronizados" },
        { label: "Operación", value: "Cursos centralizados" },
      ],
    },
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
