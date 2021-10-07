import * as React from "react";
import PropTypes from "prop-types";
import mobileDev from "../../assets/mobileDev.png";
import servicemobile from "../../assets/servicemobile.png";
import backend from "../../assets/backend.png";
import frontend from "../../assets/frontend.png";
import valued from "../../assets/valued.png";
import apple from "../../assets/apple.png";
import {
  Tabs,
  Box,
  Tab,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { ServiceCards } from "../serviceCards";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 30,
    fontFamily: "Axiforma",
    fontWeight: 300,
    color: "#AFAFAF",
    [theme.breakpoints.only("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 22,
    },
  },
  tabsContainer: {
    justifyContent: "space-between",
  },
  selected: {
    color: "black",
  },
  indicator: {
    backgroundColor: "#FFC107",
  },
}));
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ServicesTabs() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container justifyContent="center" style={{ marginTop: 50 }}>
      <Grid item md={12} lg={10}>
        <Grid container md={12}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                classes={{
                  flexContainer: classes.tabsContainer,
                  indicator: classes.indicator,
                }}
                variant="scrollable"
              >
                <Tab
                  className={classes.title}
                  label="Mobile Development"
                  {...a11yProps(0)}
                  classes={{ selected: classes.selected }}
                />
                <Tab
                  className={classes.title}
                  label="Front-end Development"
                  {...a11yProps(1)}
                  classes={{ selected: classes.selected }}
                />
                <Tab
                  className={classes.title}
                  label="Back-end Development"
                  {...a11yProps(2)}
                  classes={{ selected: classes.selected }}
                />
                <Tab
                  className={classes.title}
                  label="Quality Assurance"
                  {...a11yProps(3)}
                  classes={{ selected: classes.selected }}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <ServiceCards
                heading="Join the future of mobility with our expertise"
                detail="For close to a decade, Intelivita being a top mobile app development company has produced apps for various industries and partners, from the start-up Social Media app Chatagram, to the Art of Works Virtual Reality app for tech giant’s Microsoft, we have worked with them all.

            "
                icons={mobileDev}
                image1={servicemobile}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ServiceCards
                heading="Join the future of mobility with our expertise"
                detail="For close to a decade, Intelivita being a top mobile app development company has produced apps for various industries and partners, from the start-up Social Media app Chatagram, to the Art of Works Virtual Reality app for tech giant’s Microsoft, we have worked with them all.

            "
                icons={apple}
                image1={backend}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ServiceCards
                heading="Join the future of mobility "
                detail="For close to a decade, Intelivita being a top mobile app development company has produced apps for various industries and partners, from the start-up Social Media app Chatagram, to the Art of Works Virtual Reality app for tech giant’s Microsoft, we have worked with them all.

              .

            "
                icons={mobileDev}
                image1={frontend}
              />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ServiceCards
                heading="Join the future of mobility with our expertise"
                detail="For close to a decade, Intelivita being a top mobile app development company has produced apps for various industries and partners, from the start-up Social Media app Chatagram, to the Art of Works Virtual Reality app for tech giant’s Microsoft, we have worked with them all.

            "
                icons={mobileDev}
                image1={valued}
              />
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
