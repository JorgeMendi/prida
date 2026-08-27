"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/frutas-asepticas", label: "Frutas Asépticas" },
  { href: "/frutas-liofilizadas", label: "Frutas Liofilizadas y Atomizadas" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative border-b border-prida-line">
      <div className="flex items-center justify-between gap-6 px-6 py-5 md:px-16">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-prida.png"
            alt="Prida"
            height={56}
            width={143}
            className="h-10 w-auto md:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-heading text-[14.5px] font-semibold transition-colors hover:text-prida-red ${
                pathname === link.href ? "text-prida-red" : "text-prida-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className="hidden shrink-0 rounded font-heading text-[15px] font-bold text-white bg-prida-red px-6 py-3.5 transition-colors hover:bg-prida-red-dark md:inline-flex"
          >
            Solicitar presupuesto
          </Link>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded text-prida-ink lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-prida-line px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-heading text-[15px] font-semibold py-2.5 ${
                pathname === link.href ? "text-prida-red" : "text-prida-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex justify-center rounded font-heading text-[15px] font-bold text-white bg-prida-red px-6 py-3.5"
          >
            Solicitar presupuesto
          </Link>
        </nav>
      )}
    </header>
  );
}
