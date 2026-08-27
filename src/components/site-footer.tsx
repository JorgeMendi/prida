import Image from "next/image";
import Link from "next/link";

const PLACEHOLDER_EMAIL = "[EMAIL DE VENTAS PRIDA EUROPA]";
const PLACEHOLDER_PHONE = "[TELÉFONO DE CONTACTO]";
const PLACEHOLDER_ADDRESS = "[DIRECCIÓN / PAÍS SEDE]";

export function SiteFooter({ variant = "simple" }: { variant?: "full" | "simple" }) {
  if (variant === "simple") {
    return (
      <footer className="flex flex-col items-center justify-between gap-4 bg-prida-footer px-6 py-8 md:flex-row md:px-16">
        <Image
          src="/images/logo-prida.png"
          alt="Prida"
          height={36}
          width={92}
          className="h-8 w-auto md:h-9"
        />
        <span className="text-[13px] text-prida-ink-soft">
          © 2026 Prida Europa. Todos los derechos reservados.
        </span>
      </footer>
    );
  }

  return (
    <footer className="flex flex-col gap-10 bg-prida-footer px-6 py-12 md:gap-10 md:px-16 md:py-16">
      <div className="flex flex-col flex-wrap gap-10 md:flex-row md:justify-between md:gap-12">
        <div className="flex max-w-xs flex-col gap-4">
          <Image
            src="/images/logo-prida.png"
            alt="Prida"
            height={48}
            width={123}
            className="h-10 w-auto self-start md:h-12"
          />
          <p className="text-sm leading-relaxed text-prida-ink-soft">
            Fruta procesada con estándar industrial para la industria europea de
            jugos, cervecería, compotas y helados.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="eyebrow text-prida-ink-soft">Líneas</div>
          <Link href="/frutas-asepticas" className="text-[14.5px] text-prida-ink">
            Frutas Asépticas
          </Link>
          <Link href="/frutas-liofilizadas" className="text-[14.5px] text-prida-ink">
            Frutas Liofilizadas y Atomizadas
          </Link>
          <Link href="/quienes-somos" className="text-[14.5px] text-prida-ink">
            Quiénes somos
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="eyebrow text-prida-ink-soft">Contacto</div>
          <span className="text-[14.5px] text-prida-ink">{PLACEHOLDER_EMAIL}</span>
          <span className="text-[14.5px] text-prida-ink">{PLACEHOLDER_PHONE}</span>
          <span className="text-[14.5px] text-prida-ink">{PLACEHOLDER_ADDRESS}</span>
        </div>
      </div>
      <div className="border-t border-prida-line pt-6">
        <span className="text-[13px] text-prida-ink-soft">
          © 2026 Prida Europa. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
