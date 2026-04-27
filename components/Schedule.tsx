"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLASS_TYPES, ClassKey, SCHEDULE } from "@/lib/schedule";
import { WA } from "@/lib/constants";

const DAYS = Object.keys(SCHEDULE);
const SHORT_DAYS: Record<string, string> = {
  Lunes: "Lun",
  Martes: "Mar",
  Miércoles: "Mié",
  Jueves: "Jue",
  Viernes: "Vie",
  Sábado: "Sáb",
  Domingo: "Dom",
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<string>("Lunes");
  const [filter, setFilter] = useState<ClassKey | "all">("all");

  const filteredSlots = SCHEDULE[activeDay].filter(
    (s) => filter === "all" || s.type === filter
  );

  return (
    <div className="space-y-10">
      {/* Type filter pills */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 md:px-5 py-2 rounded-full label-luxury transition-all border ${
            filter === "all"
              ? "border-ember bg-ember text-ink"
              : "border-ember/20 text-ash hover:text-cream hover:border-ember/40"
          }`}
        >
          Todas
        </button>
        {(Object.keys(CLASS_TYPES) as ClassKey[]).map((key) => {
          const c = CLASS_TYPES[key];
          const active = filter === key;
          return (
            <button
              key={key}
              onClick={() => setFilter(key)}
              style={
                active
                  ? { backgroundColor: c.color, borderColor: c.color, color: "#0a0907" }
                  : undefined
              }
              className={`px-4 md:px-5 py-2 rounded-full label-luxury transition-all border ${
                active
                  ? ""
                  : "border-ember/20 text-ash hover:text-cream hover:border-ember/40"
              }`}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle"
                style={{ backgroundColor: active ? "#0a0907" : c.color }}
              />
              {c.short}
            </button>
          );
        })}
      </div>

      {/* Day tabs */}
      <div className="border-b border-ember/10">
        <div className="flex overflow-x-auto -mb-px scrollbar-hide">
          {DAYS.map((day) => {
            const active = day === activeDay;
            return (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`relative shrink-0 px-5 md:px-8 py-4 label-luxury transition-colors ${
                  active ? "text-ember" : "text-ash hover:text-cream"
                }`}
              >
                <span className="hidden md:inline">{day}</span>
                <span className="md:hidden">{SHORT_DAYS[day]}</span>
                {active && (
                  <motion.div
                    layoutId="day-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-ember"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Slots grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeDay}-${filter}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredSlots.length === 0 && (
            <div className="col-span-full py-16 text-center">
              <p className="body-poem text-2xl text-ash">
                No hay clases de este tipo este día.
              </p>
            </div>
          )}
          {filteredSlots.map((slot, idx) => {
            const c = CLASS_TYPES[slot.type];
            return (
              <motion.a
                key={`${slot.time}-${idx}`}
                href={WA.classBooking(c.name, activeDay, slot.time)}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group relative block bg-surface border border-ember/10 rounded-2xl p-6 hover:border-ember/40 transition-colors overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full"
                  style={{ backgroundColor: c.color }}
                />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="display-mega text-4xl md:text-5xl tabular-nums">
                      {slot.time}
                    </div>
                    <div
                      className="label-luxury mt-2"
                      style={{ color: c.color }}
                    >
                      {c.short} · {c.duration}
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-4px] group-hover:translate-x-0">
                    <ArrowIcon />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-sm text-cream font-medium">
                    {c.name}
                  </div>
                  <div className="text-xs text-ash mt-1">
                    Reservar por WhatsApp
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Legend */}
      <div className="pt-8 border-t border-ember/10">
        <div className="label-luxury text-ash mb-5">Leyenda</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(Object.keys(CLASS_TYPES) as ClassKey[]).map((key) => {
            const c = CLASS_TYPES[key];
            return (
              <div key={key} className="flex items-start gap-3">
                <span
                  className="mt-2 w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: c.color }}
                />
                <div>
                  <div className="text-cream font-medium text-sm">
                    {c.name}
                    <span className="text-ash font-normal"> · {c.duration}</span>
                  </div>
                  <div className="text-ash text-sm mt-0.5 leading-relaxed">
                    {c.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="text-ember transition-transform"
    >
      <path
        d="M4 9H14M14 9L9 4M14 9L9 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
