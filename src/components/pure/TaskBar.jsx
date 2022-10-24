import React from "react";

//*MATERIAL UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link as Linkui } from "@mui/material";
//import MenuIcon from "@mui/icons-material/Menu";

//*REACT ROUTER DOM
import { Link } from "react-router-dom";

export function TaskBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
          <Link
            className="btn btn-outline-primary"
            style={{ color: "white", textDecoration: "none" }}
          >
            ABOUT
          </Link>
          <Linkui> ABOUT</Linkui>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
