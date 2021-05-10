import React from "react";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const Range = ({ value, rangeSelector }) => {
  return (
    <div
      className="range"
      //   style={{
      //     margin: "auto",
      //     display: "block",
      //     width: "fit-content",
      //   }}
    >
      <Typography id="range-slider" gutterBottom></Typography>
      <div className="slider">
        <p>Prix entre :</p>
        <Slider
          max={300}
          value={value}
          onChange={rangeSelector}
          valueLabelDisplay="on"
        />
      </div>
      {/* Votre ordre de prix varie entre {value[0]}€ et {value[1]}€ */}
    </div>
  );
};

export default Range;
