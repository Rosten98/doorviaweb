import React from "react";
import Stats from "./Stats";
import { money } from "../utils/utils";
import { ArrowUpRight, MapPin } from "lucide-react";

function Card({ p }) {
  return (
    <article className="property">
      <a className="property-photo" href={"/propiedades/" + p.slug}>
        <img
          src={p.image}
          alt={`Imagen ilustrativa de ${p.type.toLowerCase()}`}
          loading="lazy"
        />
        <span className="tag">En {p.operation.toLowerCase()}</span>
        <span className="photo-arrow">
          <ArrowUpRight size={21} />
        </span>
      </a>
      <div className="property-info">
        <p className="location">
          <MapPin size={13} />
          {p.location}
        </p>
        <a href={"/propiedades/" + p.slug}>
          <h3>{p.title}</h3>
        </a>
        <Stats p={p} />
        <div className="price">
          {money(p.price)}{" "}
          <small>MXN{p.operation === "Renta" ? " / mes" : ""}</small>
          <span>{p.type}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;