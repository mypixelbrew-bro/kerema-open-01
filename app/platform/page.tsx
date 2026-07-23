import type { Metadata } from "next";
import Link from "next/link";
import Corners from "@/components/Corners";

export const metadata: Metadata = {
  title: "The Plan for Kerema — Thomas Opa | Kerema 2027",
  description:
    "Six priorities on paper — roads, health, education, law and order, livelihoods, and open books.",
};

const PRIORITIES: { num: string; title: string; body: string }[] = [
  { num: "01", title: "Roads & bridges", body: "Seal the highway spine and keep the feeder roads open in the wet season, so produce reaches the market and clinics reach the sick." },
  { num: "02", title: "Health & clinics", body: "Staffed aid posts with medicine on the shelf, a working ambulance boat, and a district hospital that never turns a mother away." },
  { num: "03", title: "Education", body: "School fees paid on time, teachers housed, and TVET places so young people can train for real jobs without leaving the province." },
  { num: "04", title: "Law & order", body: "Back the village courts, resource the police post, and settle land and tribal disputes fairly so families can live in peace." },
  { num: "05", title: "Livelihoods", body: "Fair prices for copra, cocoa and fish, cold storage at the wharf, and small-business grants that keep money working in Kerema." },
  { num: "06", title: "Open books", body: "Every kina of DSIP funds published for the ward to see, with quarterly acquittals — service delivery you can check for yourself." },
];

export default function PlatformPage() {
  return (
    <>
      <section className="section" style={{ paddingBottom: "calc(1.4*var(--leading))" }}>
        <span className="eyebrow">02 · The plan for Kerema</span>
        <h1 className="page-title" style={{ maxWidth: "16ch" }}>
          Six priorities, on paper
        </h1>
        <p className="lead muted maxw-56">
          A plan you can hold him to. Each priority below sets out what changes
          and how you will know it happened. Placeholder copy for the mockup —
          replace with the campaign&apos;s costed commitments.
        </p>
      </section>

      <section className="section-sm">
        <div className="cards">
          {PRIORITIES.map((p) => (
            <div className="card" key={p.num}>
              <Corners />
              <span className="card-num">{p.num}</span>
              <h3 className="card-title">{p.title}</h3>
              <p className="card-text muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <span className="eyebrow">The first 100 days</span>
        <hr className="rule" />
        <div className="plate">
          <Corners />
          <div className="table-scroll">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Commitment</th>
                  <th scope="col">How you&apos;ll know</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="rownum">01</td><td>Publish the first DSIP ledger</td><td className="muted">Every ward gets a printed and SMS summary</td></tr>
                <tr><td className="rownum">02</td><td>Open the ward feedback line</td><td className="muted">A number you can text to report a problem</td></tr>
                <tr><td className="rownum">03</td><td>Re-stock the aid posts</td><td className="muted">Medicine audit posted for all clinics</td></tr>
                <tr><td className="rownum">04</td><td>Start wet-season road repairs</td><td className="muted">Work crews visible on the feeder roads</td></tr>
              </tbody>
            </table>
          </div>
          <p className="notice">Placeholder commitments for the mockup.</p>
        </div>
      </section>

      <section className="section-sm pb-lg">
        <Link href="/join" className="btn btn-primary btn-block" style={{ maxWidth: 420 }}>
          Back the plan — join the campaign
        </Link>
      </section>
    </>
  );
}
