import React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

interface DialogProps {
  title: string;
  open: boolean;
  handleClose: (e: any) => void;
  imgSrc: string;
  modelE: string;
  modelG: string;
  size: string;
  voltageE: string;
  voltageG: string;
  tempE: string;
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

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  //   onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
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
            <Grid item xs={5}>
              <Paper elevation={3} variant="outlined">
                <img src={props.imgSrc} alt="" />
              </Paper>
            </Grid>
            <Grid item xs={7}>
              <Grid container>
                <Grid item>
                  <Paper elevation={3}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum, repellendus vitae in officiis quos, ea culpa reiciendis
                    natus saepe ratione delectus deleniti est ipsam veritatis
                    necessitatibus, hic dolore provident soluta.
                  </Paper>
                </Grid>
              </Grid>
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
