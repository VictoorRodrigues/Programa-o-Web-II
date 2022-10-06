import React, { useEffect, useState } from "react";

export default function Contador(props) {
  const [cont, setCont] = useState(1);

  useEffect(() => {
    console.log(cont);
  }, [cont]);

  function aumenta() {
    setCont(cont + 1);
    console.log(cont);
  }

  function diminui() {
    setCont(cont - 1);
    console.log(cont);
  }

  return (
    <div>
      <h1>Contador: {cont}</h1>
      <button onClick={aumenta}>+</button>
      <button onClick={diminui}>-</button>
    </div>
  );
}
