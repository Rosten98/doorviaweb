import React from 'react'
import { whatsapp } from '../utils/utils';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

function Wa({ p, children = "Hablemos por WhatsApp", className = "button" }) {
  return (
    <a
      className={className}
      href={whatsapp(p)}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={18} />
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}

export default Wa