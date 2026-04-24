type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function PageHeader({ eyebrow, title, description, centered = false }: PageHeaderProps) {
  return (
    <section className="site-shell px-6 pb-12 pt-28 md:px-10 md:pb-14 md:pt-32 lg:px-12">
      <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        <p className={`section-kicker ${centered ? "justify-center" : ""}`}>{eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl leading-[1.02] tracking-[-0.04em] text-[var(--text-strong)] sm:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-[var(--text-soft)]">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
