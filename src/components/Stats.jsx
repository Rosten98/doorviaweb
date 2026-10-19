import React from 'react';
import { Bath, BedDouble, Maximize } from "lucide-react";

function Stats({ p }) {
  return (
    <div className="stats">
      <span>
        <BedDouble size={16} />
        {p.beds} rec.
      </span>
      <span>
        <Bath size={16} />
        {p.baths} baños
      </span>
      <span>
        <Maximize size={15} />
        {p.area} m²
      </span>
    </div>
  );
}

export default Stats;