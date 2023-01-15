import { combineReducers } from "redux";
import AllCurrency from "../models/AllCurrency";
import Auth from "../models/Auth";
import { firebaseReducer } from "react-redux-firebase";
//import {firestoreReducer} from "redux-firestore";

const RootReducer = combineReducers({
  AllCurrency,
  Auth,
  firebase: firebaseReducer,
  //firestore: firestoreReducer
});

export default RootReducer;
