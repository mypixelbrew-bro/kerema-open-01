"use client";

import { FormEvent } from "react";
import { toast } from "./toast";

export default function JoinForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
    toast("Thank you — we'll be in touch.");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="v-name">Full name</label>
        <input className="input" id="v-name" type="text" placeholder="Your name" required />
      </div>
      <div className="field">
        <label htmlFor="v-ward">Your ward / village</label>
        <input className="input" id="v-ward" type="text" placeholder="e.g. Kerema Bay" />
      </div>
      <div className="field">
        <label htmlFor="v-phone">Phone or email</label>
        <input className="input" id="v-phone" type="text" placeholder="How we reach you" required />
      </div>
      <label className="radio">
        <input type="checkbox" />
        <span className="dot" />
        <span>I&apos;d like to volunteer, not just get updates</span>
      </label>
      <button type="submit" className="btn btn-primary btn-block" style={{ fontSize: 15, marginTop: 6 }}>
        Count me in
      </button>
      <p className="muted" style={{ margin: 0, fontSize: 12 }}>
        Opt-in only. Your details are used for campaign contact and are never sold.
      </p>
    </form>
  );
}
