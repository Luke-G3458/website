"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

type ProjectGalleryProps = {
  projects: Project[];
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current === null ? current : (current + 1) % projects.length));
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? current : (current - 1 + projects.length) % projects.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, projects.length]);

  const activeProject = activeIndex === null ? null : projects[activeIndex];

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group flex h-full flex-col rounded-[30px] bg-[linear-gradient(180deg,rgba(33,30,30,0.98),rgba(24,22,23,1))] p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(225,159,86,0.06),0_24px_54px_rgba(0,0,0,0.22)]"
          >
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="placeholder-media aspect-[16/10] rounded-[24px]">
              {project.media[0]?.label ?? "Project image"}
            </div>

            <div className="flex flex-1 flex-col pt-5">
              <h3 className="font-display text-2xl tracking-[-0.03em] text-[var(--text-strong)]">
                {project.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">{project.summary}</p>
            </div>
          </button>
        ))}
      </div>

      {activeProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(10,9,10,0.62)] p-4 backdrop-blur-[2px]"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(29,27,27,0.98),rgba(20,19,19,0.99))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.06)] md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/4 text-[var(--text-soft)] hover:bg-white/8 hover:text-[var(--text-strong)]"
              aria-label="Close project modal"
            >
              ×
            </button>

            <div className="placeholder-media aspect-[16/10] rounded-[28px]">
              {activeProject.media[0]?.label ?? "Project image"}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {activeProject.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mt-5 pr-14 font-display text-4xl tracking-[-0.04em] text-[var(--text-strong)]">
              {activeProject.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">{activeProject.details}</p>

            {activeProject.links?.length ? (
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {activeProject.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[var(--accent)] hover:text-[var(--accent-strong)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((current) => (current === null ? current : (current - 1 + projects.length) % projects.length))
                }
                className="secondary-button"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((current) => (current === null ? current : (current + 1) % projects.length))}
                className="secondary-button"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
