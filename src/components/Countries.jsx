import React from "react";

import Country from "./Country";

import style from "./countries.module.css";

import { v4 as uuidv4 } from "uuid";

export default function Countries(props) {
  return (
    <div className={style.countries}>
      {props.countries.map((country) => {
        const countryNew = { country, id: uuidv4() };
        return (
          <Country
            {...countryNew}
            key={countryNew.id}
            onRemove={props.onRemove}
          />
        );
      })}
    </div>
  );
}
