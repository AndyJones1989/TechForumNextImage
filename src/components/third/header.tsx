/* eslint-disable react/no-unescaped-entities */
'use client';
import { AppBar, Box, Button, Toolbar, Typography, styled } from "@mui/material";

export const Header = () => {

        const NavButton = styled(Button)({
            '&:hover': {
                boxShadow: '0 0 0 2pt white'
            }});
     
    return (
        <AppBar position="static" sx={{color: 'white', backgroundColor: '#403e3b', fontFamily: 'Roboto', position:'fixed', zIndex: '2'}}>
                <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Andy's Car Showroom
          </Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
          <NavButton color="inherit">Gallery</NavButton>
          <NavButton color="inherit">Contact Us</NavButton>
          <NavButton color="inherit">Login</NavButton>
          </Box>
        </Toolbar>
        </AppBar>
    )
    }