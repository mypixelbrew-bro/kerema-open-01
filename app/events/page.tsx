import type { Metadata } from "next";
import Link from "next/link";
import Corners from "@/components/Corners";
import RsvpButton from "@/components/RsvpButton";

export const metadata: Metadata = {
  title: "Events — On the Road with Thomas Opa | Kerema 2027",
  description:
    "Rallies, listening tours and forums across the Kerema electorate. RSVP to meet Thomas in your ward.",
};

const EVENTS: { date: string; title: string; where: string }[] = [
  { date: "Aug 09", title: "Kerema town rally", where: "Main market ground · 2:00 pm" },
  { date: "Aug 17", title: "Ihu ward listening tour", where: "Ihu station · community hall · 10:00 am" },
  { date: "Aug 30", title: "Youth & women's forum", where: "Malalaua · 1:00 pm" },
  { date: "Sep 06", title: "Coastal wards boat tour", where: "Kerema Bay wharf · 8:00 am" },
  { date: "Sep 14", title: "Highlands road community meet", where: "Junction market · 11:00 am" },
];

export default function EventsPage() {
  return (
    <>
      <section className="section" style={{ paddingBottom: "calc(1.2*var(--leading))" }}>
        <span className="eyebrow">04 · On the road</span>
        <h1 className="page-title" style={{ maxWidth: "16ch" }}>
          Meet Thomas in your ward
        </h1>
        <p className="lead muted maxw-56">
          Rallies, listening tours and forums across the electorate. Come with
          your questions. RSVP so we know to expect you. Dates below are
          placeholders for the mockup.
        </p>
      </section>

      <section className="section-sm">
        <div>
          {EVENTS.map((e) => (
            <div className="event" key={e.date + e.title}>
              <span className="event__date">{e.date}</span>
              <div>
                <h4 className="event__title">{e.title}</h4>
                <p className="muted" style={{ margin: "4px 0 0" }}>{e.where}</p>
              </div>
              <RsvpButton />
            </div>
          ))}
        </div>
      </section>

      <section className="section-sm pb-lg">
        <div className="cta-strip">
          <Corners />
          <div>
            <h2 className="cta-title">Want Thomas in your ward?</h2>
            <p className="muted maxw-52" style={{ margin: "10px 0 0" }}>
              Invite the campaign to hold a listening session where you live.
            </p>
          </div>
          <Link href="/join" className="btn btn-primary">Request a visit</Link>
        </div>
      </section>
    </>
  );
}
