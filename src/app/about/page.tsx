import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { SiteNav } from "@/components/site-nav";

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <PageHeader
          eyebrow="About"
          title="A simple place for longer writing."
          description="This page is intentionally spare for now and leaves room for reflective writing later."
        />

        <section className="site-shell px-6 pb-24 md:px-10 lg:px-12">
          <div className="max-w-3xl text-base leading-8 text-[var(--text-soft)]">
            Placeholder text for future writing about creation, work, learning, and how you approach building.
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
