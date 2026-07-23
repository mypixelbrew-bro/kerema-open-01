import type { Metadata } from "next";
import Link from "next/link";
import Corners from "@/components/Corners";

export const metadata: Metadata = {
  title: "Field Record — Thomas Opa | Kerema 2027",
  description:
    "The work, ward by ward — visits made, projects backed, and DSIP funds accounted for.",
};

export default function RecordPage() {
  return (
    <>
      <section className="section" style={{ paddingBottom: "calc(1.4*var(--leading))" }}>
        <span className="eyebrow">01 · Field record</span>
        <h1 className="page-title" style={{ maxWidth: "18ch" }}>
          The work, ward by ward
        </h1>
        <p className="lead muted maxw-56">
          A campaign should be judged on what it has already done. Below is the
          field record for the past year — visits made, projects backed, and
          money accounted for. Every figure here is a placeholder for the mockup;
          the real campaign swaps in ward-verified numbers.
        </p>
      </section>

      <section className="section-sm">
        <div className="plate">
          <Corners />
          <header className="plate-head">
            <span className="plate-head__main">What the work has looked like</span>
            <span className="plate-head__meta muted">Ward-verified</span>
          </header>
          <div className="table-scroll">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Measure</th>
                  <th scope="col">Figure</th>
                  <th scope="col">Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="rownum">01</td><td>Wards visited this year</td><td className="fig">64</td><td className="muted">Every ward in the electorate</td></tr>
                <tr><td className="rownum">02</td><td>Community projects backed</td><td className="fig">28</td><td className="muted">Water, classrooms, aid posts</td></tr>
                <tr><td className="rownum">03</td><td>Students on the fee scheme</td><td className="fig">1,200</td><td className="muted">From elementary to grade 12</td></tr>
                <tr><td className="rownum">04</td><td>Km of feeder road cleared</td><td className="fig">85</td><td className="muted">Coast to the highlands road</td></tr>
                <tr><td className="rownum">05</td><td>Water tanks installed</td><td className="fig">46</td><td className="muted">Schools, aid posts, markets</td></tr>
                <tr><td className="rownum">06</td><td>Aid posts re-stocked</td><td className="fig">19</td><td className="muted">Medicine on the shelf again</td></tr>
              </tbody>
            </table>
          </div>
          <p className="notice">
            Figures are placeholders for the mockup — swap in the campaign&apos;s
            verified numbers.
          </p>
        </div>
      </section>

      <section className="section">
        <span className="eyebrow">Open books · DSIP acquittals</span>
        <hr className="rule" />
        <div className="plate">
          <Corners />
          <div className="table-scroll">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Project / program</th>
                  <th scope="col">Category</th>
                  <th scope="col">Status</th>
                  <th scope="col" className="amt">Allocation (K)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Kerema–Malalaua road sealing</td><td className="muted">Infrastructure</td><td className="muted">In progress</td><td className="fig amt">—</td></tr>
                <tr><td>Rural solar electrification</td><td className="muted">Energy</td><td className="muted">Completed</td><td className="fig amt">—</td></tr>
                <tr><td>Classroom &amp; TVET wing</td><td className="muted">Education</td><td className="muted">In progress</td><td className="fig amt">—</td></tr>
                <tr><td>Ambulance boat &amp; fuel</td><td className="muted">Health</td><td className="muted">Delivered</td><td className="fig amt">—</td></tr>
                <tr><td>SME &amp; market support fund</td><td className="muted">Livelihoods</td><td className="muted">Planned</td><td className="fig amt">—</td></tr>
              </tbody>
            </table>
          </div>
          <p className="notice">
            Amounts to be populated from audited acquittals and published
            quarterly, so any voter can check where the money went.
          </p>
        </div>
      </section>

      <section className="section-sm pb-lg">
        <div className="btn-row">
          <Link href="/platform" className="btn btn-primary">See the plan for the next term</Link>
          <Link href="/join" className="btn btn-secondary">Join the campaign</Link>
        </div>
      </section>
    </>
  );
}
