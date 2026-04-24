import Link from "next/link";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SiteNav } from "@/components/site-nav";

const instruments = [
  {
    title: "Bass",
    imageLabel: "Bass image",
    align: "left",
  },
  {
    title: "Guitar",
    imageLabel: "Guitar image",
    align: "right",
  },
  {
    title: "Piano",
    imageLabel: "Piano image",
    align: "left",
  },
] as const;

export default function MusicPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <PageHeader
          eyebrow="Music"
          title="A page that feels quieter and more editorial."
          description="This is a first-pass framework for the music page: intro text first, then alternating instrument sections with room for media."
          centered
        />

        <section className="site-shell px-6 pb-8 md:px-10 lg:px-12">
          <div className="mx-auto max-w-2xl text-center text-base leading-8 text-[var(--text-soft)] sm:text-lg">
            Placeholder text for how you think about music, practice, and performance.
          </div>
        </section>

        <section className="site-shell px-6 pb-16 pt-8 md:px-10 lg:px-12">
          <div className="space-y-16">
            {instruments.map((instrument, index) => (
              <Reveal key={instrument.title}>
                <section
                  className={`grid gap-8 rounded-[30px] bg-[rgba(30,28,28,0.74)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:grid-cols-2 md:p-8 ${
                    instrument.align === "right" ? "md:ml-auto md:max-w-[92%]" : "md:mr-auto md:max-w-[92%]"
                  }`}
                >
                  <div className={`${instrument.align === "right" ? "md:order-2" : ""}`}>
                    <div className="placeholder-media aspect-[4/3] min-h-[240px] rounded-[24px]">
                      {instrument.imageLabel}
                    </div>
                  </div>
                  <div className={`flex flex-col justify-center ${instrument.align === "right" ? "md:order-1" : ""}`}>
                    <p className="section-kicker">{`0${index + 1}`}</p>
                    <h2 className="mt-3 font-display text-3xl tracking-[-0.03em] text-[var(--text-strong)]">
                      {instrument.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-8 text-[var(--text-soft)]">
                      Placeholder paragraph for {instrument.title.toLowerCase()}. This section should eventually hold one image, one paragraph, and a quiet way to open media.
                    </p>
                    <button type="button" className="secondary-button mt-6 w-fit">
                      Watch media
                    </button>
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section className="site-shell px-6 pb-24 md:px-10 lg:px-12">
            <div className="rounded-[30px] bg-[rgba(30,28,28,0.74)] px-7 py-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <h2 className="font-display text-3xl tracking-[-0.03em] text-[var(--text-strong)]">
                Reach out about gigs or lessons.
              </h2>
              <Link href="/contact" className="primary-button mt-6 inline-flex">
                Contact
              </Link>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
