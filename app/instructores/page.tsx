import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { INSTRUCTORS, GUEST_MASTERS } from "@/lib/instructors";
import { WA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Instructores · El equipo que sostiene la sala",
  description:
    "Camila Valdés (representante de México en World Yogasana 2025), Esak García (creador del sistema E84), y un equipo de instructores certificados.",
};

export default function InstructoresPage() {
  return (
    <>
      <PageHero />
      <InHouse />
      <Guests />
      <Lineage />
      <CTA />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative pt-44 pb-20 md:pt-52 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/stock/yoga-pose-02.jpg"
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
            El equipo
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-mega text-[clamp(2.25rem,11vw,3.75rem)] md:text-8xl lg:text-[10rem] leading-[0.9]">
            Maestras y
            <br />
            <span className="text-ember italic">maestros del</span>
            <br />
            fuego.
          </h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-cream/80 leading-relaxed">
            Practicas con quienes representan a México en el mundo, y con
            invitados que solo se ven una vez al año.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function InHouse() {
  const placeholders = [
    "/images/stock/yoga-pose-01.jpg",
    "/images/stock/bikram-03.jpg",
    "/images/stock/yoga-pose-02.jpg",
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <Reveal>
          <div className="label-luxury text-ember mb-6">01 · La casa</div>
          <h2 className="display-mega text-[clamp(2rem,6vw,4.5rem)] mb-16">
            Equipo
            <br />
            <span className="text-ember italic">residente.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {INSTRUCTORS.map((inst, i) => (
            <Reveal key={inst.name} delay={i * 0.1}>
              <article className="group">
                <div className="grain-img relative aspect-[3/4] bg-surface overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={inst.image ?? placeholders[i % placeholders.length]}
                    alt={inst.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {inst.featured && (
                    <div className="absolute top-5 left-5 px-3 py-1 bg-ember text-ink label-luxury rounded-full">
                      Destacada
                    </div>
                  )}
                </div>
                <div className="label-luxury text-ember mb-2">{inst.role}</div>
                <h3 className="display-section text-3xl md:text-4xl mb-4">
                  {inst.name}
                </h3>
                <p className="text-cream/75 leading-relaxed mb-5">{inst.bio}</p>
                <ul className="space-y-2 pt-5 border-t border-ember/10">
                  {inst.credentials.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-sm text-ash"
                    >
                      <span className="text-ember mt-1">✦</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guests() {
  const placeholders = [
    "/images/stock/bikram-02.jpg",
    "/images/stock/yoga-studio-02.jpg",
    "/images/stock/hot-yoga-04.jpg",
    "/images/stock/yoga-pose-01.jpg",
  ];
  return (
    <section className="py-24 md:py-32 border-t border-ember/10 bg-ink-2">
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <Reveal className="lg:col-span-6">
            <div className="label-luxury text-ember mb-6">02 · Invitados</div>
            <h2 className="display-mega text-[clamp(2rem,6vw,4.5rem)]">
              Maestros del
              <br />
              <span className="text-ember italic">mundo.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-lg text-cream/80 leading-relaxed">
              The Hot Room recibe a lo largo del año a maestros del más alto
              nivel internacional. Inmersiones, master classes y workshops.
            </p>
          </Reveal>
        </div>

        <div className="space-y-6">
          {GUEST_MASTERS.map((guest, i) => (
            <Reveal key={guest.name} delay={i * 0.08}>
              <article className="group bg-surface border border-ember/10 rounded-3xl overflow-hidden hover:border-ember/30 transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-4 lg:col-span-3 grain-img relative aspect-[4/3] md:aspect-square bg-ink-2">
                    <Image
                      src={placeholders[i % placeholders.length]}
                      alt={guest.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="md:col-span-8 lg:col-span-9 p-8 md:p-10 lg:p-12">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                      <div className="label-luxury text-ember">
                        {guest.role}
                      </div>
                      <div className="label-luxury text-ash">
                        Invitado #{String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <h3 className="display-section text-4xl md:text-5xl lg:text-6xl mb-5">
                      {guest.name}
                    </h3>
                    <p className="text-cream/80 leading-relaxed max-w-2xl mb-6">
                      {guest.bio}
                    </p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                      {guest.credentials.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2 text-sm text-ash"
                        >
                          <span className="text-ember">✦</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lineage() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <Reveal className="max-w-3xl mx-auto text-center">
          <div className="label-luxury text-ember mb-8">El linaje</div>
          <p className="body-poem text-3xl md:text-5xl text-cream/90 leading-snug">
            Detrás de cada postura hay miles de años de tradición. Detrás de
            cada maestro, otro maestro. La cadena nunca se rompe.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 md:py-32 border-t border-ember/10">
      <div className="container-luxe">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="display-mega text-4xl md:text-6xl">
                Toma una clase
                <br />
                con quien te llame.
              </h2>
              <p className="mt-6 text-lg text-cream/80 max-w-md leading-relaxed">
                Cada instructora tiene su voz, su ritmo, su mirada. Empieza
                por una y deja que tu cuerpo elija.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:justify-end gap-4">
              <a
                href={WA.book}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ember text-ink font-medium rounded-full hover:bg-ember-soft transition-colors ember-glow"
              >
                Reservar clase
                <span>→</span>
              </a>
              <Link
                href="/clases"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-ember/30 rounded-full hover:bg-ember/5 transition-colors"
              >
                Ver horarios
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
