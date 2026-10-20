import React, { useState } from "react";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Wa from "../components/Wa";
import { money } from "../utils/utils";
import Stats from "../components/Stats";
import Form from "../components/Form";

function Detail({ p }) {
  let [index, setIndex] = useState(0),
    [copied, setCopied] = useState(false);
  return (
    <main className="detail section">
      <a className="back" href="/#propiedades">
        <ChevronLeft size={17} />
        Volver a propiedades
      </a>
      <div className="detail-heading">
        <div>
          <p className="eyebrow">
            {p.id} · EN {p.operation.toUpperCase()} · EJEMPLO
          </p>
          <h1>{p.title}</h1>
          <p className="location">
            <MapPin size={16} />
            {p.location}
          </p>
        </div>
        <div>
          <strong>{money(p.price)}</strong>
          <p>MXN{p.operation === "Renta" ? " / mes" : ""}</p>
        </div>
      </div>
      <div className="gallery">
        <img
          src={p.gallery[index]}
          alt={`Fotografía ilustrativa ${index + 1} de ${p.title}`}
        />
        <button
          className="gallery-prev"
          aria-label="Foto anterior"
          onClick={() => setIndex( index > 0 ? (index - 1) : (p.gallery.length - 1))}
        >
          <ChevronLeft />
        </button>
        <button
          className="gallery-next"
          aria-label="Siguiente foto"
          onClick={() => setIndex((index + 1) % p.gallery.length)}
        >
          <ChevronRight />
        </button>
        <span>
          {index + 1} / {p.gallery.length}
        </span>
      </div>
      <div className="detail-layout">
        <div>
          <p className="demo-alert">
            Propiedad de demostración. Fotografías, precio y características
            ilustrativas.
          </p>
          <Stats p={p} />
          <h2>Conoce el espacio</h2>
          <p>{p.description}</p>
          <div className="amenities">
            {p.amenities.map((a) => (
              <span key={a}>
                <Check size={18} />
                {a}
              </span>
            ))}
          </div>
          <Wa p={p} />
          <button
            className="text-link share"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(location.href);
                setCopied(true);
              } catch {
                setCopied(false);
              }
            }}
          >
            {copied ? "Enlace copiado" : "Copiar enlace de la propiedad"}
            <ArrowUpRight size={16} />
          </button>
        </div>
        <Form p={p} />
      </div>
    </main>
  );
}

export default Detail;