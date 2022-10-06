import React from "react";

export default function Card(props) {
  const { tipo, img, nome } = props;

  return (
    <div className="card">
      <h1>{nome || "Desconhecido"}</h1>
      <h3>{tipo}</h3>
      <img src={img} />
    </div>
  );
}
