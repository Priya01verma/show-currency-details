import { GET_ALL_CURRENCY } from "./action";
import currencyData from "./currencyContent.json";

const initialState = {
  allCurrencyData: currencyData,
  favouriteBake: [],
};

const AllCurrency = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CURRENCY:
      return {
        ...state,
        allCurrencyData: currencyData,
      };
    default:
      return state;
  }
};
export default AllCurrency;
