import type { Metadata } from "next";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";

export const metadata: Metadata = {
  title: "About Thomas Opa | Kerema 2027",
  description:
    "A son of the Gulf, with a plan on paper. Thomas Opa's story and the road to standing for Kerema.",
};

export default function AboutPage() {
  return (
    <>
      <section className="about">
        <ImageSlot className="about__media" label="Thomas Opa with community members" />
        <div>
          <span className="eyebrow">03 · About Thomas</span>
          <hr className="rule" />
          <h1 style={{ fontSize: "clamp(30px,7vw,44px)", lineHeight: 1.06, textTransform: "uppercase", margin: 0 }}>
            A son of the Gulf, with a plan on paper
          </h1>
          <p className="muted" style={{ fontSize: 16, lineHeight: 1.6, margin: "calc(1*var(--leading)) 0 0" }}>
            Born and raised along the Kerema coast, Thomas Opa has spent his
            career in service delivery — running community projects, managing
            budgets, and sitting with ward councillors to solve problems one
            village at a time.
          </p>
          <p className="muted" style={{ fontSize: 16, lineHeight: 1.6, margin: "var(--half) 0 0" }}>
            He is standing because Kerema deserves representation that shows up,
            keeps its word, and publishes the receipts. This is a placeholder
            biography for the mockup — replace it with Thomas&apos;s real story.
          </p>
          <div className="tag-row">
            <span className="tag tag-outline">Service delivery</span>
            <span className="tag tag-outline">Community projects</span>
            <span className="tag tag-outline">Accountable governance</span>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <span className="eyebrow">The road here</span>
        <hr className="rule" />
        <div>
          <div className="tl-row">
            <span className="tl-row__key">Early</span>
            <div>
              <h4 className="tl-row__title">Growing up on the coast</h4>
              <p className="muted" style={{ margin: "6px 0 0" }}>
                Raised in a Kerema village, schooled in the province, shaped by
                the long walk to the nearest aid post.
              </p>
            </div>
          </div>
          <div className="tl-row">
            <span className="tl-row__key">Career</span>
            <div>
              <h4 className="tl-row__title">Service delivery &amp; budgets</h4>
              <p className="muted" style={{ margin: "6px 0 0" }}>
                Years managing community programs — water, classrooms, aid posts
                — and learning to make a small budget stretch.
              </p>
            </div>
          </div>
          <div className="tl-row" style={{ borderBottom: "1px solid var(--color-divider)" }}>
            <span className="tl-row__key">Now</span>
            <div>
              <h4 className="tl-row__title">Standing for Kerema</h4>
              <p className="muted" style={{ margin: "6px 0 0" }}>
                Running on a plan you can hold him to, and books the whole
                electorate can read.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <figure className="quote">
          <blockquote>
            “I don&apos;t want your vote for one day. I want your trust for the
            whole term — and I&apos;ll show you the receipts.”
          </blockquote>
          <figcaption className="muted">— Thomas Opa</figcaption>
        </figure>
      </section>

      <section className="section-sm pb-lg">
        <div className="btn-row">
          <Link href="/platform" className="btn btn-primary">Read the plan</Link>
          <Link href="/events" className="btn btn-secondary">Meet Thomas on the road</Link>
        </div>
      </section>
    </>
  );
}
