import React from 'react'
import { useState } from "react";
import { Menu, X } from 'lucide-react';
import Wa from '../components/Wa';

function Header() {
  let [open, set] = useState(false);
  return (
    <header>
      <a href="/" className="brand">
        <img src="/logo.jpg" alt="" />
        doorvia<span>®</span>
      </a>
      <button
        className="mobile-menu"
        aria-label="Abrir navegación"
        onClick={() => set(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "open" : ""}>
        <a href="/#propiedades" onClick={() => set(false)}>
          Propiedades
        </a>
        <a href="/#servicios" onClick={() => set(false)}>
          Lo que hacemos
        </a>
        <a href="/#nosotros" onClick={() => set(false)}>
          Nosotros
        </a>
        <Wa className="nav-contact">Conversemos</Wa>
      </nav>
    </header>
  );
}

export default Header;