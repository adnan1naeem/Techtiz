import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logoLg from "../../assets/logoLg.png";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Grid, Hidden, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F9F9F9",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  menuButton: {
    color: "#5B5B5B",
    [theme.breakpoints.down("sm")]: {
      padding: 4,
    },
  },
  title: {
    flexGrow: 1,
  },
  color: {
    width: "100%",
    [theme.breakpoints.up("xl")]: {
      margin: "auto",
      maxWidth: 1900,
    },
  },
  appbarlinks: {
    fontSize: 22,
    fontWeight: 300,
    color: "#000000",
    fontFamily: "Axiforma",
  },

  barButton: {
    fontSize: 22,
    fontFamily: "Axiforma",
    fontWeight: 300,
    color: "#FFFFFF",
    lineHeight: "25px",
    backgroundColor: "#FFC107",
    textTransform: "capitalize",
    borderRadius: 72,
    height: 47,
    width: 189,
    [theme.breakpoints.only("xs")]: {
      fontSize: 14,
      height: 27,
      width: 110,
    },
    "&:hover": {
      backgroundColor: "#FFC107",
    },
  },
  dflex: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: { flex: 1, justifyContent: "flex-start" },
  },

  logoStyling: {
    marginTop: 16,
    [theme.breakpoints.only("xs")]: {
      height: 37,
      width: 90,
      marginTop: 0,
    },
  },
  contactContainer: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: 10,
    },
  },
  ml: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
    },
  },
  logoContainer: {
    [theme.breakpoints.down("sm")]: {
      flex: 1,
    },
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={12} lg={12}>
        <div className={classes.root}>
          <AppBar
            position="static"
            classes={{ colorPrimary: classes.color, root: classes.root }}
            elevation={0}
          >
            <Hidden mdUp>
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </Hidden>

            <Box className={classes.dflex}>
              <Box className={classes.logoContainer}>
                <img className={classes.logoStyling} src={logoLg} alt="" />
              </Box>
              <Hidden smDown>
                <Link style={{ textDecoration: "none" }} href="/#services">
                  <Box className={classes.appbarlinks}>Services</Box>
                </Link>
                <Link style={{ textDecoration: "none" }} href="/#our-projects">
                  <Box className={classes.appbarlinks}>Experties</Box>
                </Link>
                <Link style={{ textDecoration: "none" }} href="/#industries">
                  <Box className={classes.appbarlinks}>About </Box>
                </Link>
                <Link style={{ textDecoration: "none" }} href="/#feedback">
                  <Box className={classes.appbarlinks}> Portfolio</Box>
                </Link>
              </Hidden>
              <Link
                style={{ textDecoration: "none" }}
                href="/#contactUs"
                className={classes.ml}
              >
                <Box className={classes.contactContainer}>
                  <Button className={classes.barButton}>Contact</Button>
                </Box>
              </Link>
            </Box>
          </AppBar>
        </div>
      </Grid>
    </Grid>
  );
}
