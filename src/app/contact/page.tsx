import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SiteNav } from "@/components/site-nav";

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <PageHeader
          eyebrow="Contact"
          title="Get in touch."
          spacingClassName="px-5 pb-10 pt-20 md:px-8 md:pb-12 md:pt-24 lg:px-10"
          titleClassName="text-4xl sm:text-5xl"
          centered
        />

        <Reveal>
          <section className="site-shell flex justify-center px-5 pb-24 md:px-8 lg:px-10">
            <ContactForm />
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
