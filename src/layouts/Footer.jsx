import React from "react";
import { whatsapp } from "../utils/utils";
import { MessageCircle } from "lucide-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <a className="brand" href="/">
            doorvia<span>®</span>
          </a>
          <p>Espacios. Personas. Nuevas historias.</p>
          <a href="#top">Volver arriba ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Doorvia</span>
          <div>
            <a
              href="https://www.facebook.com/Doorvia"
              target="_blank"
              rel="noreferrer"
            >
              Facebook ↗
            </a>
            <a
              href="https://www.instagram.com/doorviamx/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a href="/aviso-de-privacidad">Privacidad</a>
          </div>
          <span>Guadalajara · Vallarta</span>
        </div>
      </footer>
      <a
        className="floating-wa"
        href={whatsapp()}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}

export default Footer;