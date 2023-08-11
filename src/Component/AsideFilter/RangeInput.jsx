import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { debounce } from "@mui/material";
import { useEffect } from "react";

const RangeInput = ({ slider, setSlider }) => {
  const handleChange = (event, newValue) => {
    setSlider(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        value={slider}
        onChange={debounce(handleChange, 0)}
        valueLabelDisplay="auto"
        step={100}
        min={0}
        max={30000}
      />
    </Box>
  );
};

export default RangeInput;
