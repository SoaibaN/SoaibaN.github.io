"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { EducationEntry } from "@/data/resume";

function Thumbtacks() {
  return (
    <span aria-hidden="true" className="education-thumbtacks">
      <span className="education-thumbtack" />
    </span>
  );
}

function EducationCard({
  entry,
  index,
}: {
  entry: EducationEntry;
  index: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const panelId = useId();

  return (
    <article className="education-card">
      <div className={`education-flip-inner ${isFlipped ? "is-flipped" : ""}`}>
        <button
          type="button"
          aria-controls={panelId}
          aria-expanded={isFlipped}
          aria-label={`Show education details for ${entry.institution}`}
          tabIndex={isFlipped ? -1 : 0}
          onClick={() => setIsFlipped(true)}
          className="education-face education-front"
        >
          <Thumbtacks />
          <span
            className={`education-logo-frame education-logo-${entry.logoFormat}`}
          >
            <Image
              src={entry.logo}
              alt={`${entry.institution} logo`}
              fill
              sizes="(min-width: 768px) 430px, calc(100vw - 80px)"
              className="object-contain"
            />
          </span>
          <span className="education-flip-hint">Flip me!</span>
        </button>

        <div
          id={panelId}
          aria-hidden={!isFlipped}
          onClick={() => setIsFlipped(false)}
          className={`education-face education-back education-back-${entry.logoFormat}`}
        >
          <Thumbtacks />
          <div className="education-back-content">
            <p className="meta-label text-accent">
              {String(index + 1).padStart(2, "0")} / Education
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-none tracking-[-0.04em] sm:text-3xl">
              {entry.backTitle}
            </h3>
            {entry.detail ? (
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                {entry.detail}
              </p>
            ) : null}
            <p className="mt-3 text-sm font-semibold leading-snug sm:text-base">
              {entry.degree}
            </p>
            {entry.period ? (
              <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                {entry.period}
              </p>
            ) : null}

            <p className="meta-label mt-5 font-bold text-ink">
              Relevant coursework
            </p>
            <ul className="education-course-list mt-2">
              {entry.coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>

            {entry.honors ? (
              <>
                <p className="meta-label mt-5 text-ink">Honors &amp; awards</p>
                <ul className="education-honors-list mt-2">
                  {entry.honors.map((honor) => (
                    <li key={honor}>{honor}</li>
                  ))}
                </ul>
              </>
            ) : null}

            {entry.graduation ? (
              <p className="mt-4 border-t border-line pt-3 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                {entry.graduation}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            aria-label={`Show ${entry.institution} logo`}
            tabIndex={isFlipped ? 0 : -1}
            onClick={() => setIsFlipped(false)}
            className="education-back-button"
          >
            ← Logo
          </button>
        </div>
      </div>
    </article>
  );
}

export default function EducationFlipCards({
  entries,
}: {
  entries: EducationEntry[];
}) {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-8">
      {entries.map((entry, index) => (
        <EducationCard key={entry.institution} entry={entry} index={index} />
      ))}
    </div>
  );
}
