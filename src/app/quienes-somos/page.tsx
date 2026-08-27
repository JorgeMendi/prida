import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand, CtaButtonWhite, CtaButtonOutline } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Quiénes somos — Prida",
  description:
    "Prida Europa es una empresa familiar con más de 5 años en el mercado, dedicada a acercar fruta procesada de calidad a la industria europea.",
};

const STATS = [
  { value: "+5 años", label: "en el mercado" },
  { value: "2", label: "líneas de producto — foco total" },
  { value: "2", label: "partners con contrato de exclusividad" },
];

const VALUES = [
  {
    title: "Cercanía",
    description: "Trato directo, sin intermediarios ni letra pequeña.",
    icon: <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />,
  },
  {
    title: "Calidad sin atajos",
    description: "Elegimos partners serios y controlamos cada lote.",
    icon: (
      <>
        <path d="M12 3l7 3v6c0 5-3.2 8.4-7 9.5C8.2 20.4 5 17 5 12V6l7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Compromiso",
    description: "Cada pedido lleva nuestro nombre puesto.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8.5 12.5l2.2 2.2L15.5 9.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Agilidad",
    description: "Sin capas de aprobación: respondemos rápido.",
    icon: <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />,
  },
];

const DIFFERENTIATORS = [
  {
    title: "Atención directa y personal",
    description: "Hablas directamente con quien decide, no con un departamento anónimo.",
  },
  {
    title: "Partners elegidos con cuidado",
    description: "Exclusividad con proveedores serios en Colombia y Perú.",
  },
  {
    title: "Foco total en el producto",
    description: "Dos líneas, no veinte — eso significa control real de calidad.",
  },
  {
    title: "Trayectoria",
    description: "Más de 5 años acompañando a la industria en su día a día.",
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        {/* HERO */}
        <div className="flex max-w-3xl flex-col gap-5 px-6 pb-8 pt-16 md:px-16 md:pt-24">
          <div className="eyebrow text-prida-red">Quiénes somos</div>
          <h1 className="text-[32px] font-extrabold leading-[1.12] text-prida-ink md:text-[44px]">
            Un equipo que responde por su nombre, pedido a pedido
          </h1>
          <p className="text-[17.5px] leading-relaxed text-prida-ink-soft">
            Prida Europa es una empresa familiar con más de 5 años en el
            mercado, dedicada a una sola cosa: acercar fruta procesada de
            calidad a la industria europea. Cuando nos escribes, hablas
            directamente con quien decide — con nombre y apellido, no con un
            departamento anónimo.
          </p>
        </div>

        {/* STATS */}
        <div className="flex flex-wrap gap-10 px-6 pb-16 pt-6 md:gap-14 md:px-16 md:pb-20">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-heading text-[32px] font-extrabold text-prida-navy">
                {stat.value}
              </div>
              <div className="text-[13.5px] text-prida-ink-soft">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* MISION VISION */}
        <div className="flex flex-col gap-6 border-y border-prida-line bg-prida-paper-2 px-6 py-16 md:flex-row md:px-16 md:py-20">
          <div className="flex flex-1 flex-col gap-3.5 rounded-md bg-white p-9">
            <h3 className="text-xl font-extrabold text-prida-ink">Misión</h3>
            <p className="text-[15px] leading-relaxed text-prida-ink-soft">
              Acercar fruta procesada con estándar industrial a la industria
              europea — jugos, cervecería, compotas y helados — con la calidad
              de un gran proveedor y la cercanía de una empresa familiar.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-3.5 rounded-md bg-white p-9">
            <h3 className="text-xl font-extrabold text-prida-ink">Visión</h3>
            <p className="text-[15px] leading-relaxed text-prida-ink-soft">
              Ser el proveedor de referencia en fruta procesada para la
              industria europea, construyendo relaciones de largo plazo con
              partners de producción serios y clientes que vuelven pedido tras
              pedido.
            </p>
          </div>
        </div>

        {/* VALORES */}
        <div className="flex flex-col gap-11 px-6 py-16 md:px-16 md:py-24">
          <div className="flex max-w-2xl flex-col gap-3">
            <div className="eyebrow text-prida-navy">Nuestros valores</div>
            <h2 className="text-[26px] font-extrabold text-prida-ink md:text-[30px]">
              Lo que no negociamos
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-4">
            {VALUES.map((value) => (
              <div key={value.title} className="flex flex-col gap-3">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-prida-red">
                  {value.icon}
                </svg>
                <h4 className="text-base font-bold text-prida-ink">{value.title}</h4>
                <p className="text-sm leading-relaxed text-prida-ink-soft">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* QUE NOS HACE DIFERENTES */}
        <div className="flex flex-col gap-11 border-y border-prida-line bg-prida-paper-2 px-6 py-16 md:px-16 md:py-20">
          <div className="flex max-w-2xl flex-col gap-3">
            <div className="eyebrow text-prida-navy">Por qué Prida</div>
            <h2 className="text-[26px] font-extrabold text-prida-ink md:text-[30px]">
              Cerca de cada cliente
            </h2>
            <p className="text-[15.5px] leading-relaxed text-prida-ink-soft">
              Elegimos atender a cada cliente de cerca: respuesta directa,
              decisiones rápidas y seguimiento personalizado en cada pedido.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {DIFFERENTIATORS.map((item, i) => (
              <div key={item.title} className="flex gap-4 rounded-md bg-white p-6">
                <div className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full bg-prida-red font-heading text-sm font-extrabold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-[15.5px] font-bold text-prida-ink">{item.title}</h4>
                  <p className="text-[13.5px] leading-relaxed text-prida-ink-soft">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ORIGEN */}
        <div className="px-6 py-16 md:px-16 md:py-20">
          <div className="flex max-w-3xl flex-col gap-3.5">
            <div className="eyebrow text-prida-red">Nuestro origen</div>
            <p className="text-base leading-loose text-prida-ink-soft">
              Prida forma parte de un grupo con trayectoria en comercio
              internacional de alimentos. Hoy, en Europa, ponemos esa
              experiencia al servicio de un objetivo concreto: acercar fruta
              procesada de calidad — aséptica, liofilizada y atomizada — a la
              industria que la necesita en volumen y con consistencia.
            </p>
          </div>
        </div>

        {/* CTA */}
        <CtaBand heading="¿Charlamos sobre tu próxima producción?">
          <CtaButtonWhite href="/#lineas">Conocer las líneas</CtaButtonWhite>
          <CtaButtonOutline href="/contacto">Hablemos</CtaButtonOutline>
        </CtaBand>
      </main>

      <SiteFooter />
    </>
  );
}
