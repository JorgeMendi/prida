import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand, CtaButtonWhite } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Frutas Liofilizadas y Atomizadas — Prida",
  description:
    "Fruta deshidratada con biotecnología de liofilización y atomización: sabor, color y valor nutricional casi intactos, con una fracción del peso de la fruta fresca.",
};

const PROCESS_STEPS = [
  {
    title: "Selección",
    description: "Se selecciona la fruta y se prepara en la forma deseada.",
  },
  {
    title: "Congelación",
    description: "Se congela en cámara de frío antes del secado.",
  },
  {
    title: "Sublimación",
    description: "El agua pasa de hielo a vapor directamente, eliminando gran parte de la humedad sin calor.",
  },
  {
    title: "Control de calidad",
    description: "Envasado hermético que preserva propiedades y frescura del producto.",
  },
];

const BENEFITS = [
  {
    title: "100% natural",
    description: "Sin aditivos: solo fruta, sabor y color originales.",
    icon: <path d="M12 3c-3 3-5 6-5 9a5 5 0 0 0 10 0c0-3-2-6-5-9z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />,
  },
  {
    title: "Mayor vida útil",
    description: "Menor humedad, mínimo desperdicio, sin necesidad de refrigeración.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Sabor y color intactos",
    description: "Textura crocante, colores vibrantes, perfil sensorial fiel a la fruta.",
    icon: <path d="M4 12h4l2-6 4 12 2-6h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Logística liviana",
    description: "Mucho menos peso que la fruta fresca o congelada: menos costo por kilo transportado.",
    icon: (
      <>
        <path d="M3 16l4-9 4 9M4.5 12.5h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 16V7h3.5a3 3 0 0 1 0 6H13" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M13 12h3.5" stroke="currentColor" strokeWidth="1.7" />
      </>
    ),
  },
];

const APPLICATIONS = [
  "Bebidas funcionales",
  "Lácteos y yogures",
  "Helados y postres",
  "Snacks y cereales",
  "Panificación",
];

export default function FrutasLiofilizadasPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        {/* HERO */}
        <div className="flex flex-col items-center gap-12 bg-prida-paper-2 px-6 py-16 md:flex-row md:gap-16 md:px-16 md:py-20">
          <div className="flex flex-1 flex-col gap-6">
            <div className="eyebrow text-prida-orange">Línea de producto</div>
            <h1 className="text-[36px] font-extrabold leading-[1.1] text-prida-ink md:text-[46px]">
              Frutas Liofilizadas y Atomizadas
            </h1>
            <p className="max-w-xl text-[17.5px] leading-relaxed text-prida-ink-soft">
              Fruta deshidratada con biotecnología de liofilización y
              atomización: conserva sabor, color y valor nutricional casi
              intactos, con una fracción del peso y una vida útil muy superior
              a la fruta fresca.
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
            <div className="aspect-square w-full overflow-hidden rounded-xl shadow-[0_18px_40px_-18px_rgba(232,134,42,0.32)]">
              <Image
                src="/images/photo-liofilizadas-hero.jpg"
                alt="Fresas liofilizadas, textura y color intactos"
                width={800}
                height={800}
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
              La forma más liviana de llevar la fruta real a tu producto
            </h2>
          </div>
          <div className="flex flex-1 flex-col gap-4.5">
            <p className="text-base leading-relaxed text-prida-ink-soft">
              La liofilización congela la fruta y luego elimina el agua por
              sublimación, sin pasar por calor directo — por eso el resultado
              mantiene el sabor, el color y buena parte del valor nutricional de
              la fruta original, con una textura crocante y muy poco peso. La
              atomización, por su parte, seca purés y líquidos hasta
              convertirlos en polvo fino y estable, fácil de dosificar en línea.
            </p>
            <p className="text-base leading-relaxed text-prida-ink-soft">
              El resultado en ambos casos es un insumo 100% natural, liviano de
              transportar y que no necesita refrigeración — pensado para
              incorporarse directo a bebidas funcionales, lácteos, helados o
              snacks.
            </p>
          </div>
        </div>

        {/* PROCESO */}
        <div className="flex flex-col gap-12 bg-prida-paper-2 px-6 py-16 md:px-16 md:py-20">
          <h2 className="text-2xl font-extrabold text-prida-ink md:text-[28px]">
            Cómo funciona la liofilización
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-2.5">
                <div className="font-heading text-sm font-extrabold text-prida-orange">
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
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-prida-orange">
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

        {/* FORMATOS — pendiente de confirmar con Biovks, tal como en el mockup original */}
        <div className="flex flex-col gap-8 bg-prida-paper-2 px-6 py-16 md:px-16 md:py-20">
          <h2 className="text-2xl font-extrabold text-prida-ink md:text-[28px]">
            Formatos disponibles
          </h2>
          <div className="flex max-w-3xl flex-col gap-3.5 rounded-md border border-dashed border-prida-orange bg-prida-orange-soft p-8">
            <p className="text-[15px] leading-relaxed text-prida-ink">
              <strong>
                [FORMATOS, PRESENTACIONES Y VOLÚMENES MÍNIMOS — a confirmar con
                Biovks]
              </strong>
              <br />
              A diferencia de la línea aséptica, todavía no tenemos definidos
              los formatos comerciales exactos (polvo/entero, tamaños de
              envase, pedido mínimo) para esta línea. Esto queda pendiente de
              completar con el partner antes de publicar la web.
            </p>
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
            <h4 className="text-[22px] font-extrabold text-prida-ink">Biovks — Perú</h4>
            <p className="text-[15px] leading-relaxed text-prida-ink-soft">
              Corporación peruana especializada en biotecnología de
              liofilización y atomización, con plantas propias y un equipo con
              más de 30 años de experiencia en el sector.
            </p>
          </div>
        </div>

        {/* CTA */}
        <CtaBand heading="¿Quieres probar fruta liofilizada en tu formulación?">
          <CtaButtonWhite href="/contacto">Solicitar muestra</CtaButtonWhite>
        </CtaBand>
      </main>

      <SiteFooter />
    </>
  );
}
