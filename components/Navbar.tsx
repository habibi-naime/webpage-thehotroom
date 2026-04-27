"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, WA } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/80 backdrop-blur-xl border-b border-ember/10"
            : "bg-transparent"
        }`}
      >
        <div className="container-luxe">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link
              href="/"
              className="group flex items-center gap-3 min-h-[44px] min-w-[44px] py-2 -my-2"
              aria-label="The Hot Room — Inicio"
            >
              <Logo />
              <div className="hidden sm:block">
                <div className="display-section text-base leading-none">
                  THE HOT ROOM
                </div>
                <div className="label-luxury text-ash mt-1">
                  Bikram · Monterrey
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {NAV.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`label-luxury transition-colors inline-flex items-center min-h-[44px] px-2 -mx-2 ${
                      active
                        ? "text-ember"
                        : "text-cream hover:text-ember"
                    }`}
                  >
                    <span className="relative inline-block">
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute -bottom-2 left-0 right-0 h-px bg-ember"
                        />
                      )}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={WA.book}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 min-h-[44px] bg-ember text-ink font-medium text-sm rounded-full hover:bg-ember-soft transition-colors ember-glow"
              >
                Reservar
                <ArrowIcon />
              </a>

              <button
                aria-label="Abrir menú"
                onClick={() => setOpen(true)}
                className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5"
              >
                <span className="w-5 h-px bg-cream" />
                <span className="w-5 h-px bg-cream" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-luxe">
              <div className="flex items-center justify-between h-20 md:h-24">
                <Logo />
                <button
                  aria-label="Cerrar menú"
                  onClick={() => setOpen(false)}
                  className="w-11 h-11 flex items-center justify-center"
                >
                  <CloseIcon />
                </button>
              </div>
              <motion.nav
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-2 mt-12 px-2"
              >
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 border-b border-ember/10"
                    >
                      <span className="label-luxury text-ash">
                        0{i + 1}
                      </span>
                      <span className="display-section text-4xl mt-1 block">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  href={WA.book}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 bg-ember text-ink font-medium rounded-full self-start"
                >
                  Reservar tu clase
                  <ArrowIcon />
                </motion.a>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <div className="relative h-10 w-10 rounded-full overflow-hidden flex items-center justify-center">
      <img
        src="/images/the-hot-room-logo.svg"
        alt="The Hot Room"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7H11M11 7L7 3M11 7L7 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4L16 16M4 16L16 4"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
