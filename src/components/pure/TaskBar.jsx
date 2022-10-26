import React from "react";

//*MATERIAL UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

//*REACT ROUTER DOM
import { Link, Outlet } from "react-router-dom";

export function TaskBar({ state }) {
  return (
    <>
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
              <MenuIcon />
            </IconButton>

            <Button color="inherit">
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                HOME
              </Link>
            </Button>
            <Button color="inherit">
              {localStorage.getItem("credentials") ? (
                <Link
                  to="/login"
                  style={{ color: "white", textDecoration: "none" }}
                  onClick={() => state()}
                >
                  LOGOUT
                </Link>
              ) : (
                <Link
                  to="/login"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  LOGIN
                </Link>
              )}
            </Button>
            <Button color="inherit">
              <Link
                to="/about"
                style={{ color: "white", textDecoration: "none" }}
              >
                ABOUT
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to="/FAQs"
                style={{ color: "white", textDecoration: "none" }}
              >
                FAQs
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to="/task/1"
                style={{ color: "white", textDecoration: "none" }}
              >
                Task 1
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to="/task/2"
                style={{ color: "white", textDecoration: "none" }}
              >
                Task 2
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
      {/* <section> */}
      {/* </section> */}
    </>
  );
}
