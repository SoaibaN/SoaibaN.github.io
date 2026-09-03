import type { Metadata } from "next";
import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";
import OxfordPostcardStack from "@/components/OxfordPostcardStack";
import { leadership } from "@/data/resume";
import {
  closingPhotos,
  oxfordPhotos,
  kenyaPhotos,
} from "@/data/galleries";

export const metadata: Metadata = {
  title: "Soaiba Nuzhat — Personal",
  description:
    "Beyond the résumé — hobbies, the YourGuide committee, a term at Oxford, and the Kraft Global Fellows program in Kenya.",
};

function SectionHeader({
  index,
  eyebrow,
  title,
  symbol,
}: {
  index: string;
  eyebrow: string;
  title: string;
  symbol: string;
}) {
  return (
    <div className="personal-section-heading mb-8">
      <div>
        <span className="personal-section-eyebrow">
          {index} / {eyebrow}
        </span>
        <h2 className="personal-section-title">{title}</h2>
      </div>
      <span className="personal-section-symbol" aria-hidden="true">
        {symbol}
      </span>
    </div>
  );
}

export default function PersonalPage() {
  return (
    <div className="personal-page mx-auto max-w-6xl px-5 sm:px-8">
      {/* ============================ INTRO =========================== */}
      <section aria-labelledby="personal-title" className="personal-hero">
        <div className="personal-hero-topline reveal reveal-1">
          <span>00 / Personal Notes</span>
          <span className="flex items-center gap-2">
            <span className="personal-status-dot" aria-hidden="true" />
            Always Exploring
          </span>
        </div>

        <div className="personal-hero-grid">
          <figure className="reveal reveal-4 personal-photo-stage">
            <span className="personal-photo-pin" aria-hidden="true" />
            <span className="personal-photo-icon icon-spark" aria-hidden="true">✦</span>
            <span className="personal-photo-icon icon-plane" aria-hidden="true">✈</span>
            <div className="personal-photo-card">
              <div className="personal-photo-frame">
                <Image
                  src="/images/personal/soaiba-personal.jpg"
                  alt="Soaiba Nuzhat smiling in front of a stone wall"
                  fill
                  priority
                  sizes="(min-width: 901px) 430px, calc(100vw - 80px)"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="personal-photo-caption">
                <span>Hi, that&apos;s me!</span>
                <span>New York, NY</span>
              </figcaption>
            </div>
          </figure>

          <div className="personal-hero-copy">
            <span className="reveal reveal-1 personal-kicker">Off the clock</span>
            <h1
              id="personal-title"
              className="personal-hero-title reveal reveal-2"
            >
              <span>Hi, I&apos;m</span>
              <span>Soaiba!</span>
            </h1>
            <p className="reveal reveal-3 personal-hero-subtitle">
              Life Beyond the Résumé.
            </p>
            <p className="reveal reveal-3 personal-hero-intro">
              If there&apos;s one word that ties it all together, it&apos;s
              exploring — new people, new places, new cultures, new systems.
              I&apos;m always chasing the unknown, and figuring out how to make it a
              little better.
            </p>
          </div>
        </div>
      </section>

      {/* ======================== LEADERSHIP ========================= */}
      <section aria-labelledby="leadership-title" className="personal-content-section">
        <div id="leadership-title">
          <SectionHeader index="01" eyebrow="Leadership" title="Beyond the Code" symbol="↗" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {leadership.map((item, index) => (
            <article
              key={item.org}
              className="personal-leadership-card"
            >
              <span className="personal-card-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">{item.role}</h3>
                {item.period ? (
                  <span className="meta-label shrink-0 normal-case tracking-normal">
                    {item.period}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 font-medium text-ink/90">
                {item.position ? `${item.position} · ${item.org}` : item.org}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ===================== KRAFT GLOBAL FELLOWS =================== */}
      <section aria-labelledby="kenya-title" className="personal-content-section">
        <div id="kenya-title">
          <SectionHeader
            index="02"
            eyebrow="Kraft Global Fellows"
            title="Nairobi, Kenya — January 2025"
            symbol="◎"
          />
        </div>

        <div className="kenya-story">
          <p>
            I&apos;m incredibly grateful to have been selected as one of six
            students to travel to Nairobi, Kenya, fully funded through The Office
            of the University Chaplain&apos;s Kraft Global Fellows Program, which is
            supported by the Kraft Family Fund for Intercultural and Interfaith
            Awareness.
          </p>
          <p>
            While there, I researched intercultural awareness by visiting major
            religious sites and talking with locals about their experiences.
          </p>
          <p>
            I even got to speak on Nairobi National News about international
            interconnectedness — a sentence I definitely didn&apos;t expect to write
            when the trip began.
          </p>
        </div>

        <div className="personal-gallery-wrap is-bulletin-board">
          <PhotoGallery photos={kenyaPhotos} variant="bulletin" />
        </div>
      </section>

      {/* ========================= OXFORD ============================= */}
      <section aria-labelledby="oxford-title" className="personal-content-section">
        <div id="oxford-title">
          <SectionHeader
            index="03"
            eyebrow="Oxford University"
            title="Study Abroad — Spring 2026"
            symbol="✈"
          />
        </div>
        <div className="kenya-story">
          <p className="font-medium">
            St. Anne&apos;s College — Computer Science &amp; Mathematics Program
          </p>
          <p>
            I spent a term at St. Anne&apos;s College studying Computer Science and
            Mathematics — Machine Learning, Geometric Deep Learning, Compilers,
            and Numerical Analysis. Beyond the coursework, I loved attending
            formals and balls at what felt like a real-life Hogwarts. Although
            I&apos;ve never read the Harry Potter books, the magic of Oxford
            seemed eerily similar to that of the novels, and I soaked up every
            second of it — using the time abroad to explore Morocco and Croatia
            along the way.
          </p>
        </div>
        <OxfordPostcardStack photos={oxfordPhotos} />
      </section>

      {/* ======================= CLOSING NOTE ========================== */}
      <section aria-labelledby="closing-title" className="personal-content-section">
        <div id="closing-title">
          <SectionHeader
            index="04"
            eyebrow="A final note"
            title="Thanks for Reading!"
            symbol="✦"
          />
        </div>
        <div className="kenya-story mb-0">
          <p>
            Something I&apos;ve loved my whole life is people — specifically,
            hearing their stories. I&apos;m a social butterfly, equal parts
            chatty and nosy, and I&apos;ll strike up a conversation with almost
            anyone just to find out how they ended up where they are. Talking
            heals me, and I&apos;ve never met a person&apos;s path I didn&apos;t
            find interesting.
          </p>
          <p>
            I love exploring the city and trying new foods whenever I&apos;m able to
            escape campus. I&apos;m also a bit of a gym rat — hitting my protein
            goals consumes most of my day-to-day life, and there&apos;s no bad day
            that a good shoulders-and-triceps workout can&apos;t fix.
          </p>
          <p>
            As someone who didn&apos;t really get into coding or computer science
            until a year into undergrad, I know what it&apos;s like to feel behind,
            especially in a space that&apos;s moving so quickly. If you&apos;re ever
            looking for advice, help, or just want to talk, shoot me a message on
            LinkedIn or send me an email!
          </p>
        </div>
        <div className="closing-collage-wrap">
          <div className="closing-collage-label" aria-hidden="true">
            <span>A few favorite moments</span>
            <span>Life lately ↘</span>
          </div>
          <PhotoGallery photos={closingPhotos} variant="collage" />
        </div>
      </section>

    </div>
  );
}
