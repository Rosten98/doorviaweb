# Doorvia
Vite + React + Tailwind CSS. Catálogo de seis registros ilustrativos.

## Desarrollo
`npm install` y `npx vite`. Compilar con `npm run build`.

## Actualizar propiedades
Editar `src/properties.js`. Cada inmueble usa id, slug único, title, operation (Venta/Renta), zone, location, price en MXN, beds, baths, area en m², image, description y amenities. Sustituir todas las imágenes ilustrativas y datos antes de abrir el sitio al público. Para imágenes propias, guardar en public/propiedades y usar rutas como /propiedades/casa-01.jpg. La galería de ejemplo se asigna al final del archivo; reemplazar por fotos propias de cada inmueble.

## WhatsApp
Número normalizado: 522219384780. Configuración en src/main.jsx. No se añade el antiguo prefijo móvil 1. Verificar manualmente la conversación antes de publicar.

## n8n
Copiar .env.example a .env.local. Configurar VITE_N8N_WEBHOOK_URL con el webhook POST de producción, agregar el aviso aprobado en la ruta /aviso-de-privacidad de src/main.jsx y habilitar VITE_PRIVACY_READY=true. Reconstruir. Mientras falte cualquiera, el envío permanece deshabilitado.
Payload JSON: name, phone, email, message, consent, website (honeypot), propertyId, propertyTitle, propertyUrl, source, pageUrl, createdAt. El formulario general usa null para la propiedad. n8n debe responder 2xx y aceptar CORS desde el origen publicado (y desde https://doorvia.com.mx cuando se conecte). Variables VITE_ son públicas: no guardar secretos ahí. Configurar validación, límites y protección antiabuso en el receptor; el honeypot de cliente no sustituye esas medidas.

## Hosting
SPA con fallback de rutas a index.html para /propiedades/:slug y /aviso-de-privacidad. El dominio doorvia.com.mx todavía no está conectado. Esta primera publicación es privada y usa un dominio de revisión de Sites. No hay panel ni base de datos.

## Pendientes comerciales
Inventario y fotos reales, aviso de privacidad aprobado, webhook y validación del WhatsApp. Fotografías de Unsplash guardadas en public/images, ilustrativas; no representan inventario real. No se realiza captura de datos hasta activar el formulario.
