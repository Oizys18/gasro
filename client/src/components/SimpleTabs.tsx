import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BasicCard from "components/BasicCard";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import img from "assets/images/1.jpg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
        >
          <Tab disableRipple={true} label="가스식" {...a11yProps(0)} />
          <Tab disableRipple={true} label="전기식" {...a11yProps(1)} />
          <Tab disableRipple={true} label="추천제품" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <BasicCard img={img} title={"hello"} content={"world"}></BasicCard>
          </Grid>
          <Grid item xs={4}>
            <BasicCard img={img} title={"hello"} content={"world"}></BasicCard>
          </Grid>
          <Grid item xs={4}>
            <BasicCard img={img} title={"hello"} content={"world"}></BasicCard>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <BasicCard img={img} title={"hello"} content={"world"}></BasicCard>
          </Grid>
          <Grid item xs={4}>
            <BasicCard img={img} title={"hello"} content={"world"}></BasicCard>
          </Grid>
          <Grid item xs={4}>
            <BasicCard img={img} title={"hello"} content={"world"}></BasicCard>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <BasicCard img={img} title={"hello"} content={"world"}></BasicCard>
          </Grid>
          <Grid item xs={4}>
            <BasicCard img={img} title={"hello"} content={"world"}></BasicCard>
          </Grid>
          <Grid item xs={4}>
            <BasicCard img={img} title={"hello"} content={"world"}></BasicCard>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}

const TabWrapper = styled.div`
  justify-content: center;
  display: flex;
`;
