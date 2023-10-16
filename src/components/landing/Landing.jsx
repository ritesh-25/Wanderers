import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import image3 from "../../assests/image3.jpg";
import image4 from "../../assests/image4.jpg";
import image5 from "../../assests/image5.jpg";
import image8 from "../../assests/image8.jpg";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

const Landing = () => {
  const [sliderHeight, setSliderHeight] = useState(70);

  const handleResize = () => {
    const sliderWidth = window.innerWidth; // Adjust this based on your container's width
    // You can adjust the formula as needed
    const newSliderHeight = (sliderWidth * 0.5) / 9;
    setSliderHeight(newSliderHeight);
  };

  useEffect(() => {
    handleResize(); // Set initial height
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    { url: image3 },
    { url: image4 },
    { url: image5 },
    { url: image8 },
  ];

  return (
    <div>
      <Box className="Landing">
        <SimpleImageSlider
          className="SimpleImageSlider"
          width={"100%"}
          height={`${sliderHeight}%`}
          images={images}
          showBullets={true}
          autoPlay={true}
          timer ={4000}
          style={{ maxWidth: "100%" }}
        />
      </Box>
    </div>
  );
};

const StyledSimpleImageSlider = styled(SimpleImageSlider)`
  .slider-wrapper {
    transition: transform s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
`;


export default Landing;
