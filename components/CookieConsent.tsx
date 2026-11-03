"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "khushi-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(CONSENT_KEY);
    setVisible(savedConsent !== "accepted" && savedConsent !== "denied");

    const openSettings = () => setVisible(true);
    window.addEventListener("khushi:open-cookie-settings", openSettings);
    return () =>
      window.removeEventListener("khushi:open-cookie-settings", openSettings);
  }, []);

  const chooseConsent = (consent: "accepted" | "denied") => {
    window.localStorage.setItem(CONSENT_KEY, consent);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <section
      role="region"
      aria-label="Cookie consent"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-3 bottom-3 z-[120] mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-4 text-slate-800 shadow-2xl sm:inset-x-6 sm:bottom-6 sm:p-5"
    >
      <h2 id="cookie-consent-title" className="font-heading text-base font-bold sm:text-lg">
        Privacy settings
      </h2>
      <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
        Google Tag Manager loads sitewide. Your choice is saved on this device,
        but does not block tags managed through Google Tag Manager.
      </p>
      <div className="mt-2 flex gap-4 text-xs sm:text-sm">
        <Link href="/privacy/" className="text-blue-700 hover:underline">
          Privacy policy
        </Link>
        <Link href="/terms/" className="text-blue-700 hover:underline">
          Legal notice
        </Link>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => chooseConsent("denied")}
          className="min-h-10 rounded-lg bg-slate-100 px-4 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-200"
        >
          Deny
        </button>
        <button
          type="button"
          onClick={() => chooseConsent("accepted")}
          className="min-h-10 rounded-lg bg-emerald-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
        >
          Accept all
        </button>
      </div>
    </section>
  );
}
