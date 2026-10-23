import React, { useState } from "react";
import { properties } from "../properties";
import Card from "../components/Card";

function Catalog() {
  let [op, setOp] = useState("Todas"),
    [zone, setZone] = useState("Todas"),
    [type, setType] = useState("Todos");
  let filtered = properties.filter(
    (p) =>
      (op === "Todas" || p.operation === op) &&
      (zone === "Todas" || p.zone === zone) &&
      (type === "Todos" || p.type === type),
  );
  return (
    <section id="propiedades" className="section catalog">
      <div className="section-heading">
        <div>
          <p className="eyebrow">ENCUENTRA TU LUGAR</p>
          <h2>
            Un espacio para
            <br />
            lo que viene.
          </h2>
        </div>
        <p>
          Compra, renta o empieza una nueva etapa.
          <br />
          Exploremos las posibilidades juntos.
        </p>
      </div>
      <div className="filters">
        <div className="tabs">
          {["Todas", "Venta", "Renta"].map((t) => (
            <button
              key={t}
              className={op === t ? "active" : ""}
              onClick={() => setOp(t)}
            >
              {t === "Todas" ? "Todas las propiedades" : t}
            </button>
          ))}
        </div>
        <div className="selects">
          <select
            aria-label="Filtrar por zona"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
          >
            <option value="Todas">Todas las zonas</option>
            <option>Guadalajara</option>
            <option>Vallarta y alrededores</option>
          </select>
          <select
            aria-label="Tipo de propiedad"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Todos">Tipo de propiedad</option>
            <option>Casa</option>
            <option>Departamento</option>
          </select>
        </div>
      </div>
      <div className="catalog-note">
        {/* <span className="dot" />
        Catálogo de demostración · 6 propiedades ilustrativas, sin
        disponibilidad comercial. */}
      </div>
      <div className="grid">
        {filtered.map((p) => (
          <Card key={p.id} p={p} />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty">
          No hay ejemplos para estos filtros.{" "}
          <button
            onClick={() => {
              setOp("Todas");
              setZone("Todas");
              setType("Todos");
            }}
          >
            Ver todas las propiedades
          </button>
        </div>
      )}
    </section>
  );
}

export default Catalog;