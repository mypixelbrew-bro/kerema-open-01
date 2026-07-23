"use client";

import { MouseEvent } from "react";
import { toast } from "./toast";

export default function RsvpButton() {
  function onClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    toast("RSVP received — see you there.");
  }
  return (
    <button type="button" className="btn btn-secondary" onClick={onClick}>
      RSVP
    </button>
  );
}
