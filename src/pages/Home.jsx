import React from "react";
import { properties } from "../properties";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import Catalog from "../layouts/Catalog"
import Wa from "../components/Wa";
import { whatsapp } from "../utils/utils";
import Form from "../components/Form";

function Home() {
  return (
    <>
      <section className="hero">
        <img
          className="hero-image"
          src={properties[0].image}
          alt="Residencia contemporánea, fotografía ilustrativa"
        />
        <div className="hero-content">
          <p className="eyebrow">BIENES RAÍCES CON PROPÓSITO</p>
          <h1>
            Abre la puerta
            <br />a lo que <em>sigue.</em>
          </h1>
          <p>
            Encontrar una propiedad es el inicio.
            <br />
            Acompañarte en cada paso es lo nuestro.
          </p>
          <a className="button mint" href="#propiedades">
            Encuentra tu espacio
            <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="hero-bottom">
          <span>
            <MapPin size={16} /> Guadalajara & la zona de Vallarta
          </span>
          <span>
            Tu siguiente capítulo empieza aquí <ArrowRight size={17} />
          </span>
        </div>
      </section>
      <div className="intro-strip">
        <p>
          Tu patrimonio merece
          <br />
          <strong>una visión completa.</strong>
        </p>
        <div>
          Acompañamos todo el ciclo inmobiliario: desde la selección estratégica
          de una propiedad hasta la selección del inquilino y el mantenimiento
          preventivo.
        </div>
        <a href="#servicios" aria-label="Conocer los servicios">
          <ArrowUpRight size={30} />
        </a>
      </div>
      <Catalog />
      <section className="services section" id="servicios">
        <div>
          <p className="eyebrow">MÁS ALLÁ DE UNA PROPIEDAD</p>
          <h2>
            Nos ocupamos
            <br />
            de cada etapa.
          </h2>
          <p>
            Una visión integral para comprar, rentar
            <br />y cuidar tu patrimonio.
          </p>
          <Wa className="text-link">Cuéntanos qué necesitas</Wa>
        </div>
        <div className="service-list">
          {[
            [
              "01",
              "Compra y venta",
              "Selección estratégica de propiedades y acompañamiento durante el proceso.",
            ],
            [
              "02",
              "Renta y selección de inquilinos",
              "Conectamos propiedades con personas y acompañamos la selección del inquilino.",
            ],
            [
              "03",
              "Administración y mantenimiento",
              "Gestión de la propiedad y mantenimiento preventivo para cuidar cada espacio.",
            ],
          ].map(([n, t, d]) => (
            <div className="service" key={n}>
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
              <ArrowUpRight />
            </div>
          ))}
        </div>
      </section>
      <section className="about section" id="nosotros">
        <div className="about-image">
          <img
            src="/images/photo-1600607687920-4e2a09cf159d.jpg"
            alt="Interior residencial ilustrativo"
            loading="lazy"
          />
          <span>
            Una puerta.
            <br />
            Muchas posibilidades.
          </span>
        </div>
        <div className="about-text">
          <p className="eyebrow">SOMOS DOORVIA</p>
          <h2>
            Propiedades con futuro.
            <br />
            Relaciones con confianza.
          </h2>
          <p>
            Entendemos que detrás de cada inmueble hay una decisión importante.
            Por eso, acompañamos a quienes buscan un nuevo lugar y a quienes
            desean cuidar su patrimonio.
          </p>
          <p>
            Trabajamos en la Zona Metropolitana de Guadalajara y la región de
            Vallarta, incluyendo La Cruz de Huanacaxtle.
          </p>
          <div className="region-label">
            <MapPin size={19} /> Conocimiento local. Atención cercana.
          </div>
        </div>
      </section>
      <section id="contacto" className="contact section">
        <div>
          <p className="eyebrow">EL SIGUIENTE PASO ES CONVERSAR</p>
          <h2>
            Lo que buscas,
            <br />
            empieza con
            <br />
            un <em>hola.</em>
          </h2>
          <p>
            ¿Quieres comprar, rentar o administrar tu propiedad?
            <br />
            Estamos para escucharte.
          </p>
          <Wa className="button mint" />
          <a className="phone" href={whatsapp()}>
            +52 221 938 4780
          </a>
        </div>
        <Form />
      </section>
    </>
  );
}

export default Home;