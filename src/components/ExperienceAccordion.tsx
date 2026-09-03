"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { ExperienceEntry as Experience } from "@/data/resume";

function ExperienceLogo({ experience }: { experience: Experience }) {
  return (
    <Image
      src={experience.logo}
      alt=""
      aria-hidden="true"
      width={56}
      height={56}
      sizes="(min-width: 640px) 52px, 40px"
      className="h-full w-full object-contain"
    />
  );
}

function ExperienceEntry({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const triggerId = `experience-trigger-${id}`;
  const panelId = `experience-panel-${id}`;
  const headingId = `experience-heading-${id}`;

  return (
    <li className="border-t border-ink last:border-b">
      <article>
        <h3 id={headingId} className="sr-only">
          {experience.role}
        </h3>
        <button
          id={triggerId}
          type="button"
          aria-controls={panelId}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="experience-trigger group grid w-full grid-cols-[3.25rem_minmax(0,1fr)_2.5rem] gap-x-3 py-6 text-left outline-none transition-colors hover:bg-accent/[0.055] focus-visible:bg-accent/[0.09] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:grid-cols-[5rem_minmax(0,1fr)_11rem_3rem] sm:gap-x-5 sm:py-8"
        >
          <span className="experience-icon row-span-2 flex h-12 w-12 items-center justify-center overflow-hidden border border-line bg-white p-1.5 shadow-[3px_3px_0_var(--ink)] transition-transform group-hover:-translate-y-0.5 sm:h-16 sm:w-16 sm:p-2">
            <ExperienceLogo experience={experience} />
          </span>

          <span className="min-w-0">
            <span className="mb-2 block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
              {String(index + 1).padStart(2, "0")} / Role
            </span>
            <span className="block text-[clamp(1.35rem,3vw,2.45rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              {experience.role}
            </span>
            <span className="mt-3 block text-sm font-semibold sm:text-base">
              {experience.institution}
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-muted sm:text-sm">
              {experience.team}
            </span>
          </span>

          <span className="col-start-2 mt-4 self-end font-mono text-[0.68rem] font-medium uppercase tracking-[0.1em] text-muted sm:col-start-3 sm:row-start-1 sm:mt-0 sm:pt-6">
            {experience.period}
          </span>

          <span
            aria-hidden="true"
            className="relative col-start-3 row-start-1 flex h-9 w-9 items-center justify-center justify-self-end border border-ink sm:col-start-4 sm:mt-4 sm:h-10 sm:w-10"
          >
            <span className="absolute h-px w-4 bg-current" />
            <span
              className={`absolute h-4 w-px bg-current transition-transform duration-300 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          </span>
        </button>

        <div
          id={panelId}
          role="region"
          aria-labelledby={headingId}
          aria-hidden={!isOpen}
          className={`experience-panel ${isOpen ? "is-open" : ""}`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-3 pb-8 sm:grid-cols-[5rem_minmax(0,1fr)_11rem_3rem] sm:gap-x-5 sm:pb-10">
              <div className="col-start-2 border-l border-line pl-4 sm:pl-6">
                <p className="mb-4 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  {experience.detailsLabel ?? "Selected impact"}
                </p>
                <ul className="flex max-w-3xl flex-col gap-4">
                  {experience.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="grid grid-cols-[1.1rem_1fr] gap-2 text-sm leading-relaxed text-muted sm:text-[0.95rem]"
                    >
                      <span aria-hidden="true" className="font-mono text-accent">
                        →
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

export default function ExperienceAccordion({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <ol>
      {experiences.map((item, index) => (
        <ExperienceEntry
          key={`${item.institution}-${item.role}`}
          experience={item}
          index={index}
        />
      ))}
    </ol>
  );
}
