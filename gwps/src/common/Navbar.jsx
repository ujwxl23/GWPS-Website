import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Links } from "../common/Links";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

import banner from "../assets/banner.jpg";

function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src={banner}
        alt="logo"
        style={{
          width: "200px",
          margin: "10px auto",
        }}
      />
      <List>
        {Links.filter((link) => link.showInNavigation).map((link) => (
          <ListItem key={link.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(link.path)}
            >
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <img
            src={banner}
            alt="logo"
            style={{
              marginRight: "10px",
              width: "250px",
              marginTop: "1px",
              marginBottom: "1px",
            }}
          />
          <Box sx={{ flexGrow: 1 }} />

          {/* ✅ Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {Links.filter((link) => link.showInNavigation).map((link) => (
              <Button
                key={link.name}
                color="inherit"
                onClick={() => navigate(link.path)}
                sx={{ ml: 2 }}
              >
                {link.name}
              </Button>
            ))}
          </Box>

          {/* ✅ Mobile Hamburger Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ✅ Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
