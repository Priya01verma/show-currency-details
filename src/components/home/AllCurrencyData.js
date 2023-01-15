import React, { useState } from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import CurrencyTable from "../component/CurrencyTable";
import { useSelector, useDispatch } from "react-redux";

const AllCurrencyData = () => {
  const [initialRequestMade, setInitialRequestMade] = useState(false);
  const dispatch = useDispatch();

  const { allCurrencyData = [] } = useSelector((state) => state.AllCurrency);

  console.log("priya verma", allCurrencyData);

  const classes = useStyles();
  return (
    <Box p={4}>
      {allCurrencyData.length !== 0 ? (
        <Box pt={3}>
          <CurrencyTable />
        </Box>
      ) : (
        <Box
          display={"flex"}
          justifyContent={"center"}
          className={classes.root}
          alignItems={"center"}
        >
          <Box>{initialRequestMade ? "No Data Found" : "loading...."}</Box>
        </Box>
      )}
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 150px)",
  },
}));
export default AllCurrencyData;
