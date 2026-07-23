# Thomas Opa — Kerema 2027 (Next.js)

Campaign website for Thomas Opa, built with **Next.js (App Router) + TypeScript**. It reproduces the "industry / blueprint" theme as a fully responsive, mobile-first site.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx        Root layout — fonts, <Nav>, <Footer>, <Toaster>
  globals.css       The full mobile-first theme (design tokens + components)
  page.tsx          Home
  record/page.tsx   Field record + DSIP ledger
  platform/page.tsx Six priorities + first 100 days
  about/page.tsx    Bio + timeline
  events/page.tsx   Events list with RSVP
  join/page.tsx     Volunteer / contact form
components/
  Nav.tsx           Sticky nav with mobile hamburger (client)
  Footer.tsx        Authorisation footer
  Corners.tsx       Blueprint corner ticks
  ImageSlot.tsx     Duotone photo placeholder
  JoinForm.tsx      Volunteer form (client)
  RsvpButton.tsx    Event RSVP button (client)
  Toaster.tsx       Toast host (client)
  toast.ts          toast() helper
```

## Theme

- Fonts: **Oswald** (headings) + **Inter** (body) via `next/font/google`.
- Colours, spacing and components are CSS custom properties in `globals.css`
  (`--color-accent`, `--font-heading`, `--leading`, etc.) — change them in one
  place to re-skin the whole site.
- Mobile-first: base layout is single-column; `min-width` breakpoints add
  columns. No `max-width` media queries.

## Notes / next steps

- All content is **dummy/placeholder** — swap in real photos, figures, DSIP
  ledger numbers, event dates, and contact details.
- The **volunteer form** and **RSVP** buttons show a confirmation toast only;
  wire them to a real endpoint (email/SMS/CRM) before launch.
- Replace the `ImageSlot` placeholders with `next/image` and real photography.
# kerema-open-01
# kerema-open-01
