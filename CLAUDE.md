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
- Deploy en **Vercel**, cuenta asociada al email `ganamosdinero1`, conectada al repo de GitHub bajo la cuenta `JorgeMendi` (alias SSH `github-jorgemendi`). Cada push a `main` dispara deploy a producción; otras ramas/PRs generan preview deploys.
- Pendiente de confirmar: si hay un dominio propio ya registrado (posiblemente vía Squarespace Domains) para apuntar al proyecto de Vercel, o si el dominio final aún no está definido.

## Estado actual
Fase de diseño/desarrollo inicial: scaffold del proyecto creado, primer deploy en Vercel en curso como preview para que el cliente vea avances antes de Fruit Attraction 2026. Este documento se irá actualizando a medida que se tomen más decisiones.
