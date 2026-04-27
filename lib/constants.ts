export const STUDIO = {
  name: "The Hot Room",
  handle: "@thehotrooom",
  founded: 2017,
  address: "Plaza Chroma, Av. Ricardo Margain 315",
  city: "San Pedro Garza García, N.L.",
  zip: "66267",
  country: "México",
  email: "contacto_thehot_room@icloud.com",
  phone: "+52 81 3276 0394",
  whatsappNumber: "5218132760394",
  temperature: "42°C",
  rating: "4.98",
  reviews: 43,
};

export const SOCIAL = {
  instagram: "https://www.instagram.com/thehotrooom/",
  facebook: "https://www.facebook.com/thehotroombybikram/",
  linktree: "https://linktr.ee/thehotrooom",
  wellhub:
    "https://wellhub.com/es-mx/search/partners/the-hot-room-zona-santa-engracia/",
};

const wa = (msg: string) =>
  `https://wa.me/${STUDIO.whatsappNumber}?text=${encodeURIComponent(msg)}`;

export const WA = {
  intro: wa(
    "Hola! Me interesa el paquete intro de 10 días consecutivos por $777 MXN."
  ),
  book: wa("Hola! Quisiera reservar una clase."),
  info: wa("Hola! Quisiera más información sobre The Hot Room."),
  immersion: wa(
    "Hola! Me interesa la Inmersión E84 con Esak García."
  ),
  training: wa(
    "Hola! Me interesa el Teacher Training E84."
  ),
  classBooking: (className: string, day: string, time: string) =>
    wa(
      `Hola! Quisiera reservar la clase de ${className} el ${day} a las ${time}.`
    ),
};

export const NAV = [
  { label: "Inicio", href: "/" },
  { label: "Clases", href: "/clases" },
  { label: "Instructores", href: "/instructores" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];
