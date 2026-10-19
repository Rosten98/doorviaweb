// Registros ilustrativos: reemplazar por inventario autorizado antes de publicar al público.
const photo = (id) => `/images/${id}.webp`;
export const properties = [
  {
    id: "DV-001",
    slug: "departamento-punta-foresta",
    title: "Departamento Punta Foresta",
    type: "Departamento",
    operation: "Venta",
    zone: "Guadalajara",
    location: "Zapopan, Jalisco",
    price: 3350000,
    beds: 3,
    baths: 2,
    area: 71,
    image: photo("PF-001"),
    description:
      "Espacios abiertos, luz natural y una terraza para disfrutar cada día.",
    amenities: ["Terraza privada", "1 estacionamiento", "Planta Baja", "Mantenimiento $1100 MXN"],
    gallery: [
        photo("PF-001"),
        photo("PF-002"),
        photo("PF-003"),
  ],
  },
]