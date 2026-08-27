# Prida Import — notas de UX / marca

Relevado con Playwright, viewport 1440×900. Screenshots en [imagenes/](imagenes/): `home.png`, `about-us.png`.

## Identidad de marca (esto es lo que sí aplica directo a Prida Europa)
- **Logo**: confirma exactamente la descripción del [CLAUDE.md](../../../CLAUDE.md) — wordmark "Prida" en cursiva azul, con un aro rojo partido alrededor. En este sitio el logo se ve simple (sin el motivo circular entrelazado amarillo/naranja/azul sobre la "i" que sí tiene el logo vectorial de Prida Europa) — puede ser una versión anterior o simplificada del isotipo.
- **Paleta**: azul marino (banners de sección, footer), rojo (botones CTA, acentos, "HOW IT WORKS" en banda roja completa), blanco de fondo. Contraste alto y muy "retail americano".
- **Tipografía**: titulares en mayúsculas, sans-serif bold, bastante condensada — estilo folleto/promoción más que editorial.
- **Botones CTA**: rojos, texto blanco mayúscula, esquinas ligeramente redondeadas ("SHOP NOW", "GET CATALOG", "ORDER NOW").
- **Fotografía de hero**: foto real de góndola de supermercado llena de producto, con bandera de Venezuela superpuesta — recurso de "orgullo de origen" que Prida Europa podría adaptar con imaginería de fruta/campo en vez de anaquel de supermercado (el público es industrial, no retail).

## Qué funciona / vale la pena tomar como referencia
- Bandas de color sólido full-width (azul, rojo) para separar secciones temáticas — recurso simple y efectivo, coherente con la paleta de marca.
- Bloque de cifras institucionales en banda roja de alto contraste (200+ Products / 25+ Brands / 10+ Categories) — mismo patrón que Biovks (stat band), aquí más simple y directo.
- Sección "HOW IT WORKS" con iconos circulares de color + 4 pasos numerados implícitamente por el flujo — bueno como patrón de UI reutilizable si Prida Europa necesita explicar un proceso (ej. "cómo cotizar/comprar").
- Menú "Supplier" dedicado y separado del de cliente — reconoce que hay dos audiencias distintas (compradores vs. proveedores). Prida Europa con dos partners estratégicos podría inspirarse en esto para diferenciar "quiero comprar producto" de "quiero ser partner/proveedor", si aplica.

## Qué NO conviene replicar
- El modelo "precios ocultos tras login" (**"Login to see prices"** en cada producto) tiene sentido para un mayorista B2B transaccional con checkout online, pero **no encaja con el alcance de Prida Europa**, que es una web de producto/referencia post-feria, no una tienda transaccional. Replicar esto agregaría fricción innecesaria.
- Imágenes "Placeholder" sin cargar en varias categorías y productos (PUIG, Nestlé, y la mayoría de "New offers") — se ve incompleto/poco cuidado. Cuidar que en la web de Prida Europa no queden placeholders visibles en producción.
- El posicionamiento de marca aquí es "nostalgia/orgullo cultural venezolano para consumidor final" — completamente distinto al target de Prida Europa (grandes industrias: jugos, cerveza, compotas, helados). La línea gráfica (color, tipografía, logo) es aprovechable; el tono de copy y el tipo de imaginería (súper, snacks, bebidas) no.
- Banner de cookies simple tipo barra inferior con un solo botón "Accept" (sin opción de rechazar/gestionar) — no es una gran práctica de privacidad; si aplica RGPD en la web europea, revisar requisitos más estrictos de consentimiento.

## Estructura de navegación (referencia)
Header: Logo | Home | About Us | Products | Catalog | Contact us | Supplier | Login | Request an Account.
Footer: bloque de contacto (dirección, teléfono, email) + "Useful links" (About, Contact, Privacy Policy, Terms & Conditions, Instagram).

## Aplicable a Prida Europa
- Adoptar la paleta rojo/azul/blanco del logo de forma consistente en bandas de sección, como hace este sitio, en vez de una paleta genérica — mantiene coherencia de marca entre "hermanas" Prida.
- El patrón de banda de cifras (stat band) es replicable para comunicar escala de Prida/sus partners (años de trayectoria, capacidad productiva, países de exportación) sin necesitar texto largo.
- Evitar el modelo transaccional (login para precios, carrito, checkout) — la web de Prida Europa es de producto/marca para la fase actual, no de e-commerce.
