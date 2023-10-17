import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import image3 from "../../assests/image3.jpg";
import image4 from "../../assests/image4.jpg";
import image5 from "../../assests/image5.jpg";
import image8 from "../../assests/image8.jpg";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import AboutUs from "../aboutus/Aboutus";
import Wrapper from "./styles";

const Landing = () => {
  const [sliderHeight, setSliderHeight] = useState(70);

  const handleResize = () => {
    const sliderWidth = window.innerWidth;

    if (sliderWidth > 768) {
      setSliderHeight(80);
    } else if (sliderWidth > 480) {
      setSliderHeight(50);
    } else if (sliderWidth > 0) {
      setSliderHeight(30);
    }
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
    <Wrapper>
      <Box >
      <div className="Landing"  >
        <SimpleImageSlider
          className="SimpleImageSlider"
          width={"100%"}
          height={`${sliderHeight}vh`}
          images={images}
          showBullets={true}
          autoPlay={true}
          timer ={4000}
        />
      </div>
      </Box>
      <AboutUs/>
    </Wrapper>
  );
};

const StyledSimpleImageSlider = styled(SimpleImageSlider)`
  .slider-wrapper {
    transition: transform s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
`;


export default Landing;
