import PageHero from "./PageHero";
import Footer from "./Footer";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} breadcrumbs={[{ label: title }]}>
        <span className="italic">
          Draft for review · Last updated {updated}
        </span>
      </PageHero>
      <section className="section-pad bg-ivory">
        <div className="container-x">
          <div className="mb-10 border-l-2 border-brass bg-ivory-deep p-5 text-sm text-charcoal-soft">
            <strong>Review notice:</strong> This draft is provided as a clear
            starting point and must be reviewed by a qualified attorney before
            production use.
          </div>
          <article className="legal-copy max-w-3xl">{children}</article>
        </div>
      </section>
      <Footer />
    </>
  );
}
