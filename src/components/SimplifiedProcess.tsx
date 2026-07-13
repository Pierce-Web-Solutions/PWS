import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand",
    copy: "Your business, customers, systems, and goals.",
  },
  {
    number: "02",
    title: "Build",
    copy: "A practical solution designed around what you actually need.",
  },
  {
    number: "03",
    title: "Improve",
    copy: "Launch carefully, measure performance, and continue refining.",
  },
] as const;

export default function SimplifiedProcess() {
  return (
    <section id="process" className="section-pad scroll-mt-24 bg-ivory">
      <div className="container-x">
        <SectionHeading
          eyebrow="A Simple Process"
          title="From understanding to useful progress"
          copy="Three clear stages keep the work focused and the next step visible."
        />
        <ol className="simple-process mt-12">
          {steps.map((step) => (
            <li key={step.number} className="simple-process__step">
              <span className="simple-process__node" aria-hidden="true" />
              <span className="hidden font-serif text-xl italic text-foothill md:inline">
                {step.number}
              </span>
              <h3 className="font-serif text-2xl text-charcoal md:mt-4">
                {step.title}
              </h3>
              <p className="mt-3 max-w-sm text-charcoal-soft">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
