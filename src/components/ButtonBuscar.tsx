import React from 'react';
import './ButtonBuscar.scss';

type ButtonBuscarProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonBuscar(props: ButtonBuscarProps) {
  return (
    <button className="btn-buscar" {...props}>
      🔍 Buscar
    </button>
  );
}
