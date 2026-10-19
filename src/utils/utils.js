export const money = (n) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);

export const whatsapp = (p) =>
  "https://wa.me/522219384780?text=" +
  encodeURIComponent(
    p
      ? `Hola, me interesa la propiedad ${p.id}: ${p.title}. ${location.origin}/propiedades/${p.slug}`
      : "Hola, me gustaría recibir asesoría de Doorvia.",
  );