import React from 'react';
import './ButtonRemover.scss';

type ButtonRemoverProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonRemover(props: ButtonRemoverProps) {
  return (
    <button className="btn-remover" {...props}>
      💔 Remover
    </button>
  );
}
