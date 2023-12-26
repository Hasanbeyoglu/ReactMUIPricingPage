import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { useMediaQuery } from "@mui/material";


const Header = ({ logo, nav }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: theme.palette.secondary.main,
                textDecoration: 'none',
              }}
            >
              {logo}
            </Typography>
  
            {isMobile ? (
              <MobileNav logo={logo} nav={nav} />
            ) : (
              <Nav nav={nav} />
            )}
  
            {!isMobile && (
              <Button variant="contained" sx={{ ml: 2 }}>
                Sign Up
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  
  export default Header;