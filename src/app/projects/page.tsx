import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { ProjectGallery } from "@/components/project-gallery";
import { Reveal } from "@/components/reveal";
import { SiteNav } from "@/components/site-nav";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <PageHeader
          eyebrow="Projects"
          title="A calm gallery for project work."
          description="This page uses the same project card and modal system as the homepage, just with room for additional rows."
        />

        <Reveal>
          <section className="site-shell px-6 pb-24 md:px-10 lg:px-12">
            <ProjectGallery projects={projects} />
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
