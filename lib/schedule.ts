export type ClassKey = "serie26" | "e84" | "asanas84" | "pilates";

export const CLASS_TYPES: Record<
  ClassKey,
  { name: string; short: string; color: string; description: string; duration: string }
> = {
  serie26: {
    name: "Bikram Serie 26",
    short: "Serie 26",
    color: "#5C6B52",
    description:
      "Las 26 posturas tradicionales más 2 ejercicios de respiración. Sala a 42°C. Para todos los niveles.",
    duration: "90 min",
  },
  e84: {
    name: "Intermedia E84",
    short: "E84",
    color: "#A38961",
    description:
      "Secuencia intermedia basada en las 84 Asanas de Esak García. Para practicantes con base sólida.",
    duration: "90 min",
  },
  asanas84: {
    name: "84 Asanas",
    short: "84A",
    color: "#9CAF8E",
    description:
      "La serie avanzada completa. Solo sábados. Práctica seria y exigente.",
    duration: "90 min",
  },
  pilates: {
    name: "Hot Pilates",
    short: "Pilates",
    color: "#8B6E47",
    description:
      "Inferno Hot Pilates. Trabajo de fuerza y resistencia en sala caliente.",
    duration: "60 min",
  },
};

export type Slot = { time: string; type: ClassKey };

export const SCHEDULE: Record<string, Slot[]> = {
  Lunes: [
    { time: "06:00", type: "serie26" },
    { time: "07:30", type: "serie26" },
    { time: "09:30", type: "serie26" },
    { time: "12:00", type: "pilates" },
    { time: "17:30", type: "serie26" },
    { time: "19:00", type: "e84" },
    { time: "20:30", type: "serie26" },
  ],
  Martes: [
    { time: "06:00", type: "serie26" },
    { time: "07:30", type: "serie26" },
    { time: "09:30", type: "serie26" },
    { time: "12:00", type: "serie26" },
    { time: "17:30", type: "serie26" },
    { time: "19:00", type: "serie26" },
    { time: "20:30", type: "pilates" },
  ],
  Miércoles: [
    { time: "06:00", type: "serie26" },
    { time: "07:30", type: "serie26" },
    { time: "09:30", type: "e84" },
    { time: "12:00", type: "pilates" },
    { time: "17:30", type: "serie26" },
    { time: "19:00", type: "serie26" },
    { time: "20:30", type: "serie26" },
  ],
  Jueves: [
    { time: "06:00", type: "serie26" },
    { time: "07:30", type: "serie26" },
    { time: "09:30", type: "serie26" },
    { time: "12:00", type: "serie26" },
    { time: "17:30", type: "serie26" },
    { time: "19:00", type: "e84" },
    { time: "20:30", type: "serie26" },
  ],
  Viernes: [
    { time: "06:00", type: "serie26" },
    { time: "07:30", type: "serie26" },
    { time: "09:30", type: "serie26" },
    { time: "12:00", type: "pilates" },
    { time: "17:30", type: "serie26" },
    { time: "19:00", type: "serie26" },
  ],
  Sábado: [
    { time: "09:00", type: "serie26" },
    { time: "11:00", type: "asanas84" },
    { time: "12:30", type: "serie26" },
  ],
  Domingo: [
    { time: "09:00", type: "serie26" },
    { time: "11:00", type: "serie26" },
    { time: "12:30", type: "pilates" },
  ],
};

export const HOURS = [
  { days: "Lunes – Jueves", times: "6:00 – 14:00 · 17:00 – 22:00" },
  { days: "Viernes", times: "6:00 – 14:00 · 17:00 – 21:00" },
  { days: "Sábado – Domingo", times: "9:00 – 13:00" },
];
