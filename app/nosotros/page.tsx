import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { STUDIO, WA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nosotros · La historia de The Hot Room",
  description:
    "Desde 2017 hemos sostenido un templo de Bikram en San Pedro Garza García. Una práctica. Una comunidad. Una sala caliente.",
};

export default function NosotrosPage() {
  return (
    <>
      <PageHero />
      <Story />
      <Values />
      <Studio />
      <Numbers />
      <CTA />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative pt-44 pb-20 md:pt-52 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/stock/yoga-studio-04.jpg"
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
            Desde {STUDIO.founded} · San Pedro
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-mega text-[clamp(2.25rem,11vw,3.75rem)] md:text-8xl lg:text-[10rem] leading-[0.9]">
            Más que un
            <br />
            <span className="text-ember italic">estudio.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-cream/80 leading-relaxed">
            La historia de un espacio que se convirtió en hogar. De una
            práctica que se convirtió en ritual. De una comunidad que sigue
            volviendo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="label-luxury text-ember sticky top-32">
              01 · Origen
            </div>
          </Reveal>

          <div className="lg:col-span-8 space-y-10">
            <Reveal delay={0.1}>
              <p className="display-section text-3xl md:text-5xl leading-tight">
                Abrimos las puertas en
                <span className="text-ember italic"> diciembre del 2017.</span>
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
                El plan era simple: traer a San Pedro la práctica tradicional
                de Bikram en la forma más pura posible. Veintiséis posturas.
                Dos respiraciones. Una sala a 42°C. Sin innovaciones, sin
                fusión, sin compromisos.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-lg md:text-xl text-cream/80 leading-relaxed">
                Lo que no esperábamos era la comunidad. Año tras año, las
                mismas caras. Y caras nuevas, también. Gente que llegó por
                consejo de su doctor y se quedó porque encontró algo más que
                un tratamiento. Gente que vino por curiosidad y descubrió una
                disciplina.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="body-poem text-2xl md:text-3xl text-ember">
                &ldquo;No hay duda, tenemos la mejor comunidad, los mejores
                alumnos, y a los mejores maestros.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  {
    title: "Tradición sobre tendencia",
    body: "Practicamos las 26 posturas tradicionales de Bikram tal como fueron diseñadas. La práctica no necesita actualización; nosotros sí.",
  },
  {
    title: "Sala caliente, no caldeada",
    body: "42°C, no 36 ni 38. La temperatura es la práctica. Bajarla es traicionar la disciplina.",
  },
  {
    title: "Comunidad sobre transacción",
    body: "Sabemos tu nombre. Notamos cuando faltaste. Te preguntamos cómo va. La práctica es íntima; el espacio también.",
  },
  {
    title: "Linaje sobre marketing",
    body: "Esak García viene cada año. Camila representó a México en Malasia. No es contenido; es nuestra forma de operar.",
  },
];

function Values() {
  return (
    <section className="py-24 md:py-32 border-t border-ember/10 bg-ink-2">
      <div className="container-luxe">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <Reveal className="lg:col-span-5">
            <div className="label-luxury text-ember mb-6">02 · Lo que somos</div>
            <h2 className="display-mega text-[clamp(2rem,6vw,4.5rem)]">
              Cuatro cosas
              <br />
              <span className="text-ember italic">no negociables.</span>
            </h2>
          </Reveal>
          <Reveal
            delay={0.15}
            className="lg:col-span-6 lg:col-start-7 self-end"
          >
            <p className="text-lg text-cream/80 leading-relaxed">
              Llevamos casi una década en esto. Algunas cosas las hemos
              ajustado. Estas cuatro, no.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ember/10 border border-ember/10 rounded-2xl overflow-hidden">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="bg-surface">
              <div className="p-8 md:p-10 h-full">
                <div className="display-mega text-7xl md:text-8xl text-ember/20 leading-none mb-4">
                  0{i + 1}
                </div>
                <h3 className="display-section text-2xl md:text-3xl mb-4">
                  {v.title}
                </h3>
                <p className="text-cream/75 leading-relaxed">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <Reveal>
          <div className="label-luxury text-ember mb-6">03 · El espacio</div>
          <h2 className="display-mega text-[clamp(2rem,6vw,4.5rem)] mb-16">
            Plaza Chroma.
            <br />
            <span className="text-ember italic">Cuarenta y dos grados.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <Reveal delay={0.1} className="md:col-span-7">
            <div className="grain-img relative aspect-[4/3] bg-surface overflow-hidden rounded-3xl">
              <Image
                src="/images/stock/yoga-studio-01.jpg"
                alt="The Hot Room studio"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover grayscale"
              />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-5 self-end space-y-6">
            <p className="text-lg md:text-xl text-cream/85 leading-relaxed">
              El estudio está en Plaza Chroma, sobre Avenida Ricardo Margain,
              a la altura de Vasconcelos. Una de las direcciones más cuidadas
              de San Pedro Garza García.
            </p>
            <p className="text-cream/75 leading-relaxed">
              La sala se sostiene a 42°C con humedad regulada. Vestidores
              limpios, regaderas, mats disponibles. Estacionamiento amplio. La
              parte más complicada es llegar; la sala se encarga del resto.
            </p>
            <ul className="pt-6 border-t border-ember/10 space-y-3 text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-ash">Dirección</span>
                <span className="text-cream text-right">{STUDIO.address}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-ash">Ciudad</span>
                <span className="text-cream text-right">{STUDIO.city}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-ash">Temperatura sala</span>
                <span className="text-ember text-right">
                  {STUDIO.temperature}
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-6 md:mt-10">
          <div className="grain-img relative aspect-square bg-surface overflow-hidden rounded-2xl">
            <Image
              src="/images/stock/hot-yoga-02.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover grayscale"
            />
          </div>
          <div className="grain-img relative aspect-square bg-surface overflow-hidden rounded-2xl md:row-span-2 md:aspect-auto">
            <Image
              src="/images/stock/bikram-04.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover grayscale"
            />
          </div>
          <div className="grain-img relative aspect-square bg-surface overflow-hidden rounded-2xl">
            <Image
              src="/images/stock/yoga-studio-02.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover grayscale"
            />
          </div>
          <div className="grain-img relative aspect-square bg-surface overflow-hidden rounded-2xl col-span-2 md:col-span-1">
            <Image
              src="/images/stock/hot-yoga-05.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover grayscale"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Numbers() {
  const data = [
    { value: "8+", label: "Años abiertos" },
    { value: STUDIO.rating, label: "Wellhub rating" },
    { value: STUDIO.temperature, label: "Sala caliente" },
    { value: "26", label: "Posturas tradicionales" },
  ];
  return (
    <section className="py-20 md:py-28 border-y border-ember/10 bg-ink-2">
      <div className="container-luxe">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {data.map((d, i) => (
            <Reveal key={d.label} delay={i * 0.08}>
              <div>
                <div className="display-mega text-[clamp(2.5rem,6vw,5rem)] text-ember">
                  {d.value}
                </div>
                <div className="label-luxury text-ash mt-3">{d.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <Reveal className="max-w-4xl mx-auto text-center px-4 md:px-8">
          <h2 className="display-mega text-[clamp(2rem,6vw,4.5rem)]">
            La mejor manera de
            <br />
            <span className="text-ember italic">conocernos</span> es entrar a
            la sala.
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
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
              Visitar el estudio
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
