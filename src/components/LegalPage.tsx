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
        <span className="italic">Last updated {updated}</span>
      </PageHero>
      <section className="section-pad bg-ivory">
        <div className="container-x">
          <article className="legal-copy max-w-3xl">{children}</article>
        </div>
      </section>
      <Footer />
    </>
  );
}
