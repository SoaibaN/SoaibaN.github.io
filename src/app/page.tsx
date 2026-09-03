import Image from "next/image";
import ExperienceAccordion from "@/components/ExperienceAccordion";
import EducationFlipCards from "@/components/EducationFlipCards";
import {
  profile,
  education,
  experience,
} from "@/data/resume";

const projectDisciplines = [
  { label: "Agentic AI", projectIndex: 0 },
  { label: "Parallel Systems", projectIndex: 1 },
  { label: "Machine Learning", projectIndex: 0 },
  { label: "Computer Architecture", projectIndex: 1 },
  { label: "Computational Biology", projectIndex: 2 },
];

export default function Home() {
  return (
    <div className="work-page mx-auto max-w-6xl px-5 sm:px-8">
      {/* ============================ HERO ============================ */}
      <section
        aria-labelledby="hero-name"
        className="border-b border-ink pt-6 sm:pt-8"
      >
        <div className="reveal reveal-1 flex items-center justify-between border-b border-line pb-3 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-muted sm:text-xs">
          <span>01 / Work</span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2 w-2 bg-accent" />
            Based in NYC
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(17rem,0.55fr)]">
          <div className="flex flex-col justify-center pb-0 pt-12 sm:pt-16 lg:pr-12">
            <p className="reveal reveal-1 mb-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Portfolio / 2026
            </p>
            <h1
              id="hero-name"
              className="reveal reveal-2 text-[clamp(4.15rem,13vw,9.5rem)] font-semibold leading-[0.75] tracking-[-0.075em]"
            >
              <span className="block">Soaiba</span>
              <span className="block text-accent">Nuzhat</span>
            </h1>

            <p className="reveal reveal-3 mt-9 max-w-2xl text-lg font-medium leading-snug sm:text-xl lg:text-2xl">
              <span aria-hidden="true" className="mr-2 font-mono text-accent">
                →
              </span>
              {profile.tagline}
            </p>

            <dl className="reveal reveal-4 mt-9 grid max-w-2xl border-y border-line sm:grid-cols-2">
              <div className="grid grid-cols-[2.5rem_1fr] items-center border-b border-line py-4 sm:border-b-0 sm:border-r sm:pr-5">
                <dt className="sr-only">Current location</dt>
                <span aria-hidden="true" className="font-mono text-xl text-accent">
                  ⌖
                </span>
                <dd>
                  <span className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                    Current location
                  </span>
                  <span className="mt-1 block text-sm font-semibold">New York, NY</span>
                </dd>
              </div>
              <div className="grid grid-cols-[2.5rem_1fr] items-center py-4 sm:pl-5">
                <dt className="sr-only">Occupation</dt>
                <span aria-hidden="true" className="font-mono text-lg text-accent">
                  &lt;/&gt;
                </span>
                <dd>
                  <span className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                    Occupation
                  </span>
                  <span className="mt-1 block text-sm font-semibold">
                    CS + Math @ Columbia
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="reveal reveal-4 flex flex-col items-center justify-center border-t border-ink bg-surface py-0 lg:border-l lg:border-t-0 lg:px-8 lg:py-10">
            <div className="work-identity relative aspect-[16/9] w-full max-w-[32rem] border border-ink bg-paper p-3 shadow-[7px_7px_0_var(--ink)] lg:aspect-[4/5] lg:max-w-[17rem]">
              <div className="relative h-full overflow-hidden border border-line bg-surface">
                <Image
                  src="/images/soaiba-headshot.jpg"
                  alt="Portrait of Soaiba Nuzhat"
                  fill
                  priority
                  sizes="(min-width: 1024px) 272px, (min-width: 640px) 512px, calc(100vw - 64px)"
                  className="object-cover object-[center_40%]"
                />
              </div>
            </div>

            <nav aria-label="Social profiles" className="mt-6 flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Soaiba Nuzhat on GitHub"
                title="GitHub"
                className="social-icon-link"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.28-.36 6.72-1.61 6.72-7.25A5.65 5.65 0 0 0 19.22 3.3 5.3 5.3 0 0 0 19.07.4S17.89 0 15 1.9a13.4 13.4 0 0 0-7 0C5.11 0 3.93.4 3.93.4a5.3 5.3 0 0 0-.15 2.9 5.65 5.65 0 0 0-1.5 3.95c0 5.63 3.44 6.88 6.72 7.25A4.8 4.8 0 0 0 8 18v4" />
                  <path d="M8 19c-3 .92-3-1.5-4-2" />
                </svg>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Soaiba Nuzhat on LinkedIn"
                title="LinkedIn"
                className="social-icon-link"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a4 4 0 0 1 2-3Z" />
                  <path d="M2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </nav>
          </div>
        </div>

        <nav className="projects-discipline-strip" aria-label="Explore projects by discipline">
          <div className="projects-discipline-track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-3 pr-3"
                aria-hidden={copy === 1}
              >
                {projectDisciplines.map(({ label, projectIndex }) => (
                  <a
                    key={`${copy}-${label}`}
                    href={`/projects/#project-tab-${projectIndex}`}
                    className="projects-discipline-item"
                    tabIndex={copy === 1 ? -1 : undefined}
                  >
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </nav>
      </section>

      {/* ========================== EXPERIENCE ======================== */}
      <section aria-labelledby="experience-title" className="py-10 sm:py-14">
        <div className="mb-10 flex items-end justify-between gap-5 sm:mb-14">
          <div>
            <span className="meta-label text-accent">02 / Experience</span>
            <h2
              id="experience-title"
              className="mt-3 text-[clamp(3.5rem,10vw,7.5rem)] font-semibold leading-[0.78] tracking-[-0.075em]"
            >
              Experience
            </h2>
          </div>
          <p className="hidden max-w-[12rem] pb-1 text-right font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.14em] text-muted sm:block">
            Select an entry<br />to view details
          </p>
        </div>
        <ExperienceAccordion experiences={experience} />
      </section>

      {/* =========================== EDUCATION ======================== */}
      <section aria-labelledby="education-title" className="py-10 sm:py-14">
        <div className="mb-10 flex items-end justify-between gap-5 sm:mb-14">
          <div>
            <span className="meta-label text-accent">03 / Where I studied</span>
            <h2
              id="education-title"
              className="mt-3 text-[clamp(3.5rem,10vw,7.5rem)] font-semibold leading-[0.78] tracking-[-0.075em]"
            >
              Education
            </h2>
          </div>
          <p className="hidden max-w-[13rem] pb-1 text-right font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.14em] text-muted sm:block">
            Select a pinned card<br />to reveal the details
          </p>
        </div>
        <EducationFlipCards entries={education} />
      </section>

      {/* ========================= CONTACT CTA ======================== */}
      <section
        aria-labelledby="contact-title"
        className="contact-card my-8 px-6 py-16 text-center sm:px-12 sm:py-20"
      >
        <span className="meta-label text-accent">Reach out to me to chat!</span>
        <h2
          id="contact-title"
          className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl"
        >
          Let&apos;s build something worth measuring.
        </h2>
        <div className="mt-8 flex justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="contact-email-link"
          >
            <span>{profile.email}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}
