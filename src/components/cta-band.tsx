import Link from "next/link";
import type { ReactNode } from "react";

export function CtaBand({
  heading,
  subheading,
  children,
}: {
  heading: string;
  subheading?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-start justify-between gap-6 bg-prida-red px-6 py-12 md:flex-row md:items-center md:px-16 md:py-[72px]">
      <div className="flex max-w-xl flex-col gap-2">
        <h3 className="text-2xl font-extrabold text-white md:text-[26px]">
          {heading}
        </h3>
        {subheading && (
          <p className="text-[15.5px] text-[#FFE1E2]">{subheading}</p>
        )}
      </div>
      <div className="flex shrink-0 flex-wrap gap-3.5">{children}</div>
    </div>
  );
}

export function CtaButtonWhite({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 whitespace-nowrap rounded bg-white px-6 py-3.5 font-heading text-[15px] font-bold text-prida-red"
    >
      {children}
    </Link>
  );
}

export function CtaButtonOutline({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 whitespace-nowrap rounded border-[1.5px] border-white px-6 py-3 font-heading text-[15px] font-bold text-white"
    >
      {children}
    </Link>
  );
}
