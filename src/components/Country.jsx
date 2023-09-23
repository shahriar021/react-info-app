import React from "react";

import style from "./country.module.css";

export default function Country(props) {
  const handleRemoveCountry = (n) => {
    props.onRemove(n);
  };
  const { name, flags, capital, population, area } = props.country;
  return (
    <div className={style.country}>
      <img src={flags.png} alt={name.common} className={style.flag} />
      <h3>name:{name.common}</h3>
      <h3>population:{population}</h3>
      <h3>capital:{capital}</h3>
      <h3>area:{area}</h3>
      <button
        className={style.btn}
        onClick={() => {
          handleRemoveCountry(name.common);
        }}
      >
        Remove country
      </button>
    </div>
  );
}
