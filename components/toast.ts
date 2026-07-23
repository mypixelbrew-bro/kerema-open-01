export const TOAST_EVENT = "app-toast";

/** Fire a toast message from anywhere on the client. */
export function toast(message: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(TOAST_EVENT, { detail: message }));
  }
}
