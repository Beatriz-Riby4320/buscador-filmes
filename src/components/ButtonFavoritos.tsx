import React from 'react';
import './ButtonFavoritos.scss';

type ButtonFavoritosProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonFavoritos(props: ButtonFavoritosProps) {
  return (
    <button className="btn-favoritos" {...props}>
      ⭐ Ver Favoritos
    </button>
  );
}
