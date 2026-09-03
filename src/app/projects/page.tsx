import type { Metadata } from "next";
import ProjectExplorer from "@/components/ProjectExplorer";
import { projects } from "@/data/resume";

export const metadata: Metadata = {
  title: "Soaiba Nuzhat — Projects",
  description: "Technical projects by Soaiba Nuzhat.",
};

export default function ProjectsPage() {
  return (
    <div className="work-page mx-auto max-w-6xl px-5 sm:px-8">
      <section aria-labelledby="projects-title" className="projects-hero border-b border-ink pt-6 sm:pt-8">
        <div className="reveal reveal-1 flex items-center justify-between border-b border-line pb-3 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-muted sm:text-xs">
          <span>01 / Selected Works</span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="projects-status-dot" />
            Build archive / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)]">
          <div className="flex flex-col justify-center py-14 sm:py-20 lg:pr-12">
            <h1
              id="projects-title"
              className="projects-title-shadow reveal reveal-2 text-[clamp(4.15rem,13vw,9.5rem)] font-semibold leading-[0.78] tracking-[-0.075em] text-accent"
            >
              Projects
            </h1>
            <p className="reveal reveal-3 mt-8 max-w-2xl text-lg font-medium leading-snug sm:text-xl lg:text-2xl">
              Some of My AI, Computer Architecture, and Biotech Builds
            </p>
          </div>

          <figure className="reveal reveal-4 projects-hero-figure border-t border-ink lg:border-l lg:border-t-0">
            <div className="projects-orbit" role="img" aria-label="AI, computer architecture, and biotech orbiting a central build node">
              <span className="projects-orbit-ring ring-one" aria-hidden="true" />
              <span className="projects-orbit-ring ring-two" aria-hidden="true" />
              <span className="projects-orbit-core">BUILD</span>
              <span className="projects-orbit-node node-ai">AI</span>
              <span className="projects-orbit-node node-arch">ARCH</span>
              <span className="projects-orbit-node node-bio">BIO</span>
            </div>
            <figcaption className="projects-figure-caption">
              <span>Field map</span>
              <span>Systems in motion</span>
            </figcaption>
          </figure>
        </div>

      </section>

      <section
        aria-label="Interactive project portfolio"
        className="border-t border-ink pb-24 pt-8 sm:pb-32 sm:pt-12"
      >
        <ProjectExplorer projects={projects} />
      </section>
    </div>
  );
}
