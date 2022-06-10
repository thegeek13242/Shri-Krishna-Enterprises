import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


const ResponsiveAppBar = () => {

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ color: "" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 500,
              letterSpacing: ".01rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Shri Krishna Enterprises
          </Typography>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Roboto",
              fontWeight: 500,
              letterSpacing: ".01rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Shri Krishna Enterprises
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
