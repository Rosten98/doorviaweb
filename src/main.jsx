import React from "react";
import { createRoot } from "react-dom/client";
import { properties } from "./properties";
import "./style.css";
import Wa from "./components/Wa";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Detail from "./layouts/Detail";

function App() {
  const slug = location.pathname.split("/")[2];
  const p = properties.find((p) => p.slug === slug);
  let content = location.pathname.startsWith("/propiedades/") ? (
    p ? (
      <Detail p={p} />
    ) : (
      <div className="section missing">
        <h1>Propiedad no encontrada</h1>
        <a href="/#propiedades">Explorar propiedades →</a>
      </div>
    )
  ) : location.pathname === "/aviso-de-privacidad" ? (
    <div className="section missing">
      <p className="eyebrow">DOORVIA</p>
      <h1>Aviso de privacidad pendiente</h1>
      <p>
        Doorvia aún no ha proporcionado su aviso de privacidad. El formulario de
        captación permanecerá deshabilitado hasta incorporar el aviso y
        habilitar la integración.
      </p>
      <Wa />
    </div>
  ) : (
    <Home />
  );
  return (
    <div id="top">
      <Header />
      {content}
      <Footer />
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
