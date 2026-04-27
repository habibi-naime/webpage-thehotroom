import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Schedule from "@/components/Schedule";
import Reveal from "@/components/Reveal";
import { WA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clases · Bikram, E84, 84 Asanas, Hot Pilates",
  description:
    "Calendario completo de clases en The Hot Room. Bikram Serie 26, Intermedia E84, 84 Asanas avanzada, y Hot Pilates. Lunes a domingo.",
};

export default function ClasesPage() {
  return (
    <>
      <PageHero />
      <Pricing />
      <ScheduleSection />
      <Programs />
      <BookCTA />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative pt-44 pb-20 md:pt-52 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/stock/bikram-01.jpg"
          alt=""
          fill
          quality={85}
          priority
          className="object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      </div>

      <div className="container-luxe">
        <Reveal>
          <div className="label-luxury text-ember mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-ember" />
            Calendario · Clases
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-mega text-6xl md:text-8xl lg:text-[10rem] leading-[0.9]">
            Encuentra tu
            <br />
            <span className="text-ember italic">hora del fuego.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-cream/80 leading-relaxed">
            Siete días de práctica. Cuatro caminos distintos. Cada clase
            reservable directamente por WhatsApp con un toque.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="py-20 border-y border-ember/10 bg-ink-2">
      <div className="container-luxe">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-px md:bg-ember/10 md:border md:border-ember/10 md:rounded-2xl md:overflow-hidden">
          <Reveal className="md:bg-surface">
            <div className="p-8 md:p-10 h-full relative">
              <div className="label-luxury text-ember mb-4">Tu primera vez</div>
              <div className="display-mega text-5xl md:text-6xl mb-2">
                $777
              </div>
              <div className="text-ash text-sm mb-6">10 días consecutivos</div>
              <p className="text-cream/80 text-sm leading-relaxed mb-8">
                Para quienes nunca han venido o regresan después de tres meses
                o más. La forma más cuidada de entrar.
              </p>
              <a
                href={WA.intro}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ember label-luxury hover:gap-3 transition-all"
              >
                Reservar <span>→</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:bg-surface relative">
            <div className="absolute top-6 right-6 px-2.5 py-1 bg-ember text-ink label-luxury rounded-full text-[0.6rem]">
              Más popular
            </div>
            <div className="p-8 md:p-10 h-full">
              <div className="label-luxury text-ember mb-4">Mensualidad</div>
              <div className="display-mega text-5xl md:text-6xl mb-2">
                Ilimitado
              </div>
              <div className="text-ash text-sm mb-6">Mes completo · todas las clases</div>
              <p className="text-cream/80 text-sm leading-relaxed mb-8">
                Para los que ya saben que esto es parte de su vida. Acceso a
                Serie 26, E84, 84 Asanas y Hot Pilates.
              </p>
              <a
                href={WA.info}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ember label-luxury hover:gap-3 transition-all"
              >
                Consultar precio <span>→</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="md:bg-surface">
            <div className="p-8 md:p-10 h-full">
              <div className="label-luxury text-ember mb-4">Paquete</div>
              <div className="display-mega text-5xl md:text-6xl mb-2">
                4 clases
              </div>
              <div className="text-ash text-sm mb-6">Vigencia 30 días</div>
              <p className="text-cream/80 text-sm leading-relaxed mb-8">
                Para los que practican una vez por semana o están construyendo
                el hábito sin presión.
              </p>
              <a
                href={WA.info}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ember label-luxury hover:gap-3 transition-all"
              >
                Más info <span>→</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-10 text-center">
          <p className="text-sm text-ash">
            También disponible vía Wellhub · Gympass (plan Platinum)
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ScheduleSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <Reveal className="lg:col-span-7">
            <h2 className="display-mega text-5xl md:text-7xl">
              Calendario
              <br />
              <span className="text-ember italic">semanal.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 self-end">
            <p className="text-lg text-cream/80 leading-relaxed">
              Toca cualquier clase para reservar tu lugar por WhatsApp.
              Llegamos quince minutos antes.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <Schedule />
        </Reveal>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="py-24 md:py-32 border-t border-ember/10 bg-ink-2">
      <div className="container-luxe">
        <Reveal>
          <div className="label-luxury text-ember mb-6">Programas especiales</div>
          <h2 className="display-mega text-5xl md:text-7xl mb-16">
            Para los que
            <br />
            <span className="text-ember italic">van más profundo.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <ProgramCard
              tag="Inmersión"
              title="Semana E84 con Esak García"
              detail="12 clases intermedias E84 + 1 clase de 84 Asanas + yoga towels. Una semana intensiva con la autoridad mundial en Bikram avanzado."
              price="≈ $350 USD"
              cta={WA.immersion}
            />
          </Reveal>

          <Reveal delay={0.2}>
            <ProgramCard
              tag="Certificación"
              title="Teacher Training E84"
              detail="Programa de certificación liderado por Camila Valdés y Natalia. Próxima edición: 24 de mayo al 6 de junio de 2026."
              price="Multi-semana"
              cta={WA.training}
            />
          </Reveal>

          <Reveal delay={0.3}>
            <ProgramCard
              tag="Reto"
              title="60 días consecutivos"
              detail="El reto más serio de la comunidad. Práctica diaria, sin excepciones, durante 60 días. Transforma todo."
              price="Comunidad"
              cta={WA.info}
            />
          </Reveal>

          <Reveal delay={0.4}>
            <ProgramCard
              tag="Master class"
              title="Maestros invitados"
              detail="Rocío Enciso (Bicampeona Nacional), Deepak Yogi (35 años en India), Zacni López (inversiones). El estudio recibe maestros del más alto nivel a lo largo del año."
              price="Calendario rotativo"
              cta={WA.info}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  tag,
  title,
  detail,
  price,
  cta,
}: {
  tag: string;
  title: string;
  detail: string;
  price: string;
  cta: string;
}) {
  return (
    <a
      href={cta}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block bg-surface border border-ember/10 rounded-3xl p-8 md:p-10 hover:border-ember/40 transition-colors h-full"
    >
      <div className="flex items-center justify-between mb-8">
        <span className="label-luxury text-ember">{tag}</span>
        <span className="label-luxury text-ash">{price}</span>
      </div>
      <h3 className="display-section text-3xl md:text-4xl mb-4 group-hover:text-ember transition-colors">
        {title}
      </h3>
      <p className="text-cream/75 leading-relaxed mb-8">{detail}</p>
      <div className="inline-flex items-center gap-2 label-luxury text-cream group-hover:text-ember group-hover:gap-3 transition-all">
        Quiero saber más <span>→</span>
      </div>
    </a>
  );
}

function BookCTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <Reveal>
          <div className="border border-ember/20 rounded-3xl p-10 md:p-16 text-center bg-gradient-to-b from-ink-2 to-ink">
            <p className="body-poem text-2xl md:text-4xl text-cream/90 max-w-3xl mx-auto leading-snug">
              ¿Tu primera vez? Reserva tu lugar quince minutos antes y trae
              ropa cómoda, una toalla, y dos botellas de agua.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA.intro}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ember text-ink font-medium rounded-full hover:bg-ember-soft transition-colors ember-glow"
              >
                Reservar primera clase
                <span>→</span>
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-ember/30 rounded-full hover:bg-ember/5 transition-colors"
              >
                Tengo preguntas
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
