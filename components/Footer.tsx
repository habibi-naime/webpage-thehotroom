import Link from "next/link";
import { NAV, SOCIAL, STUDIO, WA } from "@/lib/constants";
import { HOURS } from "@/lib/schedule";

export default function Footer() {
  return (
    <footer className="relative border-t border-ember/10 mt-32">
      <div className="container-luxe py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="display-mega text-5xl md:text-6xl">
              The Hot
              <span className="block text-ember italic">Room.</span>
            </div>
            <p className="mt-6 text-ash max-w-md leading-relaxed">
              Un templo de Bikram en San Pedro Garza García. La práctica
              tradicional de las 26 posturas en una sala a 42°C. Desde 2017.
            </p>
            <a
              href={WA.book}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-ember text-ink font-medium text-sm rounded-full hover:bg-ember-soft transition-colors"
            >
              Reserva por WhatsApp
              <span className="text-base">→</span>
            </a>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <div className="label-luxury text-ember mb-5">Navegación</div>
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center min-h-[44px] min-w-[44px] py-2 text-cream hover:text-ember transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="label-luxury text-ember mb-5">Horario</div>
            <ul className="space-y-3 text-sm">
              {HOURS.map((h) => (
                <li key={h.days}>
                  <div className="text-cream">{h.days}</div>
                  <div className="text-ash">{h.times}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="label-luxury text-ember mb-5">Visítanos</div>
            <address className="not-italic space-y-3 text-sm leading-relaxed">
              <div className="text-cream">
                {STUDIO.address}
                <br />
                {STUDIO.city}
                <br />
                {STUDIO.zip}
              </div>
              <div className="space-y-1.5 pt-2">
                <a
                  href={`tel:${STUDIO.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center min-h-[44px] py-2 text-ash hover:text-ember transition-colors"
                >
                  {STUDIO.phone}
                </a>
                <a
                  href={`mailto:${STUDIO.email}`}
                  className="inline-flex items-center min-h-[44px] py-2 text-ash hover:text-ember transition-colors break-all"
                >
                  {STUDIO.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ember/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="label-luxury inline-flex items-center min-h-[44px] py-2 text-ash hover:text-ember transition-colors"
            >
              Instagram
            </a>
            <span className="text-ash/40">·</span>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="label-luxury inline-flex items-center min-h-[44px] py-2 text-ash hover:text-ember transition-colors"
            >
              Facebook
            </a>
            <span className="text-ash/40">·</span>
            <a
              href={SOCIAL.wellhub}
              target="_blank"
              rel="noopener noreferrer"
              className="label-luxury inline-flex items-center min-h-[44px] py-2 text-ash hover:text-ember transition-colors"
            >
              Wellhub
            </a>
          </div>
          <div className="label-luxury text-ash">
            EST. 2017 · The Hot Room ·{" "}
            <span className="text-ember">42°C</span>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ember/5 text-center">
          <a
            href="https://www.cata.consulting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] py-2 text-[0.65rem] uppercase tracking-[0.2em] text-ash/60 hover:text-ember transition-colors"
          >
            Web design by Cata Consulting
          </a>
        </div>
      </div>
    </footer>
  );
}
