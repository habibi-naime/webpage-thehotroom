export type Instructor = {
  name: string;
  role: string;
  credentials: string[];
  bio: string;
  featured?: boolean;
  guest?: boolean;
};

export const INSTRUCTORS: Instructor[] = [
  {
    name: "Camila Valdés Correa",
    role: "Instructora · Co-líder Teacher Training E84",
    credentials: [
      "Representante de México · 16th World Championship of Yogasana Sports, Malasia 2025",
      "Certificación E84 · Esak García",
      "Bikram Yoga Teacher",
    ],
    bio: "Cami representó a México en el campeonato mundial de Yogasana en Malasia. Lleva el linaje E84 directo desde Esak García a la sala. Su práctica es precisión y poesía en movimiento.",
    featured: true,
  },
  {
    name: "Natalia",
    role: "Instructora · Co-líder Teacher Training E84",
    credentials: [
      "Certificación E84 · Esak García",
      "Bikram Yoga Teacher",
    ],
    bio: "Nat enseña con calma y rigor. Su clase es para los que quieren entrar profundo, no solo sudar. Forma parte del equipo fundador del programa de certificación.",
    featured: true,
  },
  {
    name: "Rebeka",
    role: "Instructora · Bikram Serie 26",
    credentials: [
      "Bikram Yoga Teacher",
      "Múltiples retos de 60 días consecutivos",
    ],
    bio: "Rebeka es ejemplo vivo de constancia. Múltiples retos de 60 días la respaldan. Lleva la disciplina de la práctica diaria al diálogo de cada clase.",
  },
];

export const GUEST_MASTERS: Instructor[] = [
  {
    name: "Esak García",
    role: "Maestro invitado · Inmersión E84",
    credentials: [
      "Creador del sistema E84 · 84 Asanas",
      "Autoridad mundial en Bikram avanzado",
      "Inmersiones anuales en The Hot Room desde 2024",
    ],
    bio: "Esak es la autoridad global en Bikram avanzado. Creó la secuencia E84 a partir de las 84 Asanas tradicionales. Viene a Monterrey una vez al año a llevar a la comunidad al siguiente nivel.",
    guest: true,
    featured: true,
  },
  {
    name: "Rocío Enciso",
    role: "Master class invitada",
    credentials: [
      "Bicampeona Nacional de Yoga Deportivo",
      "Head Coach Selección Nacional",
    ],
    bio: "Rocío es bicampeona nacional y entrena al equipo mexicano de yoga deportivo. Sus master classes son técnicas, exigentes y profundamente formativas.",
    guest: true,
  },
  {
    name: "Deepak Yogi",
    role: "Master class invitada · Hatha Yoga",
    credentials: [
      "35 años enseñando Hatha Yoga en India",
      "Fundador de Yogakul",
    ],
    bio: "Deepak trae el linaje directo de India. Hatha tradicional, sin dilución. Una oportunidad rara de practicar con un maestro de su nivel sin salir de Monterrey.",
    guest: true,
  },
  {
    name: "Zacni López",
    role: "Workshop invitado · Inversiones",
    credentials: ["Especialista en handstands y inversiones"],
    bio: "Zacni desarma el miedo a estar de cabeza. Sus talleres de inversiones son técnicos, paso a paso, y abren la puerta a una práctica completamente nueva.",
    guest: true,
  },
];
