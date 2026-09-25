# Prida — Web de producto

## Convención de contexto del proyecto
Todo el contexto del proyecto (briefs, decisiones, notas de reuniones/WhatsApp, referencias, etc.) se guarda en la carpeta [`contexto/`](contexto/), un archivo por tema. Antes de tomar decisiones de alcance, contenido o diseño, revisar esa carpeta. Al recibir contexto nuevo del proyecto (no del código), agregarlo ahí en vez de dejarlo solo en la conversación.

- [contexto/contexto-inicial-proyecto.md](contexto/contexto-inicial-proyecto.md) — brief inicial: alcance, jerarquía de contenido, partners, público objetivo.
- [contexto/referencias-web/](contexto/referencias-web/) — relevamiento (contenido + notas de UX + capturas) de los 3 sitios de referencia: [alimentos-sas](contexto/referencias-web/alimentos-sas/contenido.md), [biovks](contexto/referencias-web/biovks/contenido.md), [pridaimport](contexto/referencias-web/pridaimport/contenido.md).

## Resumen del proyecto
Página web de producto para **Prida**, enfocada en dos líneas clave:
1. **Frutas Asépticas** (partner: Alimentos SAS, Colombia)
2. **Frutas Liofilizadas y Atomizadas** (partner: Biovks, Perú)

No es una web corporativa multi-línea: en esta fase el alcance se limita a estos dos productos. Bebidas y chucherías/golosinas quedan fuera. El producto es el protagonista; los partners se muestran como respaldo/confianza, no como eje.

Meta: web lista antes de **Fruit Attraction 2026** (6–8 oct 2026), como referencia post-feria para visitantes.

Público objetivo: grandes industrias (jugos, cerveza, compotas, helados); retail es canal complementario.

Ver detalle completo en [contexto/contexto-inicial-proyecto.md](contexto/contexto-inicial-proyecto.md).

## Marca / UX

### Logo
- Archivo: [`Logo prida 80x80.pdf`](Logo%20prida%2080x80.pdf).
- Es **arte vectorial** (trazados, sin imagen rasterizada embebida), lienzo de 2551×2551 pt (~90×90 cm), exportado desde Adobe Illustrator. No hay límite de resolución: se puede exportar a cualquier tamaño (favicon, hero image, etc.) sin perder calidad.
- Para uso en web: exportar a **SVG** (preferido, escalable y liviano) o **PNG a 2x/3x** del tamaño final de despliegue, para pantallas retina. El "80x80" del nombre es el tamaño de uso previsto, no una limitación del archivo.
- Composición: wordmark "Prida" en cursiva azul, aro rojo partido alrededor, y sobre la "i" un motivo circular tipo cinta entrelazada en amarillo/naranja/azul.

### Referencia de línea gráfica
- [www.pridaimport.com](https://www.pridaimport.com) (Prida USA, empresa hermana) — no es proveedor de producto sino partner natural de Prida Europa; usar como referencia de contenido y línea gráfica.

## Stack técnico
- **Next.js** (App Router, TypeScript) + **Tailwind CSS**.
- Repo en GitHub: `JorgeMendi/prida` (cuenta personal `JorgeMendi`; identidad git `jorgemendi` según la metodología de `~/code/_setup`).
- Deploy en **Vercel**, team `jorgemendizabal-6450...` (plan Hobby) — cuenta de Vercel ya conectada nativamente a la cuenta de GitHub `JorgeMendi`, así que el import fue directo sin fricción de permisos cruzados. (Se evaluó usar la cuenta de Vercel asociada al email `ganamosdinero1`, pero esa cuenta está conectada a una identidad de GitHub distinta y separada de `JorgeMendi`, y Vercel no permite mezclar dos cuentas personales de GitHub bajo una misma cuenta de Vercel — se descartó esa ruta.)
- Cada push a `main` dispara deploy a producción; otras ramas/PRs generan preview deploys.
- **Dominio:** `pridaeuropa.com` (principal, Production) y `www.pridaeuropa.com` (redirect 308 al principal), conectados el 2026-09-25. Registrado en **Squarespace Domains**; el DNS se gestiona desde el panel de Squarespace (nameservers Google Cloud DNS, no Vercel DNS). Registros de la web: `A @ → 216.198.79.1` y `CNAME www → 27b4b54bbada9e46.vercel-dns-017.com` (custom records, TTL 1 h); se borró el preset "Squarespace Defaults" (parking).
- **Correo:** Google Workspace sobre el mismo dominio (presets "Domain Connect to Google" + "Email Security": MX, SPF, DMARC `p=reject`, CNAME de verificación `75765396`). **No tocar esos registros** al cambiar cosas de la web. DKIM activo desde 2026-09-25 (custom record `TXT google._domainkey`, clave RSA 2048); verificado con un envío real desde `logistica@pridaeuropa.com`: SPF, DKIM y DMARC en PASS.

## Diseño
Existe un mockup completo (design canvas "Prida Europa — Propuesta Web", publicado como Artifact) con las 5 páginas del sitio: Home, Frutas Asépticas, Frutas Liofilizadas y Atomizadas, Quiénes somos y Contacto. Ese mockup es la fuente de verdad de copy/layout/paleta de colores (rojo `#ED1D24`, navy `#262363`, naranja `#E8862A`) y tipografías (Manrope + Public Sans, Google Fonts) — ya implementado en el sitio real. También incluye el logo, exportado a PNG y copiado a `public/images/logo-prida.png`.

Las 3 fotos de hero del mockup original venían sin metadata/origen conocido (una se veía directamente como fruta podrida) — se reemplazaron por fotos de Wikimedia Commons con licencia verificada, mismo criterio temático (maracuyá en home, papaya en Asépticas, fresas liofilizadas en Liofilizadas). Ver [contexto/creditos-fotos.md](contexto/creditos-fotos.md) para créditos/licencias — son placeholders, a reemplazar por fotografía real del cliente o los partners antes de producción.

Placeholders pendientes de datos reales (heredados del mockup, no completar sin confirmar con el cliente): email/teléfono/dirección de contacto, stand de Fruit Attraction 2026, y formatos comerciales de la línea liofilizada (a confirmar con Biovks). El formulario de contacto todavía no tiene backend conectado (sin envío real de email/CRM).

Favicon (`src/app/icon.png` + `apple-icon.png`) e imagen de preview para compartir el link (`src/app/opengraph-image.png`, la que muestran WhatsApp/Facebook/etc.) ya están generados a partir del logo. `metadataBase` en `src/app/layout.tsx` apunta a `https://pridaeuropa.com` (si cambia el dominio, actualizarlo o las imágenes de preview apuntarán a la URL vieja).

## Estado actual
Sitio real construido en Next.js con las 5 páginas del mockup, publicado en **https://pridaeuropa.com** (también responde en https://prida-ten.vercel.app/). Falta: completar los placeholders de contacto/formatos con datos reales, decidir servicio de envío del formulario de contacto, y añadir la atribución de las fotos CC BY-SA (o reemplazarlas) ahora que el sitio es público. Este documento se irá actualizando a medida que se tomen más decisiones.
