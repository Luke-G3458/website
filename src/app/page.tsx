import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { ProjectGallery } from "@/components/project-gallery";
import { Reveal } from "@/components/reveal";
import { SiteNav } from "@/components/site-nav";
import { projects } from "@/data/projects";

const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 3);

const domainGroups = [
  {
    title: "Engineering",
    skills: ["Automation", "Robotics", "CAD Design", "3D Printing"],
  },
  {
    title: "Software",
    skills: ["Rust", "TypeScript", "Python", "Systems + Tooling"],
  },
  {
    title: "Music",
    skills: ["Upright Bass", "Guitar", "Piano", "Bluegrass + Jazz"],
  },
];

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <section className="site-shell grid min-h-screen items-start gap-14 px-6 pb-16 pt-28 md:grid-cols-[minmax(220px,320px)_1fr] md:gap-18 md:px-10 md:pt-32 lg:px-12 lg:pt-36">
          <div className="relative mx-auto aspect-square w-44 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(245,191,127,0.2),transparent_42%),linear-gradient(160deg,rgba(38,33,31,1),rgba(26,24,25,1))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:mx-0 md:w-full max-w-[280px]">
            <div className="absolute inset-[10px] overflow-hidden rounded-full border border-white/8 bg-[linear-gradient(160deg,rgba(56,49,46,0.78),rgba(31,28,29,0.84))]">
              <Image
                src="/headshot.jpg"
                alt="Portrait headshot"
                fill
                priority
                sizes="(max-width: 768px) 11rem, 280px"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 rounded-full ring-1 ring-[rgba(225,159,86,0.1)]" />
          </div>

          <div className="max-w-3xl pt-2 md:pt-6">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-muted)]">
              Personal Portfolio
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-[-0.04em] text-[var(--text-strong)] sm:text-6xl md:text-7xl">
              Luke Gerth
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-[var(--text-soft)] sm:text-xl">
              Engineering, software, and music brought together through
              thoughtful creation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Engineering", "Software", "Music"].map((domain) => (
                <span
                  key={domain}
                  className="rounded-full border border-white/8 bg-white/4 px-4 py-2 text-sm tracking-[0.02em] text-[var(--text-soft)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Reveal>
          <section className="site-shell px-6 py-10 md:px-10 lg:px-12">
            <div className="max-w-2xl pl-0 md:pl-6 lg:pl-10">
              <blockquote className="border-l border-[rgba(225,159,86,0.18)] pl-6 font-display text-2xl leading-9 text-[var(--text-soft)] sm:text-[2rem] sm:leading-10">
                Placeholder philosophy text lives here. This section should read
                like a calm, reflective quote block.
              </blockquote>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="site-shell px-6 py-16 md:px-10 lg:px-12">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="section-kicker">Featured Work</p>
              </div>
              <Link
                href="/projects"
                className="hidden text-sm text-[var(--accent)] transition-colors hover:text-[var(--accent-strong)] md:inline-flex"
              >
                View all projects
              </Link>
            </div>

            <ProjectGallery projects={featuredProjects} />

            <div className="mt-8 md:hidden">
              <Link
                href="/projects"
                className="text-sm text-[var(--accent)] transition-colors hover:text-[var(--accent-strong)]"
              >
                View all projects
              </Link>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="site-shell px-6 py-16 md:px-10 lg:px-12">
            <div className="mb-8">
              <p className="section-kicker">Domains</p>
              <h2 className="section-heading">
                A balanced spread of work and craft.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {domainGroups.map((group, index) => (
                <div
                  key={group.title}
                  className="rounded-[28px] bg-[color-mix(in_srgb,var(--surface)_88%,white_12%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:bg-[color-mix(in_srgb,var(--surface-elevated)_92%,white_8%)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(225,159,86,0.05),0_24px_50px_rgba(0,0,0,0.18)]"
                  style={{
                    backgroundColor: `rgba(32, 30, 30, ${0.84 + index * 0.03})`,
                  }}
                >
                  <h3 className="font-display text-2xl tracking-[-0.02em] text-[var(--text-strong)]">
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tag-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="site-shell px-6 pb-24 pt-14 md:px-10 lg:px-12">
            <div className="rounded-[32px] bg-[linear-gradient(160deg,rgba(34,31,31,0.95),rgba(22,20,21,0.96))] px-7 py-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:px-10 sm:py-12">
              <p className="section-kicker justify-center">Contact</p>
              <h2 className="mt-3 font-display text-3xl tracking-[-0.03em] text-[var(--text-strong)] sm:text-4xl">
                Interested in engineering, software, or music?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-[var(--text-soft)] sm:text-lg">
                Keep this final section warm and simple. It should feel like an
                invitation, not a pitch.
              </p>
              <Link href="/contact" className="primary-button mt-8 inline-flex">
                Get in touch
              </Link>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
