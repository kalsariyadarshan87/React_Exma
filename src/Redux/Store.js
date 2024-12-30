import { legacy_createStore as createstore } from "redux";
import myReducer from "./Reducer";




export const myStore = createstore(myReducer);


