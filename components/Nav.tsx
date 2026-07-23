"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS: [string, string][] = [
  ["/record", "Record"],
  ["/platform", "Platform"],
  ["/about", "About"],
  ["/events", "Events"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <Link className="nav-brand" href="/" onClick={close}>
        <span className="brand-mark">TO</span> THOMAS OPA
      </Link>
      <button
        className="nav__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        ☰
      </button>
      <div className={`nav__links${open ? " open" : ""}`}>
        {LINKS.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? "active" : undefined}
            onClick={close}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/join"
          className={`btn btn-primary${pathname === "/join" ? " active" : ""}`}
          onClick={close}
        >
          Join the campaign
        </Link>
      </div>
    </nav>
  );
}
