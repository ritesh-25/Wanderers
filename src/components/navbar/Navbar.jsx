import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Wrapper from "./styles";

const Navbar = () => {
    return (
        <Wrapper>
            <Box className="NavBox">
            <Typography
            component=""
            href=""
            sx={{
                padding:'15px',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'Black',
              textDecoration: 'none',
              fontSize:'18px'
            }}
          >
            HOME
          </Typography>
          <Typography
            component=""
            href=""
            sx={{
                padding:'15px',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'Black',
              textDecoration: 'none',
              fontSize:'18px'
            }}
          >
           ABOUT US
          </Typography>
          <Typography
            component=""
            href=""
            sx={{
                padding:'15px',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'Black',
              textDecoration: 'none',
              fontSize:'18px'
            }}
          >
            ACCOMMODATION
          </Typography>
          <Typography
            component=""
            href=""
            sx={{
                padding:'15px',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'Black',
              textDecoration: 'none',
              fontSize:'18px'
            }}
          >
            DESERT SAFARI 
          </Typography>
          <Typography
            component=""
            href=""
            sx={{
                padding:'15px',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'Black',
              textDecoration: 'none',
              fontSize:'18px'
            }}
          >
            WHY US
          </Typography>
          <Typography
            component=""
            href=""
            sx={{
                padding:'15px',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              color: 'Black',
              textDecoration: 'none',
              fontSize:'18px'
            }}
          >
           CONTACT US 
          </Typography>
            </Box>
        </Wrapper>
    );
}
export default Navbar;