export type ProjectMedia = {
  type: "image";
  src: string;
  alt: string;
  label?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  date?: string;
  summary: string;
  details: string;
  tags: string[];
  featured?: boolean;
  media: ProjectMedia[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "robotics-platform",
    title: "Robotics Platform",
    date: "2026",
    summary: "A placeholder project card with room for a project image, short summary, and tags.",
    details:
      "Use this modal area for a fuller project write-up. The layout is meant to hold more context without forcing every project into a dedicated page immediately.",
    tags: ["Robotics", "Automation", "CAD"],
    featured: true,
    media: [
      {
        type: "image",
        src: "/placeholder-robotics.jpg",
        alt: "Placeholder project image",
        label: "Project image",
      },
    ],
    links: [
      { label: "Project link", href: "#" },
      { label: "Source link", href: "#" },
    ],
  },
  {
    id: "systems-tooling",
    title: "Systems Tooling",
    date: "2026",
    summary: "A second placeholder project that keeps the card rhythm consistent across the homepage and projects page.",
    details:
      "This is designed for tags at the top, image first, and text below. The content model is intentionally lightweight so new projects can be added in TypeScript without touching page structure.",
    tags: ["Rust", "TypeScript", "Tooling"],
    featured: true,
    media: [
      {
        type: "image",
        src: "/placeholder-software.jpg",
        alt: "Placeholder project image",
        label: "Project image",
      },
    ],
    links: [{ label: "Project link", href: "#" }],
  },
  {
    id: "build-process",
    title: "Build Process",
    date: "2026",
    summary: "A third featured card to establish the intended three-column homepage layout.",
    details:
      "Later, real project content can replace this placeholder while preserving the same visual structure, hover behavior, and modal layout.",
    tags: ["Python", "Systems", "Workflow"],
    featured: true,
    media: [
      {
        type: "image",
        src: "/placeholder-process.jpg",
        alt: "Placeholder project image",
        label: "Project image",
      },
    ],
    links: [{ label: "Project link", href: "#" }],
  },
  {
    id: "future-project",
    title: "Future Project",
    date: "2026",
    summary: "An extra project row placeholder for the Projects page.",
    details:
      "The Projects page should continue the same gallery system with more rows instead of introducing a different layout.",
    tags: ["Prototype", "Design", "Planning"],
    media: [
      {
        type: "image",
        src: "/placeholder-future.jpg",
        alt: "Placeholder project image",
        label: "Project image",
      },
    ],
  },
];
