import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const CurrencyTable = () => {
  const classes = useStyles();

  const { allCurrencyData = [] } = useSelector((state) => state.AllCurrency);

  const rows = allCurrencyData;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">EXP Date</TableCell>
            <TableCell align="center">ATM</TableCell>
            <TableCell align="center">25d&nbsp;R/R</TableCell>
            <TableCell align="center">10d&nbsp;R/R</TableCell>
            <TableCell align="center">25d&nbsp;B/F</TableCell>
            <TableCell align="center">10d&nbsp;B/F</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" align="center" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.exp_date}</TableCell>
              <TableCell align="center">{row.atm}</TableCell>
              <TableCell align="center">{row.twenty_five_d_rr}</TableCell>
              <TableCell align="center">{row.ten_d_rr}</TableCell>
              <TableCell align="center">{row.twenty_five_d_bf}</TableCell>
              <TableCell align="center">{row.ten_d_bf}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrencyTable;
