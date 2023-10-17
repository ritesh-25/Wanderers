import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Wrapper from "./styles";


const AboutUs = ({ marginTop = 0 }) => {

    return (
        <Wrapper>
            <Box className="maindiv" style={{ marginTop: `${marginTop}%` }}>
            <Box className="child1"></Box>
            <Box className="child2"></Box>
            </Box>
        </Wrapper>
    );
}

export default AboutUs;