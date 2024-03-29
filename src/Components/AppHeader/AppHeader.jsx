import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  Box,
  Container,
  IconButton,
  Button,
} from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MenuIcon from "@mui/icons-material/Menu";
const AppHeader = () => {
  const pages = ["list", "new"];
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" style={{ background: "#4a4e69" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <SportsEsportsIcon
            sx={{
              transform: "scale(1.75)",
              display: { xs: "none", md: "flex" },
              mr: "2rem",
            }}
          />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            GameLib
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <NavLink
                  to={page}
                  key={page}
                  style={{ textDecoration: "none" }}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}>
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </Button>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <SportsEsportsIcon
            sx={{
              transform: "scale(1.75)",
              display: { xs: "flex", md: "none" },
              mr: 2,
            }}
          />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            GameLib
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}>
            {pages.map((page) => (
              <NavLink to={page} key={page} style={{ textDecoration: "none" }}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}>
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
