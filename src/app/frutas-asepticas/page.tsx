import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand, CtaButtonWhite } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Frutas Asépticas — Prida",
  description:
    "Pulpa de fruta con esterilidad comercial validada, envasada en bag-in-box de 20 kg o tambores de 220 kg. Hasta 18 meses sin refrigerar.",
};

const PROCESS_STEPS = [
  {
    title: "Selección y limpieza",
    description: "Se recibe y selecciona la fruta, y se limpia y desinfecta antes de procesar.",
  },
  {
    title: "Desintegración y refinado",
    description: "Se obtiene una pulpa homogénea, sin cáscaras ni semillas.",
  },
  {
    title: "Pasteurización",
    description: "Tratamiento térmico controlado que asegura seguridad microbiológica.",
  },
  {
    title: "Envasado aséptico",
    description: "Se envasa en condiciones estériles, lista para transportar y almacenar a temperatura ambiente.",
  },
];

const BENEFITS = [
  {
    title: "Esterilidad comercial validada",
    description: "Producto seguro y estable sin necesidad de conservantes.",
    icon: (
      <>
        <path d="M12 3l7 3v6c0 5-3.2 8.4-7 9.5C8.2 20.4 5 17 5 12V6l7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Hasta 18 meses sin refrigerar",
    description: "Vida útil larga a temperatura ambiente, sin costo de cadena de frío.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Formatos industriales",
    description: "Bag-in-box de 20 kg o tambores de 220 kg, pensados para planta.",
    icon: (
      <>
        <rect x="4" y="7" width="16" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 11h16M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Trazabilidad por lote",
    description: "Cada lote es identificable de origen a entrega.",
    icon: <path d="M4 12h4l2-6 4 12 2-6h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
  },
];

const FORMATS = [
  { value: "20 kg", label: "Bag-in-Box, válvula de un solo uso" },
  { value: "220 kg", label: "Tambor metálico aséptico" },
  { value: "18 meses", label: "Vida útil a temperatura ambiente" },
];

const APPLICATIONS = [
  "Jugos y néctares",
  "Cervezas afrutadas",
  "Compotas y purés",
  "Helados y postres",
  "Bebidas funcionales",
];

export default function FrutasAsepticasPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        {/* HERO */}
        <div className="flex flex-col items-center gap-12 bg-prida-paper-2 px-6 py-16 md:flex-row md:gap-16 md:px-16 md:py-20">
          <div className="flex flex-1 flex-col gap-6">
            <div className="eyebrow text-prida-navy">Línea de producto</div>
            <h1 className="text-[36px] font-extrabold leading-[1.1] text-prida-ink md:text-[46px]">
              Frutas Asépticas
            </h1>
            <p className="max-w-xl text-[17.5px] leading-relaxed text-prida-ink-soft">
              Pulpa de fruta con esterilidad comercial validada, pensada para
              plantas industriales que necesitan stock estable, larga vida útil
              y cero refrigeración.
            </p>
            <div className="mt-2">
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 rounded bg-prida-red px-6.5 py-3.5 font-heading text-[15px] font-bold text-white transition-colors hover:bg-prida-red-dark"
              >
                Solicitar ficha técnica
              </a>
            </div>
          </div>
          <div className="flex w-full max-w-[400px] shrink-0 items-center justify-center">
            <div className="aspect-[1/1.15] w-full overflow-hidden rounded-xl shadow-[0_18px_40px_-18px_rgba(38,35,99,0.28)]">
              <Image
                src="/images/photo-asepticas-hero.jpg"
                alt="Papaya fresca, una de las frutas de la línea de pulpa aséptica"
                width={800}
                height={920}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* QUE ES */}
        <div className="flex flex-col gap-10 px-6 py-16 md:flex-row md:gap-16 md:px-16 md:py-24">
          <div className="flex flex-1 flex-col gap-4">
            <div className="eyebrow text-prida-red">Qué es</div>
            <h2 className="text-[26px] font-extrabold text-prida-ink md:text-[30px]">
              Fruta lista para procesar, sin los problemas de la fruta fresca
            </h2>
          </div>
          <div className="flex flex-1 flex-col gap-4.5">
            <p className="text-base leading-relaxed text-prida-ink-soft">
              Trabajar con fruta fresca en planta implica selección, limpieza,
              manejo de residuos y pérdidas por pudrición. La pulpa aséptica de
              Prida resuelve eso: es fruta ya seleccionada, refinada y
              esterilizada, envasada en un empaque que preserva su condición
              comercial sin necesidad de frío ni conservantes agregados.
            </p>
            <p className="text-base leading-relaxed text-prida-ink-soft">
              El resultado es un insumo consistente, lote a lote, que se
              incorpora directo a tu línea de producción — ya sea para dar
              cuerpo y sabor a un jugo, aportar fruta real a una compota o
              perfilar una cerveza afrutada.
            </p>
          </div>
        </div>

        {/* PROCESO */}
        <div className="flex flex-col gap-12 bg-prida-paper-2 px-6 py-16 md:px-16 md:py-20">
          <h2 className="text-2xl font-extrabold text-prida-ink md:text-[28px]">
            Cómo se elabora
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-2.5">
                <div className="font-heading text-sm font-extrabold text-prida-red">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="text-[16.5px] font-bold text-prida-ink">{step.title}</h4>
                <p className="text-sm leading-relaxed text-prida-ink-soft">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className="flex flex-col gap-11 px-6 py-16 md:px-16 md:py-24">
          <h2 className="text-2xl font-extrabold text-prida-ink md:text-[28px]">
            Por qué elegirla
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="flex flex-col gap-3.5">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-prida-navy">
                  {benefit.icon}
                </svg>
                <h4 className="text-base font-bold text-prida-ink">{benefit.title}</h4>
                <p className="text-sm leading-relaxed text-prida-ink-soft">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FORMATOS */}
        <div className="flex flex-col gap-11 bg-prida-paper-2 px-6 py-16 md:px-16 md:py-20">
          <h2 className="text-2xl font-extrabold text-prida-ink md:text-[28px]">
            Formatos disponibles
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {FORMATS.map((format) => (
              <div key={format.value} className="flex flex-col gap-2 rounded-md bg-white p-7">
                <div className="font-heading text-[26px] font-extrabold text-prida-navy">
                  {format.value}
                </div>
                <div className="text-[13.5px] text-prida-ink-soft">{format.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* APLICACIONES */}
        <div className="flex flex-col gap-8 px-6 py-16 md:px-16 md:py-24">
          <h2 className="text-2xl font-extrabold text-prida-ink md:text-[28px]">
            Aplicaciones industriales
          </h2>
          <div className="flex flex-wrap gap-3.5">
            {APPLICATIONS.map((app) => (
              <span
                key={app}
                className="rounded-full bg-prida-paper-2 px-5 py-2.5 text-[14.5px] font-semibold text-prida-ink"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* RESPALDO */}
        <div className="px-6 py-8 md:px-16 md:py-16">
          <div className="flex max-w-3xl flex-col gap-3.5 rounded-md border border-prida-line p-9">
            <div className="font-heading text-[13px] font-bold uppercase tracking-wider text-prida-ink-soft">
              Elaborado junto a
            </div>
            <h4 className="text-[22px] font-extrabold text-prida-ink">
              Alimentos SAS — Colombia
            </h4>
            <p className="text-[15px] leading-relaxed text-prida-ink-soft">
              Partner de Prida con más de dos décadas de trayectoria exportando
              pulpa de fruta a mercados exigentes en América y Europa, con
              procesos validados de esterilidad comercial y control de calidad
              por lote.
            </p>
          </div>
        </div>

        {/* CTA */}
        <CtaBand heading="¿Necesitas pulpa aséptica para tu próxima producción?">
          <CtaButtonWhite href="/contacto">Solicitar muestra</CtaButtonWhite>
        </CtaBand>
      </main>

      <SiteFooter />
    </>
  );
}
