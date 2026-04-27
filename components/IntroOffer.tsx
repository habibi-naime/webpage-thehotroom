import { WA } from "@/lib/constants";
import Reveal from "./Reveal";

export default function IntroOffer() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-y border-ember/10 bg-ink">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(92,107,82,0.18), transparent 50%), radial-gradient(circle at 80% 50%, rgba(163,137,97,0.15), transparent 50%)",
        }}
      />
      <div className="container-luxe relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-7">
            <div className="label-luxury text-ember">Tu primera vez</div>
            <h2 className="display-mega text-6xl md:text-8xl lg:text-9xl mt-4 leading-[0.85]">
              <span className="block">10 días.</span>
              <span className="block text-ember italic">$777.</span>
              <span className="block text-ash text-3xl md:text-5xl font-light not-italic mt-3">
                Una entrada al fuego.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="body-poem text-2xl md:text-3xl text-cream/90 leading-snug">
              Diez días consecutivos. Para los que vienen por primera vez o
              regresan después de meses.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ash">
              <li className="flex items-start gap-3">
                <span className="text-ember mt-1">✦</span>
                <span>Acceso a todas las clases de Bikram Serie 26</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ember mt-1">✦</span>
                <span>Diez días consecutivos de práctica</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-ember mt-1">✦</span>
                <span>Sin contrato. Sin compromiso. Solo el mat y tú.</span>
              </li>
            </ul>
            <a
              href={WA.intro}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-ember text-ink font-medium rounded-full hover:bg-ember-soft transition-colors ember-glow"
            >
              Reservar mis 10 días
              <span className="text-lg">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
