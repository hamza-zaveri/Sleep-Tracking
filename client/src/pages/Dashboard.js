import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {Bar} from 'react-chartjs-2';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,

    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function Dashboard() {
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
      
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: "relative",
    },
    layout: {
      width: 700, //"auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 700,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: "flex",
      justifyContent: "flex-end",
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));

  const [exercises, setExercises] = useState([]);

  React.useEffect(() => {
    axios
      .get("https://fitness-tracker-mern.herokuapp.com/exercises")
      .then((response) => {
        setExercises(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteExercise = (id) => {
    axios
      .delete("https://fitness-tracker-mern.herokuapp.com/exercises/" + id)
      .then((response) => {
        console.log(response.data);
      });
    const del = exercises.filter((el) => el._id !== id);
    setExercises(del);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Dashboard
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Activity</StyledTableCell>
                  <StyledTableCell align="right">Date</StyledTableCell>
                  <StyledTableCell align="right">Start-Time</StyledTableCell>
                  <StyledTableCell align="right">End-Time</StyledTableCell>
                  <StyledTableCell align="right">No Of Hours</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <StyledTableRow>
                  <StyledTableCell>Mid Day Nap</StyledTableCell>
                  <StyledTableCell align="right">20/03/2022</StyledTableCell>
                  <StyledTableCell align="right">12:15 PM</StyledTableCell>
                  <StyledTableCell align="right">1:20 PM</StyledTableCell>
                  <StyledTableCell align="right">1 hr 5 mins</StyledTableCell>
                  </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

      </main>
      
      <Copyright />
    </React.Fragment>
  );
}
export default Dashboard;
