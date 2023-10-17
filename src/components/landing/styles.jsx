import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Wrapper = styled(Box)({
  ".Landing": {
    // Set a default height
    height: "70vh",
    width: "100vw",
  },
".SimpleImageSlider":{

},

  // Use media queries to adjust the height based on viewport width
  "@media (max-width: 768px)": {
    ".Landing": {
      height: "50vh", // Adjust the height for smaller screens
    },
  },
  "@media (max-width: 480px)": {
    ".Landing": {
      height: "30vh", // Adjust the height for even smaller screens
    },
   
  },
});

export default Wrapper;
