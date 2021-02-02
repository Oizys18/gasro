import React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

interface DialogProps {
  title: string;
  open: boolean;
  handleClose: (e: any) => void;
  imgSrc: string;
  model: string;
  size: string;
  voltageE: string;
  voltageG: string;
  temp: string;
  velt: string;
  wattE: string;
  wattG: string;
  weight: string;
  textE: string;
  textG: string;
  lngUse: string;
  lpgUse: string;
  lngPressure: string;
  lpgPressure: string;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
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
      {value === index && <Box p={3}>{children}</Box>}
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
export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <h3>{children}</h3>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({ ...props }: DialogProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        maxWidth="lg"
      >
        <DialogTitle id="customized-dialog-title">{props.title}</DialogTitle>
        <IconButton
          aria-label="close"
          style={{ position: "absolute", right: "0", margin: "0.3em" }}
          onClick={props.handleClose}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <img src={props.imgSrc} alt="" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.root}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  centered
                >
                  <Tab disableRipple label="가스식" {...a11yProps(0)} />
                  <Tab disableRipple label="전기식" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <TableContainer>
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead>
                  </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  전기식 표<Table></Table>
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={props.handleClose}
            variant="outlined"
            color="default"
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
