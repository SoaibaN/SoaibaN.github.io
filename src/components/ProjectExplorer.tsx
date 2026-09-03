"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { ProjectEntry } from "@/data/resume";

export default function ProjectExplorer({
  projects,
}: {
  projects: ProjectEntry[];
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const projectButtons = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedProject = projects[selectedIndex];

  useEffect(() => {
    function selectFromHash() {
      const match = window.location.hash.match(/^#project-tab-(\d+)$/);
      if (!match) return;

      const index = Number(match[1]);
      if (index >= 0 && index < projects.length) {
        setSelectedIndex(index);
        setDetailsOpen(false);
      }
    }

    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, [projects.length]);

  if (!selectedProject) return null;

  function selectProject(index: number) {
    setSelectedIndex(index);
    setDetailsOpen(false);
    projectButtons.current[index]?.focus();
  }

  function handleProjectKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % projects.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + projects.length) % projects.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = projects.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      selectProject(nextIndex);
    }
  }

  return (
    <div className="project-explorer">
      <aside className="project-index-panel" aria-label="Project index">
        <div className="project-panel-label">
          <span>Project index</span>
          <span>{String(projects.length).padStart(2, "0")} total</span>
        </div>

        <div role="tablist" aria-orientation="vertical">
          {projects.map((project, index) => {
            const selected = selectedIndex === index;
            const projectNumber = String(index + 1).padStart(2, "0");

            return (
              <button
                key={project.title}
                ref={(button) => {
                  projectButtons.current[index] = button;
                }}
                id={`project-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="project-details"
                tabIndex={selected ? 0 : -1}
                className={`project-index-item ${selected ? "is-selected" : ""}`}
                onClick={() => selectProject(index)}
                onKeyDown={(event) => handleProjectKeyDown(event, index)}
              >
                <span className="project-index-number">{projectNumber}</span>
                <span className="project-index-title">
                  {project.indexTitle ?? project.title}
                </span>
                <span className="project-index-arrow" aria-hidden="true">
                  →
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      <article
        key={selectedProject.title}
        id="project-details"
        role="tabpanel"
        aria-labelledby={`project-tab-${selectedIndex}`}
        className="project-detail-panel"
        tabIndex={0}
      >
        <div className="project-detail-topline">
          <span>Selected project</span>
          <span>{String(selectedIndex + 1).padStart(2, "0")}</span>
        </div>

        <div className="project-detail-content">
          <div className="flex flex-wrap gap-2">
            {selectedProject.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="mt-7 max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
            {selectedProject.title}
          </h2>

          {selectedProject.period ? (
            <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {selectedProject.period}
            </p>
          ) : null}

          {selectedProject.description ? (
            <>
              <p className="project-description">{selectedProject.description}</p>

              {selectedProject.bullets.length > 0 ? (
                <div className="project-details-block">
                  <button
                    type="button"
                    className="project-details-toggle"
                    aria-expanded={detailsOpen}
                    aria-controls={`project-bullets-${selectedIndex}`}
                    onClick={() => setDetailsOpen((open) => !open)}
                  >
                    <span>Technical details</span>
                    <span className="project-details-toggle-icon" aria-hidden="true">
                      {detailsOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={`project-bullets-${selectedIndex}`}
                    className={`project-details-disclosure ${detailsOpen ? "is-open" : ""}`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-line">
                        {selectedProject.bullets.map((bullet, index) => (
                          <div
                            key={bullet}
                            className="grid grid-cols-[2.25rem_1fr] gap-2 border-b border-line py-5"
                          >
                            <span
                              aria-hidden="true"
                              className="font-mono text-xs font-semibold text-accent"
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <p className="text-sm leading-relaxed text-muted sm:text-base">
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          ) : null}

          {selectedProject.imageUrl ? (
            <figure className="project-visual-placeholder">
              <div className="project-image-frame">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.imageAlt ?? ""}
                  width={selectedProject.imageWidth ?? 1200}
                  height={selectedProject.imageHeight ?? 800}
                  sizes="(min-width: 768px) 55vw, calc(100vw - 80px)"
                  className="project-detail-image"
                />
              </div>
              {selectedProject.imageCaption ? (
                <figcaption className="project-image-caption">
                  {selectedProject.imageCaption}
                </figcaption>
              ) : null}
            </figure>
          ) : (
            <figure className="project-visual-placeholder">
              <div
                className={`project-visual-canvas ${selectedIndex === 0 ? "is-ai" : "is-architecture"}`}
                role="img"
                aria-label={`Visual placeholder for ${selectedProject.title}`}
              >
                <span className="project-visual-grid" aria-hidden="true" />
                <span className="project-visual-node visual-node-a" aria-hidden="true" />
                <span className="project-visual-node visual-node-b" aria-hidden="true" />
                <span className="project-visual-node visual-node-c" aria-hidden="true" />
                <span className="project-visual-signal signal-a" aria-hidden="true" />
                <span className="project-visual-signal signal-b" aria-hidden="true" />
                <span className="project-visual-signal signal-c" aria-hidden="true" />
                <span className="project-visual-label">Parallel compute profile</span>
              </div>
              <figcaption className="project-visual-caption">
                <span>Project visual / placeholder</span>
                <span>Add a screenshot, architecture diagram, or paper figure</span>
              </figcaption>
            </figure>
          )}

          {!selectedProject.description ? (
            <div className="mt-9 border-t border-line">
              {selectedProject.bullets.map((bullet, index) => (
                <div
                  key={bullet}
                  className="grid grid-cols-[2.25rem_1fr] gap-2 border-b border-line py-5"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs font-semibold text-accent"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <footer className="project-detail-footer">
          {selectedProject.paperUrl || selectedProject.repoUrl || selectedProject.link ? (
            <div className="project-resource-actions">
              {selectedProject.paperUrl ? (
                <a
                  href={selectedProject.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-resource-link"
                >
                  Read paper
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              {selectedProject.repoUrl ? (
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-resource-link is-secondary"
                >
                  View repository
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              {selectedProject.link ? (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-resource-link"
                >
                  View project
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          ) : (
            <span className="project-resource-pending">
              Paper / repository link coming soon
            </span>
          )}
          <span aria-hidden="true" className="project-detail-mark">
            {String(selectedIndex + 1).padStart(2, "0")}
          </span>
        </footer>
      </article>
    </div>
  );
}
