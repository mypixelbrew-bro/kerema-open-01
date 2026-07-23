import Link from "next/link";
import Corners from "@/components/Corners";
import ImageSlot from "@/components/ImageSlot";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div>
          <span className="hero-tagline">
            Kerema Open <span className="sep">/</span> Gulf Province{" "}
            <span className="sep">/</span> 2027
          </span>
          <h1 className="hero-title">
            <span style={{ display: "block" }}>A stronger</span>
            <span style={{ display: "block" }}>Kerema —</span>
            <span style={{ display: "block" }} className="accent">
              built at home.
            </span>
          </h1>
          <p className="lead muted maxw-52">
            Roads that reach the villages. Clinics that stay open. School fees
            paid on time. Thomas Opa is standing for the people of Kerema — with
            a plan you can hold him to.
          </p>
          <div className="btn-row" style={{ marginTop: "calc(1.4*var(--leading))" }}>
            <Link href="/join" className="btn btn-primary">
              Pledge your support
            </Link>
            <Link href="/platform" className="btn btn-secondary">
              Read the plan
            </Link>
          </div>
          <div className="ballot-line">
            <span style={{ display: "inline-flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: 13 }}>Ballot</span>
              <span className="num">07</span>
            </span>
            <span className="divider" />
            <span>Endorsed by the Kerema Community Alliance</span>
          </div>
        </div>

        <ImageSlot className="hero__media" label="Portrait of Thomas Opa" />
      </section>

      {/* RECORD SNAPSHOT */}
      <section className="section">
        <span className="eyebrow">01 · Field record</span>
        <hr className="rule" />
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
                <tr>
                  <td className="rownum">01</td>
                  <td>Wards visited this year</td>
                  <td className="fig">64</td>
                  <td className="muted">Every ward in the electorate</td>
                </tr>
                <tr>
                  <td className="rownum">02</td>
                  <td>Community projects backed</td>
                  <td className="fig">28</td>
                  <td className="muted">Water, classrooms, aid posts</td>
                </tr>
                <tr>
                  <td className="rownum">03</td>
                  <td>Students on the fee scheme</td>
                  <td className="fig">1,200</td>
                  <td className="muted">From elementary to grade 12</td>
                </tr>
                <tr>
                  <td className="rownum">04</td>
                  <td>Km of feeder road cleared</td>
                  <td className="fig">85</td>
                  <td className="muted">Coast to the highlands road</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="notice">
            Figures are placeholders for the mockup — swap in the campaign&apos;s
            verified numbers. <Link href="/record">See the full record →</Link>
          </p>
        </div>
      </section>

      {/* PLATFORM TEASER */}
      <section className="section">
        <span className="eyebrow">02 · The plan for Kerema</span>
        <hr className="rule" />
        <div className="cards">
          <div className="card">
            <Corners />
            <span className="card-num">01</span>
            <h3 className="card-title">Roads &amp; bridges</h3>
            <p className="card-text muted">
              Seal the highway spine and keep the feeder roads open in the wet
              season, so produce reaches the market and clinics reach the sick.
            </p>
          </div>
          <div className="card">
            <Corners />
            <span className="card-num">02</span>
            <h3 className="card-title">Health &amp; clinics</h3>
            <p className="card-text muted">
              Staffed aid posts with medicine on the shelf, a working ambulance
              boat, and a district hospital that never turns a mother away.
            </p>
          </div>
          <div className="card">
            <Corners />
            <span className="card-num">03</span>
            <h3 className="card-title">Education</h3>
            <p className="card-text muted">
              School fees paid on time, teachers housed, and TVET places so young
              people can train for real jobs without leaving the province.
            </p>
          </div>
        </div>
        <div style={{ marginTop: "calc(1.4*var(--leading))" }}>
          <Link href="/platform" className="btn btn-secondary">
            See all six priorities
          </Link>
        </div>
      </section>

      {/* ENDORSEMENT */}
      <section className="section">
        <figure className="quote">
          <blockquote>
            “He came to our ward in the wet season, when the road was mud, and he
            came back with the culvert he promised. That is the man we are voting
            for.”
          </blockquote>
          <figcaption className="muted">
            — Mary Aivara, ward councillor, Kerema Bay
          </figcaption>
        </figure>
      </section>

      {/* CTA STRIP */}
      <section className="section-sm pb-lg">
        <div className="cta-strip">
          <Corners />
          <div>
            <h2 className="cta-title">Kerema wins when we all pitch in</h2>
            <p className="muted maxw-52" style={{ margin: "10px 0 0" }}>
              Volunteer, host Thomas in your ward, or just get campaign updates.
            </p>
          </div>
          <Link href="/join" className="btn btn-primary">
            Join the campaign
          </Link>
        </div>
      </section>
    </>
  );
}
