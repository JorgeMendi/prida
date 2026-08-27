import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contacto — Prida",
  description:
    "Cuéntanos qué línea te interesa y tu volumen aproximado — te respondemos con ficha técnica, condiciones comerciales y disponibilidad de muestra.",
};

const PLACEHOLDER_EMAIL = "[EMAIL DE VENTAS PRIDA EUROPA]";
const PLACEHOLDER_PHONE = "[TELÉFONO DE CONTACTO]";
const PLACEHOLDER_ADDRESS = "[DIRECCIÓN / PAÍS SEDE PRIDA EUROPA]";
const PLACEHOLDER_STAND = "[PABELLÓN / NÚMERO DE STAND]";

const fieldInput =
  "rounded border border-prida-line bg-white px-3.5 py-3 text-[14.5px] text-prida-ink placeholder:text-prida-ink-soft/60 focus:outline-2 focus:outline-offset-1 focus:outline-prida-navy";
const fieldLabel = "font-heading text-[13.5px] font-semibold text-prida-ink";

export default function ContactoPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        {/* HERO */}
        <div className="flex max-w-2xl flex-col gap-4 px-6 pt-16 md:px-16 md:pt-20">
          <div className="eyebrow text-prida-red">Contacto</div>
          <h1 className="text-[30px] font-extrabold text-prida-ink md:text-[38px]">
            Hablemos de tu próximo pedido
          </h1>
          <p className="text-base leading-relaxed text-prida-ink-soft">
            Cuéntanos qué línea te interesa y tu volumen aproximado — te
            respondemos con ficha técnica, condiciones comerciales y
            disponibilidad de muestra.
          </p>
        </div>

        {/* FORM + INFO */}
        <div className="flex flex-col gap-12 px-6 py-14 md:flex-row md:px-16 md:py-24">
          {/*
            Nota de implementación: el formulario todavía no tiene backend
            conectado (sin envío real de email/CRM). Falta decidir el servicio
            de envío antes de publicar la web en producción.
          */}
          <form className="flex flex-1 flex-col gap-5 rounded-lg bg-prida-paper-2 p-8 md:p-10">
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex flex-1 flex-col gap-2">
                <label className={fieldLabel} htmlFor="empresa">Empresa</label>
                <input className={fieldInput} type="text" id="empresa" name="empresa" placeholder="Nombre de tu empresa" />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label className={fieldLabel} htmlFor="nombre">Nombre y apellido</label>
                <input className={fieldInput} type="text" id="nombre" name="nombre" placeholder="Tu nombre" />
              </div>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex flex-1 flex-col gap-2">
                <label className={fieldLabel} htmlFor="email">Email</label>
                <input className={fieldInput} type="email" id="email" name="email" placeholder="tu@empresa.com" />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label className={fieldLabel} htmlFor="telefono">Teléfono</label>
                <input className={fieldInput} type="text" id="telefono" name="telefono" placeholder="+34 ..." />
              </div>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex flex-1 flex-col gap-2">
                <label className={fieldLabel} htmlFor="pais">País</label>
                <input className={fieldInput} type="text" id="pais" name="pais" placeholder="España, Francia, Alemania..." />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label className={fieldLabel} htmlFor="linea">Línea de interés</label>
                <select className={fieldInput} id="linea" name="linea">
                  <option>Frutas Asépticas</option>
                  <option>Frutas Liofilizadas y Atomizadas</option>
                  <option>Ambas líneas</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className={fieldLabel} htmlFor="mensaje">Mensaje</label>
              <textarea
                className={fieldInput}
                id="mensaje"
                name="mensaje"
                rows={4}
                placeholder="Cuéntanos tu volumen aproximado, aplicación y cualquier detalle relevante"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded bg-prida-red py-3.5 text-center font-heading text-[15px] font-bold text-white transition-colors hover:bg-prida-red-dark"
            >
              Enviar solicitud
            </button>
          </form>

          <div className="flex flex-col gap-8 md:w-90 md:shrink-0">
            <div className="flex flex-col gap-3.5 rounded-lg border border-prida-line p-7">
              <div className="eyebrow text-prida-navy">Nos vemos en la feria</div>
              <h4 className="text-lg font-extrabold text-prida-ink">Fruit Attraction 2026</h4>
              <p className="text-[14.5px] leading-relaxed text-prida-ink-soft">
                6, 7 y 8 de octubre. Visita nuestro stand {PLACEHOLDER_STAND} y
                llévate una muestra.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="eyebrow text-prida-navy">Contacto directo</div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13.5px] text-prida-ink-soft">Email</span>
                <span className="text-[15px] font-semibold text-prida-ink">{PLACEHOLDER_EMAIL}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13.5px] text-prida-ink-soft">Teléfono</span>
                <span className="text-[15px] font-semibold text-prida-ink">{PLACEHOLDER_PHONE}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13.5px] text-prida-ink-soft">Sede</span>
                <span className="text-[15px] font-semibold text-prida-ink">{PLACEHOLDER_ADDRESS}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
