import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import { INTAKE_COOKIE_NAME, intakeSessionIsValid } from "@/lib/intake-access";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Project Intake Received",
  referrer: "no-referrer",
  robots: { index: false, follow: false, nocache: true },
};

export default async function IntakeReceivedPage() {
  const cookieStore = await cookies();
  if (!intakeSessionIsValid(cookieStore.get(INTAKE_COOKIE_NAME)?.value))
    notFound();
  return (
    <>
      <section className="section-pad bg-ivory-deep">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Private / Project Intake</p>
          <h1 className="heading-serif mt-6 text-4xl sm:text-5xl">
            Project intake received.
          </h1>
          <p className="mt-6 text-lg leading-8 text-charcoal-soft">
            Thank you for sharing the details. I’ll review them personally and
            follow up about the right next step. A confirmation email should
            arrive shortly.
          </p>
          <p className="mt-4 text-charcoal-soft">
            Need to correct or add something? Reply to the confirmation email.
          </p>
          <Link href="/" className="btn-outline mt-9">
            Return home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
