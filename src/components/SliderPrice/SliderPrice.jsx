import React from "react";
// import { makeStyles } from "@mui/material/styles";
import Slider from "@mui/material/Slider/Slider";

const SliderProton = ({ value, changePrice }) => {
  return (
    <div className="w-full mt-4 px-4">
      <Slider
        value={value}
        onChange={changePrice}
        valueLabelDisplay="on"
        min={1900000}
        max={59312000}
      />
    </div>
  );
};

export default SliderProton;