import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logoLg from "../../assets/logoLg.png";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Grid, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#5B5B5B",
  },
  title: {
    flexGrow: 1,
  },
  color: {
    backgroundColor: "#F9F9F9",
    width: "100%",
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
      width: 155,
    },
  },
  contactContainer: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: 10,
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
              <Box>
                <img className={classes.logoStyling} src={logoLg} alt="" />
              </Box>
              <Hidden smDown>
                <Box className={classes.appbarlinks}>Services</Box>
                <Box className={classes.appbarlinks}>Experties</Box>
                <Box className={classes.appbarlinks}>About </Box>
                <Box className={classes.appbarlinks}> Portfolio</Box>
              </Hidden>
              <Box className={classes.contactContainer}>
                <Button className={classes.barButton}>Contact</Button>
              </Box>
            </Box>
          </AppBar>
        </div>
      </Grid>
    </Grid>
  );
}
