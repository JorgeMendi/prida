import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand, CtaButtonWhite } from "@/components/cta-band";

const PRODUCT_LINES = [
  {
    href: "/frutas-asepticas",
    title: "Frutas Asépticas",
    accent: "bg-prida-navy",
    description:
      "Pulpa de fruta con esterilidad comercial validada, envasada en bag-in-box de 20 kg o tambores de 220 kg. Se conserva hasta 18 meses a temperatura ambiente, sin refrigeración — ideal para plantas que necesitan stock estable y logística simple.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M12 3s7 7.6 7 12.2A7 7 0 1 1 5 15.2C5 10.6 12 3 12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/frutas-liofilizadas",
    title: "Frutas Liofilizadas y Atomizadas",
    accent: "bg-prida-orange",
    description:
      "Fruta deshidratada con biotecnología de liofilización y atomización: se elimina la humedad conservando sabor, color y valor nutricional casi intactos. Menor peso, mayor vida útil y una logística mucho más liviana que la fruta fresca o congelada.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M12 2v4M12 18v4M4 12H2M22 12h-2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

const STEPS = [
  {
    title: "Origen seleccionado",
    description:
      "Trabajamos con partners especializados en Colombia y Perú, con contrato de exclusividad y trayectoria exportadora comprobada.",
  },
  {
    title: "Proceso con estándar industrial",
    description:
      "Cada línea se procesa bajo protocolos de esterilidad, control microbiológico y trazabilidad por lote, pensados para compradores industriales exigentes.",
  },
  {
    title: "Listo para tu planta",
    description:
      "Formatos y volúmenes pensados para producción a gran escala: menos manipulación, menos mermas y mejor previsibilidad de stock.",
  },
];

const PARTNERS = [
  {
    label: "Partner · Frutas Asépticas",
    name: "Alimentos SAS — Colombia",
    description:
      "Más de dos décadas de trayectoria exportando pulpa de fruta a mercados exigentes en América y Europa, con procesos validados de esterilidad comercial y control de calidad por lote.",
  },
  {
    label: "Partner · Frutas Liofilizadas y Atomizadas",
    name: "Biovks — Perú",
    description:
      "Corporación peruana especializada en biotecnología de liofilización y atomización, con plantas propias y un equipo con más de 30 años de experiencia en el sector.",
  },
];

const INDUSTRIES = [
  {
    label: "Jugos",
    icon: (
      <>
        <path d="M8 3h8l-1 4H9L8 3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M7 7h10l1.2 12.2A2 2 0 0 1 16.2 21H7.8a2 2 0 0 1-2-1.8L7 7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Cervecería",
    icon: (
      <>
        <path d="M6 8h12v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M6 8l1-4h10l1 4M18 11h2v4h-2" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Compotas",
    icon: (
      <>
        <path d="M7 10.5C7 7.5 9.2 5 12 5s5 2.5 5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <rect x="5.5" y="10.5" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.7" />
      </>
    ),
  },
  {
    label: "Helados",
    icon: (
      <>
        <path d="M9 3h6l1.4 8.4a4.6 4.6 0 0 1-9.2 0L8.6 3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M10.5 14v6.5M13.5 14v6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        {/* HERO */}
        <div className="flex flex-col items-center gap-12 bg-prida-paper-2 px-6 py-16 md:flex-row md:gap-16 md:px-16 md:py-24">
          <div className="flex flex-1 flex-col gap-6">
            <div className="eyebrow text-prida-navy">Prida · Fruta para industria</div>
            <h1 className="text-[38px] font-extrabold leading-[1.08] text-prida-ink md:text-[52px]">
              Fruta procesada con estándar industrial, lista para tu línea de
              producción
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-prida-ink-soft">
              Prida suministra pulpa de fruta aséptica y fruta liofilizada y
              atomizada a la industria europea de jugos, cervecería, compotas y
              helados — con la consistencia, el volumen y la trazabilidad que
              exige la producción a gran escala.
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded bg-prida-red px-6.5 py-3.5 font-heading text-[15px] font-bold text-white transition-colors hover:bg-prida-red-dark"
              >
                Solicitar ficha técnica
              </Link>
              <a
                href="#lineas"
                className="inline-flex items-center gap-2 rounded border-[1.5px] border-prida-navy px-6 py-[13px] font-heading text-[15px] font-bold text-prida-navy transition-colors hover:bg-prida-navy hover:text-white"
              >
                Ver líneas de producto
              </a>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="aspect-[1/0.92] w-full max-w-[460px] overflow-hidden rounded-xl shadow-[0_18px_40px_-18px_rgba(38,35,99,0.28)]">
              <Image
                src="/images/photo-home-hero.jpg"
                alt="Maracuyá fresco, materia prima de la pulpa aséptica"
                width={920}
                height={846}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="flex items-center justify-center gap-3.5 border-b border-prida-line px-6 py-7 text-center md:px-16">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 text-prida-navy">
            <path d="M12 3l7 3v6c0 5-3.2 8.4-7 9.5C8.2 20.4 5 17 5 12V6l7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          </svg>
          <p className="text-[15px] text-prida-ink-soft">
            Producto elaborado junto a partners especializados en Colombia y
            Perú, con contrato de exclusividad para Prida.
          </p>
        </div>

        {/* PRODUCT LINES */}
        <div id="lineas" className="flex flex-col gap-11 px-6 py-20 md:px-16 md:py-24">
          <div className="flex max-w-2xl flex-col gap-3">
            <div className="eyebrow text-prida-red">Nuestras líneas</div>
            <h2 className="text-[28px] font-extrabold text-prida-ink md:text-[34px]">
              Dos formas de llevar fruta a tu proceso industrial
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {PRODUCT_LINES.map((line) => (
              <div key={line.href} className="flex flex-col gap-5 rounded-md bg-prida-paper-2 p-8 md:p-10">
                <div className={`flex h-13 w-13 items-center justify-center rounded-full ${line.accent}`}>
                  {line.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-prida-ink">{line.title}</h3>
                <p className="text-[15.5px] leading-relaxed text-prida-ink-soft">
                  {line.description}
                </p>
                <Link
                  href={line.href}
                  className="mt-1.5 flex items-center gap-1.5 font-heading text-[14.5px] font-bold text-prida-navy"
                >
                  Conocer la línea
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* HOW WE WORK */}
        <div className="flex flex-col gap-14 border-y border-prida-line bg-prida-paper-2 px-6 py-20 md:px-16 md:py-24">
          <div className="flex max-w-2xl flex-col gap-3">
            <div className="eyebrow text-prida-navy">Cómo trabajamos</div>
            <h2 className="text-[28px] font-extrabold text-prida-ink md:text-[34px]">
              De origen certificado a tu línea de producción
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-4">
                <div className="font-heading text-[15px] font-extrabold text-prida-red">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="text-[19px] font-bold text-prida-ink">{step.title}</h4>
                <p className="text-[14.5px] leading-relaxed text-prida-ink-soft">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PARTNERS BACKING */}
        <div className="flex flex-col gap-12 px-6 py-20 md:px-16 md:py-24">
          <div className="flex max-w-2xl flex-col gap-3">
            <div className="eyebrow text-prida-red">Respaldo</div>
            <h2 className="text-[28px] font-extrabold text-prida-ink md:text-[34px]">
              El producto es el protagonista — con partners serios detrás
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col gap-3.5 rounded-md border border-prida-line p-8"
              >
                <div className="font-heading text-[13px] font-bold uppercase tracking-wider text-prida-ink-soft">
                  {partner.label}
                </div>
                <h4 className="text-[21px] font-extrabold text-prida-ink">{partner.name}</h4>
                <p className="text-[15px] leading-relaxed text-prida-ink-soft">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* INDUSTRIES */}
        <div className="flex flex-col gap-10 bg-prida-paper-2 px-6 py-16 md:px-16 md:py-20">
          <h3 className="text-center text-[22px] font-extrabold text-prida-ink">
            Pensado para grandes industrias
          </h3>
          <div className="flex flex-wrap justify-center gap-10 md:gap-14">
            {INDUSTRIES.map((industry) => (
              <div key={industry.label} className="flex flex-col items-center gap-2.5">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-prida-navy">
                  {industry.icon}
                </svg>
                <span className="text-sm font-semibold text-prida-ink">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAIR CTA */}
        <CtaBand
          heading="Nos vemos en Fruit Attraction 2026"
          subheading="6, 7 y 8 de octubre — visita nuestro stand y llévate una muestra."
        >
          <CtaButtonWhite href="/contacto">Coordinar una reunión</CtaButtonWhite>
        </CtaBand>
      </main>

      <SiteFooter variant="full" />
    </>
  );
}
