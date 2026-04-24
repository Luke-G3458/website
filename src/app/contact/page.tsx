import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { SiteNav } from "@/components/site-nav";

const inquiryTypes = ["Engineering", "Software", "Music", "Lessons", "Other"];

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <PageHeader eyebrow="Contact" title="A simple way to get in touch." />

        <section className="site-shell px-6 pb-24 md:px-10 lg:px-12">
          <form className="max-w-2xl space-y-5">
            <label className="field-group">
              <span className="field-label">Name</span>
              <input className="field-input" type="text" name="name" placeholder="Your name" />
            </label>

            <label className="field-group">
              <span className="field-label">Email</span>
              <input className="field-input" type="email" name="email" placeholder="you@example.com" />
            </label>

            <label className="field-group">
              <span className="field-label">What is this about?</span>
              <select className="field-input" name="domain" defaultValue="">
                <option value="">Select a topic (optional)</option>
                {inquiryTypes.map((type) => (
                  <option key={type} value={type.toLowerCase()}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="field-group">
              <span className="field-label">Note</span>
              <textarea
                className="field-input min-h-44 resize-y"
                name="message"
                placeholder="Write your message here."
              />
            </label>

            <button type="submit" className="primary-button">
              Send message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
