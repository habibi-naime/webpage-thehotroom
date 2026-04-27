import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import IntroOffer from "@/components/IntroOffer";
import { WA, STUDIO } from "@/lib/constants";
import { CLASS_TYPES, ClassKey, HOURS } from "@/lib/schedule";

export default function HomePage() {
  return (
    <>
      {/* Capítulo 1: hero image queda pinned mientras se scrollea por marquee/manifesto/practices */}
      <div className="relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="relative h-full w-full">
            <Image
              src="/images/stock/hot-yoga-01.jpg"
              alt="Práctica de Bikram Yoga en The Hot Room"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover"
            />
            {/* Cream wash para integrar la foto al theme beige sin perder la imagen */}
            <div className="absolute inset-0 bg-ink/45 mix-blend-lighten" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/15 to-transparent" />
          </div>
        </div>

        <div className="relative -mt-[100vh] z-10">
          <Hero />
          <Marquee
            items={[
              "Bikram Yoga",
              "42°C",
              "San Pedro",
              "Desde 2017",
              "26 posturas",
            ]}
            className="border-y border-ember/10 py-8 bg-ink/75 backdrop-blur-sm"
          />
          <Manifesto />
          <Practices />
        </div>
      </div>

      <IntroOffer />
      <Lineage />
      <SchedulePreview />
      <Testimonials />
      <Gallery />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pt-32 pb-16 md:pb-24">
      <div className="container-luxe relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 xl:col-span-7">
            <Reveal>
              <div className="label-luxury text-ember mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-ember" />
                EST. {STUDIO.founded} · SAN PEDRO GG
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display-mega text-[clamp(2.25rem,6.5vw,8rem)]">
                Donde el
                <br />
                <span className="text-ember italic">fuego</span> nos
                <br />
                transforma.
              </h1>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-10 max-w-lg text-lg md:text-xl text-cream/85 leading-relaxed">
                Bikram Yoga tradicional en una sala a {STUDIO.temperature}.
                Veintiséis posturas. Dos respiraciones. Una comunidad.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href={WA.intro}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ember text-ink font-medium rounded-full hover:bg-ember-soft transition-colors ember-glow"
                >
                  10 días · $777 MXN
                  <span className="text-lg">→</span>
                </a>
                <Link
                  href="/clases"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-ember/30 text-cream rounded-full hover:bg-ember/5 hover:border-ember/60 transition-colors"
                >
                  Ver horarios
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 xl:col-span-5 hidden lg:block">
            <Reveal delay={0.5}>
              <div className="ml-auto max-w-xs">
                <div className="border-l border-ember/30 pl-6">
                  <div className="label-luxury text-ember">Plaza Chroma</div>
                  <p className="mt-3 text-sm text-cream/80 leading-relaxed">
                    Av. Ricardo Margain 315, San Pedro Garza García. Un templo
                    en el corazón de SPGG.
                  </p>
                </div>
                <div className="mt-8 border-l border-ember/30 pl-6">
                  <div className="label-luxury text-ember">
                    Wellhub · {STUDIO.rating}
                  </div>
                  <p className="mt-3 text-sm text-cream/80 leading-relaxed">
                    {STUDIO.reviews} reseñas verificadas. Práctica para todas
                    las edades.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="py-32 md:py-48 bg-ink/85 backdrop-blur-md">
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-3">
            <div className="label-luxury text-ember">01 · Manifiesto</div>
          </Reveal>

          <div className="lg:col-span-9 space-y-8">
            <Reveal delay={0.1}>
              <p className="display-section text-3xl md:text-5xl lg:text-6xl leading-tight">
                Este espacio es para ti.
                <span className="text-ash"> Para tu cuerpo,</span>
                <br />
                tu respiración,
                <span className="text-ember italic"> tu silencio.</span>
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-cream/80 max-w-3xl leading-relaxed">
                No es un gimnasio. No es una clase. Es un ritual de noventa
                minutos en una sala a 42°C donde los demás dejan de importar y
                solo queda lo esencial: tú, el mat, la respiración.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="body-poem text-2xl md:text-3xl text-ember">
                &ldquo;Pueden pasar días, semanas, meses, años, pero siempre
                volvemos.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Practices() {
  const order: ClassKey[] = ["serie26", "e84", "asanas84", "pilates"];
  return (
    <section className="py-32 border-t border-ember/10 bg-ink/95 backdrop-blur-md">
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <Reveal className="lg:col-span-5">
            <div className="label-luxury text-ember mb-6">02 · La práctica</div>
            <h2 className="display-mega text-[clamp(2rem,6vw,4.5rem)]">
              Cuatro caminos.
              <br />
              <span className="text-ember italic">Una misma sala.</span>
            </h2>
          </Reveal>
          <Reveal
            delay={0.15}
            className="lg:col-span-6 lg:col-start-7 self-end"
          >
            <p className="text-lg text-cream/80 leading-relaxed">
              Desde la serie clásica de Bikram para principiantes hasta la
              avanzada E84 de Esak García. Siempre en la sala caliente. Siempre
              con maestros certificados.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {order.map((key, i) => {
            const c = CLASS_TYPES[key];
            return (
              <Reveal key={key} delay={i * 0.08}>
                <Link
                  href="/clases"
                  className="group block relative bg-surface border border-ember/10 rounded-3xl p-8 md:p-10 hover:border-ember/40 transition-all overflow-hidden h-full"
                >
                  <div
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-3xl"
                    style={{ backgroundColor: c.color }}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className="label-luxury"
                        style={{ color: c.color }}
                      >
                        0{i + 1} / 04
                      </div>
                      <div className="label-luxury text-ash">
                        {c.duration}
                      </div>
                    </div>
                    <h3 className="display-section text-3xl md:text-4xl mb-4">
                      {c.name}
                    </h3>
                    <p className="text-cream/75 leading-relaxed">
                      {c.description}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-sm text-ember opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver horarios <span>→</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Lineage() {
  return (
    <section className="py-32 md:py-48 bg-ink-2 border-y border-ember/10">
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="label-luxury text-ember mb-6">03 · Linaje</div>
            <h2 className="display-mega text-[clamp(2rem,4vw,3.25rem)] leading-[0.95]">
              No somos
              <br />
              un estudio
              <br />
              <span className="text-ember italic">cualquiera.</span>
            </h2>
          </Reveal>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={0.1}>
              <CredentialCard
                eyebrow="Maestro invitado"
                name="Esak García"
                detail="Creador del sistema E84. Autoridad mundial en Bikram avanzado. Inmersiones anuales en The Hot Room."
                tag="Inmersión 2026"
              />
            </Reveal>

            <Reveal delay={0.15}>
              <CredentialCard
                eyebrow="Instructora"
                name="Camila Valdés"
                detail="Representó a México en el 16th World Championship of Yogasana Sports en Malasia, 2025."
                tag="Selección Nacional"
              />
            </Reveal>

            <Reveal delay={0.2}>
              <CredentialCard
                eyebrow="Master class"
                name="Rocío Enciso"
                detail="Bicampeona Nacional de Yoga Deportivo. Head Coach de la Selección Nacional Mexicana."
                tag="Bicampeona"
              />
            </Reveal>

            <Reveal delay={0.25}>
              <CredentialCard
                eyebrow="Master class"
                name="Deepak Yogi"
                detail="35 años enseñando Hatha Yoga en India. Fundador de Yogakul. Linaje directo del país de origen."
                tag="India"
              />
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.3} className="mt-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 border-t border-ember/10">
            <p className="body-poem text-xl md:text-2xl text-cream/90 max-w-2xl">
              Practicas con quienes representan a México en el mundo. Sin salir
              de Monterrey.
            </p>
            <Link
              href="/instructores"
              className="inline-flex items-center gap-3 px-6 py-3 min-h-[44px] border border-ember/30 rounded-full hover:bg-ember/5 transition-colors label-luxury text-cream"
            >
              Conoce al equipo
              <span>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CredentialCard({
  eyebrow,
  name,
  detail,
  tag,
}: {
  eyebrow: string;
  name: string;
  detail: string;
  tag: string;
}) {
  return (
    <div className="bg-surface border border-ember/10 rounded-2xl p-7 hover:border-ember/30 transition-colors h-full">
      <div className="flex items-center justify-between mb-6">
        <span className="label-luxury text-ash">{eyebrow}</span>
        <span className="label-luxury text-ember">{tag}</span>
      </div>
      <h3 className="display-section text-2xl md:text-3xl mb-3">{name}</h3>
      <p className="text-base md:text-sm text-cream/70 leading-relaxed">{detail}</p>
    </div>
  );
}

function SchedulePreview() {
  return (
    <section className="py-32">
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <Reveal className="lg:col-span-7">
            <div className="label-luxury text-ember mb-6">04 · Horarios</div>
            <h2 className="display-mega text-[clamp(2rem,6vw,4.5rem)]">
              Una sala caliente,
              <br />
              <span className="text-ember italic">todos los días.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 self-end">
            <p className="text-lg text-cream/80 leading-relaxed">
              Lunes a domingo. Mañana y noche. Para que la práctica encaje en
              tu vida, no al revés.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ember/10 border border-ember/10 rounded-2xl overflow-hidden">
          {HOURS.map((h, i) => (
            <Reveal key={h.days} delay={i * 0.08} className="bg-surface">
              <div className="p-8 md:p-10 h-full">
                <div className="label-luxury text-ember mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="display-section text-2xl md:text-3xl mb-4">
                  {h.days}
                </div>
                <div className="text-cream/80 tabular-nums">{h.times}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 text-center">
          <Link
            href="/clases"
            className="inline-flex items-center gap-3 px-8 py-4 bg-ember text-ink font-medium rounded-full hover:bg-ember-soft transition-colors ember-glow"
          >
            Ver calendario completo
            <span>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Tenemos la mejor comunidad, los mejores alumnos, y a los mejores maestros. The Hot Room no sería lo mismo sin cada uno de ustedes.",
    by: "La comunidad",
  },
  {
    quote:
      "Como cuando empiezas yendo al yoga y terminas con una bestie, o muchas besties.",
    by: "Una alumna",
  },
  {
    quote:
      "Pueden pasar días, semanas, meses e incluso años, pero siempre volvemos.",
    by: "Una practicante",
  },
];

function Testimonials() {
  return (
    <section className="py-32 border-t border-ember/10">
      <div className="container-luxe">
        <Reveal>
          <div className="label-luxury text-ember mb-12">05 · Comunidad</div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="space-y-6">
                <div className="text-ember text-5xl leading-none font-serif">
                  &ldquo;
                </div>
                <p className="body-poem text-xl md:text-2xl text-cream/90 leading-snug">
                  {t.quote}
                </p>
                <div className="pt-4 border-t border-ember/10">
                  <span className="label-luxury text-ash">— {t.by}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    "/images/stock/yoga-studio-01.jpg",
    "/images/stock/bikram-02.jpg",
    "/images/stock/hot-yoga-03.jpg",
    "/images/stock/yoga-pose-01.jpg",
    "/images/stock/bikram-04.jpg",
    "/images/stock/yoga-studio-03.jpg",
  ];
  return (
    <section className="py-24">
      <div className="container-luxe">
        <Reveal className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <div className="label-luxury text-ember mb-6">
                06 · El espacio
              </div>
              <h2 className="display-section text-4xl md:text-5xl">
                Una sala caliente.
                <br />
                <span className="text-ember italic">
                  Una práctica devocional.
                </span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {images.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 0.05}
              className={i === 1 || i === 4 ? "md:mt-12" : ""}
            >
              <div className="grain-img relative aspect-[4/5] bg-surface overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt="The Hot Room studio"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(92,107,82,0.22), transparent 60%)",
        }}
      />
      <div className="container-luxe relative">
        <Reveal className="text-center max-w-4xl mx-auto">
          <div className="label-luxury text-ember mb-8">07 · Te esperamos</div>
          <h2 className="display-mega text-[clamp(2.25rem,11vw,3.75rem)] md:text-8xl lg:text-[clamp(6rem,9vw,9rem)] leading-[0.85]">
            Nos vemos
            <br />
            en el <span className="text-ember italic">mat.</span>
          </h2>
          <p className="mt-10 text-xl text-cream/80 max-w-xl mx-auto">
            Trae una toalla, una botella de agua, y la disposición a sudar todo
            lo que ya no te sirve.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA.intro}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ember text-ink font-medium rounded-full hover:bg-ember-soft transition-colors ember-glow"
            >
              Empieza con $777
              <span>→</span>
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-ember/30 text-cream rounded-full hover:bg-ember/5 transition-colors"
            >
              Visita el estudio
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
