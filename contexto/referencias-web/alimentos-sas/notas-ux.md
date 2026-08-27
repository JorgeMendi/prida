# Alimentos SAS — notas de UX / diseño

Relevado con Playwright, viewport 1440×900. Screenshots en [imagenes/](imagenes/): `home.png`, `nuestra-empresa.png`, `exportaciones.png`.

## Impresión general
Sitio WordPress + WooCommerce con identidad visual mixta: comunica a la vez como **institución exportadora B2B** (página de exportaciones, certificaciones, ficha técnica) y como **tienda online retail** (carrito, precios en pesos colombianos, "Añadir al carrito", ofertas). Esa mezcla es justo lo que Prida quiere evitar según el brief — el foco ahí está difuso entre público industrial y consumidor final.

## Qué funciona / vale la pena tomar como referencia
- **Página de exportaciones muy completa y bien estructurada** para un comprador industrial: specs técnicas por fruta (°Brix, pH, acidez), condiciones comerciales claras (incoterm, mínimo de pedido, capacidad productiva), certificaciones, FAQ. Es el tipo de profundidad técnica que Prida podría necesitar para "Frutas Asépticas".
- Organiza el contenido de exportación **por país destino**, anticipando preguntas regulatorias distintas (FDA para EE.UU., MRL europeos, etc.) — útil si Prida apunta a industria europea con orígenes en Colombia/Perú.
- FAQ al final de la página de exportaciones, en formato pregunta directa — bueno para SEO y para resolver objeciones de compra industrial sin necesitar contacto humano.
- Bloque "¿Por qué usar pulpa de fruta?" — vende la categoría de producto (pulpa vs. fruta fresca) antes de vender la marca. Encaja con el enfoque "producto por encima de partner" del brief.
- Contacto de ventas export separado y visible (email + WhatsApp dedicados a exportación).

## Qué NO conviene replicar
- **Carrito/e-commerce de venta directa con precios chicos (COP, unidades de 1kg)** mezclado con el discurso industrial — para el público objetivo de Prida (jugos, cerveza, compotas, helados a nivel industrial) esto resta seriedad y desenfoca. Prida no debería vender "pulpa de piña 1kg" en la misma página donde habla de tambores de 220kg para industria.
- Testimonios con nombres/tono genérico tipo stock ("mickael facui", "lola miles") — se sienten poco creíbles. Si Prida usa testimonios, mejor con empresas/logos reales o ninguno.
- Muchos errores de consola (14 errores JS en home) y plugins visibles (chat de WhatsApp tipo Joinchat, reCAPTCHA visible) — sensación un poco recargada/no muy pulida técnicamente.
- Navegación con submenú "Productos" que en el snapshot aparece vacío de texto en el link raíz (posible problema de accesibilidad/etiquetado del menú).

## Estructura de navegación (referencia)
Header: Logo | Nuestra empresa | Productos (submenú) | Blog | Exportaciones | selector idioma | carrito | CTA "Contáctanos".
Footer: logo + redes sociales, bloque "recursos para clientes" (fichas técnicas, info empaque/logística — con puerta de solicitud), menú legal (línea ética, empleo, políticas, sostenibilidad), certificaciones (ISO/SGS, INVIMA).

## Aplicable a Prida
- Sí vale la pena tener una sección "Exportación / Cómo comprar" con condiciones comerciales claras (incoterm, mínimos, capacidad) y FAQ — pero **sin** el layer de e-commerce retail.
- El patrón de fichas técnicas por fruta (°Brix, pH, aplicación) es un buen modelo de contenido para las páginas de producto de Prida (tanto asépticas como liofilizadas/atomizadas).
- Separar claramente "recursos para clientes industriales" (fichas técnicas bajo solicitud) del contenido público general, como hace Alimentos SAS en el footer.
