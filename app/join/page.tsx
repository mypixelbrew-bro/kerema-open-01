import type { Metadata } from "next";
import Corners from "@/components/Corners";
import JoinForm from "@/components/JoinForm";

export const metadata: Metadata = {
  title: "Join the Campaign — Thomas Opa | Kerema 2027",
  description:
    "Volunteer, host Thomas in your ward, or get campaign updates. Kerema wins when we all pitch in.",
};

export default function JoinPage() {
  return (
    <section className="section">
      <div className="join">
        <Corners />
        <div>
          <span className="eyebrow">05 · Join the campaign</span>
          <h1 style={{ fontSize: "clamp(28px,6.5vw,40px)", lineHeight: 1.06, textTransform: "uppercase", margin: 0 }}>
            Kerema wins when we all pitch in
          </h1>
          <p className="muted" style={{ fontSize: 16, lineHeight: 1.6, margin: "calc(1*var(--leading)) 0 0" }}>
            Leave your details to volunteer, host Thomas in your ward, or just
            get campaign updates. We will only contact you about the campaign.
          </p>
          <div className="contact-list">
            <div className="row"><span className="label">Office</span> Hohol St, Kerema, Gulf Province</div>
            <div className="row"><span className="label">Phone</span> <a href="tel:+67570000000">+675 7000 0000</a></div>
            <div className="row"><span className="label">Email</span> <a href="mailto:team@thomasopa.pg">team@thomasopa.pg</a></div>
          </div>
          <div className="social-row">
            <a href="#" className="btn btn-secondary btn-icon" aria-label="Facebook">f</a>
            <a href="#" className="btn btn-secondary btn-icon" aria-label="WhatsApp">w</a>
            <a href="#" className="btn btn-secondary btn-icon" aria-label="YouTube">▶</a>
          </div>
        </div>
        <JoinForm />
      </div>
    </section>
  );
}
