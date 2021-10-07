import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { IndustriesCard } from "../industriesCard";
import workMobile from "../../assets/workMobile.png";
import market from "../../assets/market.png";
import education from "../../assets/education.png";
import social from "../../assets/social.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    fontSize: 22,
    fontWeight: 300,
    fontFamily: "Axiforma",
    color: "#000000",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 30,
    },
  },
  bgClr: {
    backgroundColor: "white",
  },
}));

export default function IndustriesTabs({ setImage }) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let newImage =
      newValue === 1
        ? workMobile
        : newValue === 2
        ? social
        : newValue === 3
        ? education
        : market;
    setImage(newImage);
  };

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position="static"
        classes={{ colorPrimary: classes.bgClr }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="scrollable"
          scrollButtons="auto"
          style={{ color: "black" }}
        >
          <Tab className={classes.tabs} label="Food  " {...a11yProps(0)} />
          <Tab className={classes.tabs} label="E-commerce" {...a11yProps(1)} />
          <Tab className={classes.tabs} label="Social" {...a11yProps(2)} />
          <Tab className={classes.tabs} label="Education " {...a11yProps(3)} />

          <Tab
            className={classes.tabs}
            label="Marketplaces"
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <IndustriesCard
          name="Food "
          detail="Thank you again for the successful launch of the 3M and Converse applications. Your dedication, hard-work, flexibility, patience and professionalism is recognized and appreciated. "
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <IndustriesCard
          name="FoE-Commerce "
          detail="Thank you again for the successful launch of the 3M and Converse applications. Your dedication, hard-work, flexibility, patience and professionalism is recognized and appreciated. "
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <IndustriesCard
          name="Social "
          detail="Thank you again for the successful launch of the 3M and Converse applications. Your dedication, hard-work, flexibility, patience and professionalism is recognized and appreciated. "
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <IndustriesCard
          name="Education "
          detail="Thank you again for the successful launch of the 3M and Converse applications. Your dedication, hard-work, flexibility, patience and professionalism is recognized and appreciated. "
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <IndustriesCard
          name="Marketplaces "
          detail="Thank you again for the successful launch of the 3M and Converse applications. Your dedication, hard-work, flexibility, patience and professionalism is recognized and appreciated. "
        />
      </TabPanel>
    </div>
  );
}
