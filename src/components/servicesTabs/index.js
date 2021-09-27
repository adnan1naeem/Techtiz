import * as React from "react";
import PropTypes from "prop-types";
import {
  Tabs,
  Box,
  Tab,
  Typography,
  Grid,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 30,
    fontFamily: "Axiforma",
    fontWeight: 300,
    colors: "#000000",
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
    <Grid container justifyContent="center">
      <Grid item lg={10}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                className={classes.title}
                label="Mobile Development"
                {...a11yProps(0)}
              />
              <Tab
                className={classes.title}
                label="Front-end Development"
                {...a11yProps(1)}
              />
              <Tab
                className={classes.title}
                label="Back-end Development"
                {...a11yProps(2)}
              />
              <Tab
                className={classes.title}
                label="Quality Assurance"
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
}
