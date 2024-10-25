import React, { forwardRef, useEffect, useState } from "react";

import style from "./ColorSlider.module.css";

export default forwardRef( function ColorSlider( props, ref ) {
  const [value, setValue] = useState(0);

  useEffect(
    () => {
        props.onChangeFunction();
    }, [value]
  )
  return (
    <div className={style.wrapper}>
      <label htmlFor={`color${props.label}`}>
        <div
          className={style.labelBox}
          style={{
            backgroundColor: props.label,
          }}
        ></div>
      </label>
      <input
        type="range"
        value={value}
        name={`color${props.label}`}
        onChange={(e) => setValue(e.target.value)}
        min={0}
        max={255}
        ref={ref}
        disabled={props.disabled}
        />
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={0}
        max={255}
        disabled={props.disabled }
      />
    </div>
  );
}
)