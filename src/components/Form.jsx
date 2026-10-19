import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

function Form({ p }) {
  let [state, set] = useState("idle");
  const endpoint = import.meta.env.VITE_N8N_WEBHOOK_URL;
  const privacyReady = import.meta.env.VITE_PRIVACY_READY === "true";
  async function submit(e) {
    e.preventDefault();
    if (!endpoint || !privacyReady) return;
    set("sending");
    const data = Object.fromEntries(new FormData(e.target));
    if (data.website) {
      set("error");
      return;
    }
    try {
      const r = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          propertyId: p?.id ?? null,
          propertyTitle: p?.title ?? null,
          propertyUrl: p ? `${location.origin}/propiedades/${p.slug}` : null,
          source: "doorvia-web",
          pageUrl: location.href,
          createdAt: new Date().toISOString(),
        }),
      });
      if (!r.ok) throw Error();
      set("success");
      e.target.reset();
    } catch {
      set("error");
    }
  }
  return (
    <form onSubmit={submit} className="lead-form">
      <p className="eyebrow">DÉJANOS TUS DATOS</p>
      <h3>{p ? "¿Te imaginas aquí?" : "Hablemos de tu próximo paso."}</h3>
      <p>Cuéntanos qué buscas y un asesor podrá contactarte.</p>
      {p && (
        <div className="selected-property">
          {p.id} · {p.title}
        </div>
      )}
      <label>
        Nombre completo
        <input
          name="name"
          required
          autoComplete="name"
          placeholder="¿Cómo te llamas?"
          maxLength={120}
        />
      </label>
      <div className="form-row">
        <label>
          Teléfono
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            minLength={10}
            maxLength={20}
            placeholder="Tu número de contacto"
          />
        </label>
        <label>
          Correo <small>(opcional)</small>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="tu@correo.com"
          />
        </label>
      </div>
      <label>
        ¿En qué podemos ayudarte?
        <textarea
          name="message"
          required
          maxLength={2000}
          rows="3"
          placeholder="Busco una casa en renta en…"
        />
      </label>
      <input
        className="honeypot"
        name="website"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />
      {privacyReady && (
        <label className="consent">
          <input type="checkbox" name="consent" required value="accepted" />
          He leído el <a href="/aviso-de-privacidad">aviso de privacidad</a> y
          acepto que me contacten.
        </label>
      )}
      <button
        className="button"
        disabled={!endpoint || !privacyReady || state === "sending"}
        type="submit"
      >
        {state === "sending" ? "Enviando…" : "Solicitar información"}
        <ArrowUpRight size={18} />
      </button>
      <p className="form-status" role="status">
        {state === "success"
          ? "Recibimos tu solicitud. Gracias por contactarnos."
          : state === "error"
            ? "No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp."
            : !endpoint || !privacyReady
              ? "Formulario en preparación. Por ahora, contáctanos por WhatsApp."
              : ""}
      </p>
    </form>
  );
}

export default Form;