# Biovks — notas de UX / diseño

Relevado con Playwright, viewport 1440×900. Screenshot completo en [imagenes/home.png](imagenes/home.png) (página larga, ~10.500px de alto — one-pager con scroll extenso).

## Impresión general
Landing institucional moderna tipo "startup biotech/nutrición", con mucho storytelling de marca (raíces ancestrales andino-amazónicas, biotecnología, sostenibilidad) y poco catálogo de producto explícito. Paleta azul marino + acentos celestes, fotografía de planta/laboratorio mezclada con ilustración de producto (sachets/empaques coloridos). Se apoya fuerte en animaciones al hacer scroll (contadores que suben desde 0, reveals de secciones) — **el contenido real no aparece en una captura de página completa "en frío"**, hubo que forzar scroll para que cargara.

## Qué funciona / vale la pena tomar como referencia
- **Sección de proceso muy clara y visual** (Selección → Congelación → Sublimación → Control de calidad), con beneficios del producto liofilizado inmediatamente después (100% natural, mayor vida útil, sabores auténticos, fácil distribución). Es un modelo directo de cómo Prida podría explicar "qué es liofilizado/atomizado" sin tecnicismos, en la página de producto de Frutas Liofilizadas y Atomizadas.
- Cifras institucionales tipo "stat band" justo debajo del hero (plantas, años de experiencia, volumen producido, aliados) — comunica escala rápido, sin texto.
- Historia de fundación con nombres propios (fundadores, año) y expansión geográfica — humaniza la marca.
- Testimonios de clientes con caso de uso concreto y específico (frambuesa liofilizada, bebida funcional con probióticos, mucílago) en vez de frases genéricas — más creíbles que los de Alimentos SAS.
- Blog con ángulo de contenido educativo/industria (Clean Label, cómo se liofiliza, tendencias de mercado) — bueno para SEO y para posicionar expertise técnico.

## Qué NO conviene replicar
- **No hay catálogo de producto navegable en el sitio.** El botón "CATÁLOGO" no lleva a una página propia sino que abre WhatsApp directo (wa.link). Para el público objetivo de Prida (industrias grandes evaluando proveedores) esto es una fricción real: alguien investigando antes de contactar no puede ver referencias, formatos ni fichas técnicas sin iniciar una conversación. Prida debería tener al menos una página de producto con información sustancial antes del CTA de contacto.
- **Dependencia fuerte de animación por scroll** hace que el contenido no sea accesible/indexable de forma directa (afecta SEO y a cualquier crawler o lector que no ejecute JS ni haga scroll), y generó una captura casi vacía en el primer intento. Si Prida usa animaciones de entrada, deben degradar bien (contenido presente en el DOM desde el inicio, solo el efecto visual depende del scroll).
- Sección "Aliados estratégicos" (logos de clientes/partners) no cargó contenido visible en el crawl — podría ser un carrusel roto o que depende de interacción; si Prida muestra logos de partners/clientes, conviene que sean simples y no dependan de JS pesado.
- El texto institucional es denso en storytelling de marca ("herencia ancestral", "impulsando una nutrición global") pero relativamente pobre en datos duros de producto (no hay °Brix, formatos de empaque, vida útil por fruta, condiciones de despacho como sí tiene Alimentos SAS). Para un comprador industrial que compara proveedores, faltan specs.

## Estructura de navegación (referencia)
Header (sticky, fondo transparente sobre hero): Logo | HOME | NOSOTROS | I+D | PROCESOS | PLANTAS | CLIENTES | BLOG | CONTACTO.
Todo excepto Blog y Contacto son anchors dentro de la misma página larga — sin URLs individuales por sección (mala practicidad para compartir un enlace directo a "Procesos", por ejemplo, aunque técnicamente el anchor sí es una URL válida: biovks.com/#procesos).
Footer: redes (FB, IG, TikTok, LinkedIn), newsletter, QR "Cotiza aquí" → WhatsApp, dirección y teléfono, copyright.

## Aplicable a Prida
- Tomar el patrón "proceso en 4 pasos + beneficios inmediatos" para explicar liofilizado/atomizado de forma simple.
- **No** replicar la ausencia de catálogo público — Prida sí debería mostrar información de producto (formatos, aplicaciones, incluso specs básicas) sin obligar a un WhatsApp para lo esencial; el contacto directo puede reservarse para cotización/muestras, no para conocer qué existe.
- Si se usan animaciones de scroll, verificar que el contenido esté disponible sin depender de ellas (accesibilidad + SEO + capturas/PDF).
- El tono "de Perú al mundo" con expansión geográfica es un buen paralelo a cómo Prida podría presentar sus propios partners (origen + alcance internacional) sin que el partner opaque al producto.
