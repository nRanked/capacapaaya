# 🖨️ Capa Capa AyA — Web de Impresión 3D

Web profesional y responsive para tu negocio de impresión 3D, especializado en material educativo para profesores de infantil.

## 📋 Características

✅ **Bilingüe** — Español e Inglés con cambio instantáneo  
✅ **Responsive** — Se adapta perfectamente a móvil, tablet y escritorio  
✅ **Sin dependencias** — Solo HTML, CSS y JavaScript puro (no necesitas frameworks)  
✅ **SEO optimizado** — Meta tags y estructura semántica  
✅ **Animaciones suaves** — Efectos visuales profesionales  
✅ **Formulario de contacto** — Con validación incluida  
✅ **WhatsApp integrado** — Botón flotante y enlaces directos  
✅ **Redes sociales** — Links a Instagram, TikTok y Facebook  

## 🎨 Secciones de la web

1. **Hero** — Presentación impactante con estadísticas
2. **Catálogo** — 6 productos de ejemplo con filtros por categoría
3. **Para Profesores** — Sección dedicada al nicho educativo
4. **Sobre Nosotros** — Historia y proceso de trabajo
5. **FAQ** — 6 preguntas frecuentes con acordeón
6. **Opiniones** — 4 testimonios de clientes
7. **Contacto** — Formulario + WhatsApp + Redes sociales
8. **Footer** — Links y copyright

## 🚀 Cómo usar la web

### 1. Abrir la web
Simplemente abre `index.html` en tu navegador. No necesitas servidor local.

### 2. Personalizar contenido

#### Cambiar tu número de WhatsApp
Busca `34XXXXXXXXX` en `index.html` (aparece 2 veces) y reemplázalo por tu número:
```html
<!-- Ejemplo: -->
<a href="https://wa.me/34612345678" ...>
```

#### Añadir tus redes sociales
Busca los enlaces con `href="#"` en la sección de contacto y footer, y reemplázalos:
```html
<!-- Instagram -->
<a href="https://instagram.com/TU_USUARIO" ...>

<!-- TikTok -->
<a href="https://tiktok.com/@TU_USUARIO" ...>

<!-- Facebook -->
<a href="https://facebook.com/TU_PAGINA" ...>
```

#### Cambiar las fotos de productos
Los productos actualmente usan placeholders (cajas de colores con emojis). Para cambiar por fotos reales:

1. Guarda tus fotos en una carpeta `images/` junto a index.html
2. En `index.html`, busca los divs con clase `placeholder-img`
3. Reemplázalos por una etiqueta `<img>`:

```html
<!-- ANTES (placeholder): -->
<div class="placeholder-img" style="--hue: 210">
    <span class="placeholder-icon">🔤</span>
    <span class="placeholder-text">Foto del producto</span>
</div>

<!-- DESPUÉS (foto real): -->
<img src="images/letras-3d.jpg" alt="Letras del abecedario 3D">
```

#### Modificar textos
Todos los textos están en dos lugares:
- **HTML** — En `index.html` con atributos `data-i18n="clave"`
- **JavaScript** — En `script.js` dentro del objeto `translations`

Para cambiar un texto:
1. Modifícalo en el HTML
2. Modifícalo también en las traducciones (español e inglés) en `script.js`

#### Añadir más productos al catálogo
Copia y pega un `.product-card` existente y modifica:
- `data-category` — Categoría: educativo, decoracion, funcional, personalizado
- `style="--hue: XXX"` — Color del placeholder (0-360)
- Emoji del icono
- Textos (nombre, descripción)
- Claves `data-i18n` (y añádelas en script.js)

### 3. Publicar la web

#### Opción A: Hosting gratuito (recomendado para empezar)

**Netlify** (más fácil):
1. Ve a https://netlify.com
2. Arrastra la carpeta con tus archivos
3. ¡Listo! Te da un dominio tipo `tu-sitio.netlify.app`

**GitHub Pages**:
1. Crea un repositorio en GitHub
2. Sube los archivos (index.html, styles.css, script.js)
3. Activa GitHub Pages en Settings
4. Tu web estará en `tu-usuario.github.io/nombre-repo`

#### Opción B: Hosting de pago
- **Webempresa** — Hosting español, soporte en español
- **SiteGround** — Muy rápido, ideal para pequeños negocios
- **Hostinger** — Económico y decente

#### Opción C: Conectar tu propio dominio
Una vez tengas hosting, compra un dominio (por ejemplo `capacapaaya.com`) en:
- Namecheap
- GoDaddy
- DonDominio (español)

Luego conéctalo según las instrucciones de tu hosting.

## ⚙️ Funcionalidades técnicas

### Formulario de contacto
Actualmente el formulario **NO envía emails automáticamente**. Para hacerlo funcionar necesitas:

**Opción 1 — FormSubmit** (gratis, sin código):
1. Ve a https://formsubmit.co
2. Cambia el `action` del formulario en index.html:
```html
<form action="https://formsubmit.co/TU_EMAIL@ejemplo.com" method="POST">
```

**Opción 2 — EmailJS** (más control):
1. Crea cuenta en https://emailjs.com
2. Sigue su tutorial para conectar con Gmail/Outlook
3. Modifica la función `initContactForm()` en script.js

**Opción 3 — Backend propio**:
Si sabes programar, puedes crear un servidor con Node.js, PHP, etc.

### Cambio de idioma
El botón de idioma cambia todos los textos automáticamente. Los textos están en `script.js` en el objeto `translations`.

### Filtros del catálogo
Los botones filtran productos por categoría usando el atributo `data-category`.

## 🎨 Personalización de colores

Si quieres cambiar los colores de la web, edita las variables en `styles.css` (líneas 5-20):

```css
:root {
    --primary: #4F46E5;        /* Color principal (azul) */
    --accent: #F59E0B;         /* Color de acento (naranja) */
    --edu-red: #EF4444;        /* Rojo educativo */
    --edu-green: #10B981;      /* Verde educativo */
    /* ... más colores ... */
}
```

## 📱 Responsive

La web se adapta automáticamente a:
- **Móviles** — Menú hamburguesa, columnas a 1
- **Tablets** — Layout intermedio
- **Escritorio** — Layout completo a 2 columnas

## 🔧 Solución de problemas

**La web no se ve bien en móvil**
→ Asegúrate de que el archivo `styles.css` está en la misma carpeta que `index.html`

**El cambio de idioma no funciona**
→ Verifica que `script.js` está cargando correctamente (F12 → Consola)

**Las animaciones no funcionan**
→ Algunos navegadores antiguos no soportan animaciones CSS modernas

**El formulario no envía**
→ Revisa la sección "Formulario de contacto" más arriba

## 📝 Próximos pasos sugeridos

1. **Añade tus fotos reales** de productos
2. **Configura el número de WhatsApp**
3. **Conecta las redes sociales**
4. **Activa el envío del formulario** con FormSubmit o EmailJS
5. **Publica en Netlify** para tener la web online
6. **Compra un dominio** cuando estés listo
7. **Añade Google Analytics** para ver visitantes
8. **Configura un pixel de Facebook/Instagram** para anuncios

## 🛒 ¿Quieres añadir tienda online después?

Cuando estés listo para vender directamente en la web, puedes integrar:
- **Stripe** — Pasarela de pago profesional
- **PayPal** — Fácil y conocido
- **Shopify Buy Button** — Widget de tienda
- **WooCommerce** — Si migras a WordPress

## 💡 Consejos

- **Comprime las fotos** antes de subirlas (usa TinyPNG.com)
- **Haz copias de seguridad** antes de hacer cambios grandes
- **Prueba en varios navegadores** (Chrome, Firefox, Safari)
- **Pide opiniones** a amigos antes de publicar
- **Actualiza el catálogo** regularmente con nuevas piezas

## 📞 Estructura de archivos

```
├── index.html       → Estructura y contenido
├── styles.css       → Estilos visuales
├── script.js        → Funcionalidad e idiomas
└── README.md        → Esta guía
```

## ✨ Créditos

Web diseñada para **Capa Capa AyA** — Impresión 3D educativa  
Desarrollada con ❤️ para impulsar tu negocio

---

**¿Necesitas ayuda?** Vuelve a preguntarme y te guiaré paso a paso.
