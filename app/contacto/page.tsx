import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { STUDIO, SOCIAL, WA } from "@/lib/constants";
import { HOURS } from "@/lib/schedule";

export const metadata: Metadata = {
  title: "Contacto · Reserva tu lugar",
  description:
    "Plaza Chroma, San Pedro Garza García. Reserva por WhatsApp, llámanos, o visítanos.",
};

const mapsQuery = encodeURIComponent(
  `${STUDIO.address}, ${STUDIO.city}, ${STUDIO.zip}`
);

export default function ContactoPage() {
  return (
    <>
      <PageHero />
      <ContactGrid />
      <FAQ />
      <FinalLine />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative pt-44 pb-20 md:pt-52 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/stock/yoga-studio-03.jpg"
          alt=""
          fill
          quality={85}
          priority
          className="object-cover grayscale opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      </div>

      <div className="container-luxe">
        <Reveal>
          <div className="label-luxury text-ember mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-ember" />
            Contacto · Reservas
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-mega text-[clamp(2.25rem,11vw,3.75rem)] md:text-8xl lg:text-[10rem] leading-[0.9]">
            Te
            <br />
            <span className="text-ember italic">esperamos.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-cream/80 leading-relaxed">
            La forma más rápida de reservar es por WhatsApp. Te respondemos en
            cuestión de minutos durante el horario del estudio.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ContactGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-7">
            <div className="bg-surface border border-ember/10 rounded-3xl overflow-hidden h-full flex flex-col">
              <div className="relative aspect-[16/10] bg-ink-2">
                <iframe
                  title="Ubicación de The Hot Room"
                  src={`https://www.google.com/maps?q=${mapsQuery}&z=16&output=embed`}
                  className="absolute inset-0 w-full h-full grayscale brightness-75 contrast-110"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between gap-6">
                <div>
                  <div className="label-luxury text-ember mb-4">
                    Visítanos en
                  </div>
                  <div className="display-section text-3xl md:text-4xl mb-4">
                    Plaza Chroma
                  </div>
                  <address className="not-italic text-cream/80 leading-relaxed">
                    {STUDIO.address}
                    <br />
                    {STUDIO.city}, {STUDIO.zip}
                    <br />
                    {STUDIO.country}
                  </address>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start px-6 py-3 min-h-[44px] border border-ember/30 rounded-full label-luxury text-cream hover:bg-ember/5 hover:border-ember/60 transition-colors"
                >
                  Cómo llegar <span>→</span>
                </a>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <a
                href={WA.intro}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-ember text-ink rounded-3xl p-8 md:p-10 ember-glow hover:bg-ember-soft transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="label-luxury">Reserva</span>
                  <ArrowIcon />
                </div>
                <div className="display-mega text-4xl md:text-5xl mb-3">
                  WhatsApp
                </div>
                <p className="text-ink/80 leading-relaxed">
                  La forma más rápida. Mándanos un mensaje y reservamos tu
                  primera clase de inmediato.
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href={`tel:${STUDIO.phone.replace(/\s/g, "")}`}
                className="group block bg-surface border border-ember/10 hover:border-ember/40 transition-colors rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="label-luxury text-ember">Llámanos</span>
                  <ArrowIcon className="text-ember" />
                </div>
                <div className="display-section text-3xl md:text-4xl mb-3 group-hover:text-ember transition-colors">
                  {STUDIO.phone}
                </div>
                <p className="text-cream/70 leading-relaxed">
                  Si prefieres oír una voz humana del otro lado.
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={`mailto:${STUDIO.email}`}
                className="group block bg-surface border border-ember/10 hover:border-ember/40 transition-colors rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="label-luxury text-ember">Email</span>
                  <ArrowIcon className="text-ember" />
                </div>
                <div className="text-base md:text-lg break-all group-hover:text-ember transition-colors">
                  {STUDIO.email}
                </div>
                <p className="mt-3 text-cream/70 leading-relaxed text-sm">
                  Para temas de teacher trainings, inmersiones, o convenios
                  corporativos.
                </p>
              </a>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Reveal delay={0.1}>
            <div className="bg-surface border border-ember/10 rounded-3xl p-8 h-full">
              <div className="label-luxury text-ember mb-5">Horario</div>
              <ul className="space-y-3">
                {HOURS.map((h) => (
                  <li key={h.days}>
                    <div className="text-cream font-medium">{h.days}</div>
                    <div className="text-ash text-sm tabular-nums">
                      {h.times}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-surface border border-ember/10 rounded-3xl p-8 h-full">
              <div className="label-luxury text-ember mb-5">Síguenos</div>
              <ul className="space-y-3">
                <li>
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream hover:text-ember transition-colors flex items-center gap-2"
                  >
                    Instagram <span className="text-ash">·</span>{" "}
                    <span className="text-ash">{STUDIO.handle}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream hover:text-ember transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL.linktree}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream hover:text-ember transition-colors"
                  >
                    Linktree
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="bg-surface border border-ember/10 rounded-3xl p-8 h-full">
              <div className="label-luxury text-ember mb-5">Wellhub · Gympass</div>
              <p className="text-cream/80 text-sm leading-relaxed mb-5">
                Estamos disponibles dentro del plan Platinum de Wellhub. La
                forma más fácil si tu empresa lo cubre.
              </p>
              <a
                href={SOCIAL.wellhub}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 label-luxury text-ember hover:gap-3 transition-all"
              >
                Ver en Wellhub <span>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "¿Es mi primera vez. Qué traigo?",
    a: "Ropa cómoda y ligera (vas a sudar mucho), una toalla grande, una toalla pequeña para el mat, y al menos una botella de agua de litro. Mats disponibles si no traes el tuyo.",
  },
  {
    q: "¿A qué hora llego?",
    a: "Quince minutos antes de tu primera clase. Te damos un tour rápido del estudio, te explicamos lo básico, y eliges tu lugar en la sala.",
  },
  {
    q: "¿Tengo que estar en forma para empezar?",
    a: "No. La práctica está diseñada para todos los niveles, edades y condiciones físicas. Vas a tu propio ritmo. Sentarse en clase está permitido y a veces es lo más sabio.",
  },
  {
    q: "¿Por qué la sala está tan caliente?",
    a: "Los 42°C calientan los músculos para permitir mayor flexibilidad sin lesión, aceleran la desintoxicación, y crean el contexto donde la mente se rinde y aparece la práctica real.",
  },
  {
    q: "¿Puedo usar Wellhub o Gympass?",
    a: "Sí. Estamos disponibles en el plan Platinum de Wellhub. Reserva tu clase desde la app de Wellhub.",
  },
  {
    q: "¿Tienen estacionamiento?",
    a: "Sí. Plaza Chroma tiene estacionamiento amplio y gratuito para clientes del estudio.",
  },
];

function FAQ() {
  return (
    <section className="py-24 md:py-32 border-t border-ember/10">
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="label-luxury text-ember mb-6">Preguntas</div>
              <h2 className="display-mega text-4xl md:text-6xl">
                Antes de
                <br />
                <span className="text-ember italic">tu primera</span>
                <br />
                clase.
              </h2>
            </div>
          </Reveal>

          <div className="lg:col-span-8 space-y-px bg-ember/10 rounded-2xl overflow-hidden">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="group bg-surface open:bg-ink-2">
                  <summary className="flex items-start justify-between gap-6 p-6 md:p-8 cursor-pointer list-none">
                    <span className="display-section text-xl md:text-2xl text-cream group-open:text-ember transition-colors">
                      {f.q}
                    </span>
                    <span className="text-ember text-2xl shrink-0 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 md:px-8 pb-6 md:pb-8 text-cream/80 leading-relaxed max-w-3xl">
                    {f.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalLine() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxe text-center">
        <Reveal>
          <p className="body-poem text-3xl md:text-5xl text-cream/90 max-w-3xl mx-auto leading-snug">
            Te respondemos rápido. Te recibimos mejor.
          </p>
          <a
            href={WA.book}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-12 px-8 py-4 bg-ember text-ink font-medium rounded-full hover:bg-ember-soft transition-colors ember-glow"
          >
            Mandar WhatsApp ahora
            <span>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={`${className} transition-transform group-hover:translate-x-1`}
    >
      <path
        d="M4 10H16M16 10L11 5M16 10L11 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
